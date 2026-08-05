/* ==========================================================================
   UPLOAD.JS — Cloudinary Unsigned Upload Handler
   Court Marriage Guwahati Admin Panel
   ========================================================================== */

let uploadCloudConfig = {};
let selectedFiles = [];

function initUpload(config) {
    uploadCloudConfig = config || {};
    checkUploadConfigWarning();
}

function checkUploadConfigWarning() {
    const warn = document.getElementById('uploadConfigWarning');
    if (!warn) return;
    if (!uploadCloudConfig.cloudName || !uploadCloudConfig.uploadPreset) {
        warn.style.display = 'flex';
    } else {
        warn.style.display = 'none';
    }
}

// ── File Selection ─────────────────────────────────────────────────────────
const fileInput = document.getElementById('fileInput');
const uploadZone = document.getElementById('uploadZone');
const previewGrid = document.getElementById('uploadPreviewGrid');
const startUploadBtn = document.getElementById('startUploadBtn');
const clearFilesBtn = document.getElementById('clearFilesBtn');

if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        handleNewFiles(e.target.files);
    });
}

// ── Drag & Drop ────────────────────────────────────────────────────────────
if (uploadZone) {
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        const dt = e.dataTransfer;
        if (dt && dt.files.length) {
            handleNewFiles(dt.files);
        }
    });
}

function handleNewFiles(files) {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    Array.from(files).forEach(file => {
        if (!validTypes.includes(file.type)) {
            showToast('error', 'Invalid Format', `"${file.name}" is not a supported image format.`);
            return;
        }
        if (file.size > maxSize) {
            showToast('warning', 'File Too Large', `"${file.name}" exceeds the 10MB limit.`);
            return;
        }
        // Avoid duplicates
        if (!selectedFiles.find(f => f.name === file.name && f.size === file.size)) {
            selectedFiles.push(file);
        }
    });

    renderPreviewGrid();
    updateUploadButtons();
}

function renderPreviewGrid() {
    if (!previewGrid) return;
    previewGrid.innerHTML = '';

    selectedFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const item = document.createElement('div');
            item.className = 'preview-item';
            item.innerHTML = `
                <img src="${e.target.result}" alt="${file.name}" loading="lazy">
                <button class="preview-remove-btn" data-index="${index}" aria-label="Remove">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div style="position:absolute;bottom:0;left:0;right:0;padding:4px 6px;background:rgba(0,0,0,0.6);font-size:10px;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${file.name}</div>
            `;
            item.querySelector('.preview-remove-btn').addEventListener('click', () => removeFile(index));
            previewGrid.appendChild(item);
        };
        reader.readAsDataURL(file);
    });
}

function removeFile(index) {
    selectedFiles.splice(index, 1);
    renderPreviewGrid();
    updateUploadButtons();
}

function updateUploadButtons() {
    if (!startUploadBtn || !clearFilesBtn) return;
    startUploadBtn.disabled = selectedFiles.length === 0;
    clearFilesBtn.style.display = selectedFiles.length > 0 ? 'inline-flex' : 'none';
    if (typeof document.getElementById('uploadBadge') !== 'undefined') {
        const badge = document.getElementById('uploadBadge');
        if (badge) badge.style.display = selectedFiles.length > 0 ? 'inline-flex' : 'none';
    }
}

if (clearFilesBtn) {
    clearFilesBtn.addEventListener('click', () => {
        selectedFiles = [];
        if (previewGrid) previewGrid.innerHTML = '';
        if (fileInput) fileInput.value = '';
        updateUploadButtons();
    });
}

// ── Upload to Cloudinary ───────────────────────────────────────────────────
if (startUploadBtn) {
    startUploadBtn.addEventListener('click', startUpload);
}

async function startUpload() {
    if (!uploadCloudConfig.cloudName || !uploadCloudConfig.uploadPreset) {
        showToast('error', 'Not Configured', 'Please configure Cloudinary first (Cloud Name + Upload Preset).');
        if (typeof switchPanel === 'function') switchPanel('cloudinary');
        return;
    }

    if (selectedFiles.length === 0) {
        showToast('warning', 'No Files', 'Please select images to upload.');
        return;
    }

    const progressWrap = document.getElementById('uploadProgressWrap');
    const progressBar = document.getElementById('uploadProgressBar');
    const progressText = document.getElementById('uploadProgressText');
    const progressPct = document.getElementById('uploadProgressPct');

    if (progressWrap) progressWrap.classList.add('visible');
    startUploadBtn.disabled = true;
    startUploadBtn.innerHTML = '<i class="fa-solid fa-spinner spin"></i> Uploading...';

    const category = document.getElementById('uploadCategory')?.value || 'all';
    const title = document.getElementById('uploadTitle')?.value || '';
    const caption = document.getElementById('uploadCaption')?.value || '';
    const folder = document.getElementById('uploadFolder')?.value || uploadCloudConfig.folder || 'court-marriage-guwahati';
    const tagsRaw = document.getElementById('uploadTags')?.value || '';
    const tags = [category, folder, 'gallery', 'court_marriage', ...tagsRaw.split(',').map(t => t.trim()).filter(Boolean)].join(',');

    let uploaded = 0;
    let failed = 0;

    for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const pct = Math.round((i / selectedFiles.length) * 100);

        if (progressBar) progressBar.style.width = pct + '%';
        if (progressPct) progressPct.textContent = pct + '%';
        if (progressText) progressText.textContent = `Uploading ${i + 1}/${selectedFiles.length}: ${file.name}`;

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', uploadCloudConfig.uploadPreset);
            formData.append('folder', folder);
            if (tags) formData.append('tags', tags);
            if (title || file.name) formData.append('public_id', `${folder}/${(title || file.name.replace(/\.[^/.]+$/, '')).replace(/[^a-zA-Z0-9_-]/g, '_')}_${Date.now()}`);
            if (caption) formData.append('context', `caption=${caption}`);

            const res = await fetch(`https://api.cloudinary.com/v1_1/${uploadCloudConfig.cloudName}/image/upload`, {
                method: 'POST',
                body: formData
            });

            if (!res.ok) throw new Error('Upload failed');
            const data = await res.json();

            uploaded++;
            if (typeof addActivity === 'function') {
                addActivity('upload', `Uploaded: ${file.name}`, `Cloudinary › ${folder} › ${category}`);
            }

            const newImg = {
                id: data.public_id,
                url: data.secure_url,
                thumb: `https://res.cloudinary.com/${uploadCloudConfig.cloudName}/image/upload/q_auto,f_auto,w_300,h_200,c_fill/${data.public_id}`,
                title: title || file.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
                category: category,
                caption: caption,
                source: 'cloudinary',
                size: formatUploadBytes(data.bytes),
                public_id: data.public_id
            };

            // Save to localStorage persistence
            const stored = JSON.parse(localStorage.getItem('cmg_uploaded_images') || '[]');
            stored.unshift(newImg);
            localStorage.setItem('cmg_uploaded_images', JSON.stringify(stored));

            // Add to local gallery state if available
            if (typeof galleryImages !== 'undefined') {
                galleryImages.unshift(newImg);
            }
        } catch (err) {
            failed++;
            console.error('Upload error:', err, file.name);
        }
    }

    // Complete
    if (progressBar) progressBar.style.width = '100%';
    if (progressPct) progressPct.textContent = '100%';
    if (progressText) progressText.textContent = 'Upload complete!';

    setTimeout(() => {
        if (progressWrap) progressWrap.classList.remove('visible');
        if (progressBar) progressBar.style.width = '0%';
    }, 2000);

    startUploadBtn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Upload to Cloudinary';

    if (uploaded > 0) {
        showToast('success', `${uploaded} Image${uploaded > 1 ? 's' : ''} Uploaded!`, `Successfully uploaded to Cloudinary › ${folder}`);
        // Clear files after success
        selectedFiles = [];
        if (previewGrid) previewGrid.innerHTML = '';
        if (fileInput) fileInput.value = '';
        updateUploadButtons();

        // Update stats
        const totalEl = document.getElementById('statTotalImages');
        const cloudEl = document.getElementById('statCloudImages');
        if (totalEl) totalEl.textContent = (parseInt(totalEl.textContent) || 0) + uploaded;
        if (cloudEl) cloudEl.textContent = (parseInt(cloudEl.textContent) || 0) + uploaded;
        const badge = document.getElementById('manageBadge');
        if (badge) badge.textContent = (parseInt(badge.textContent) || 0) + uploaded;
    }

    if (failed > 0) {
        showToast('error', `${failed} Upload${failed > 1 ? 's' : ''} Failed`, 'Check your Cloudinary credentials and try again.');
    }

    startUploadBtn.disabled = selectedFiles.length === 0;
}

function formatUploadBytes(bytes) {
    if (!bytes) return '—';
    if (bytes > 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    return Math.round(bytes / 1024) + ' KB';
}
