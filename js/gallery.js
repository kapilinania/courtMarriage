/* ==========================================================================
   GALLERY.JS — Cloudinary-powered Dynamic Gallery
   Court Marriage Guwahati | gallery.html
   Workflow: gallery.html → JS → Cloudinary API → JSON → Loop → Display
   ========================================================================== */

(function () {
    'use strict';

    // ── Configuration ────────────────────────────────────────────────────────
    const GALLERY_CONFIG = {
        // These values are auto-loaded from localStorage (set via Admin Panel)
        // Or you can hardcode them here as fallback:
        cloudName: '',
        folder: 'court-marriage-guwahati',
        imagesPerPage: 12,
        showBadge: true,
    };

    // ── Helper to resolve local image URLs relative to /gallery/ page ──────────
    function resolveUrl(url) {
        if (!url) return '../images/gallery_1.jpg';
        if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
            return url;
        }
        if (url.startsWith('images/')) {
            return '../' + url;
        }
        return url;
    }

    // ── Static fallback images (used if Cloudinary is not configured) ─────────
    const LOCAL_IMAGES = [
        { id: 'local_1', url: '../images/gallery_1.jpg', thumb: '../images/gallery_1.jpg', title: 'Court Marriage Ceremony', category: 'court', caption: 'Official court marriage solemnization under the Special Marriage Act.', source: 'local' },
        { id: 'local_2', url: '../images/gallery_2.jpg', thumb: '../images/gallery_2.jpg', title: 'Marriage Registration Certificate', category: 'registration', caption: 'Legally registered marriage certificate issued by the registrar office.', source: 'local' },
        { id: 'local_3', url: '../images/gallery_3.jpg', thumb: '../images/gallery_3.jpg', title: 'Traditional Ceremony', category: 'ceremonies', caption: 'Traditional wedding ceremony documentation and registration.', source: 'local' },
        { id: 'local_4', url: '../images/gallery_4.jpg', thumb: '../images/gallery_4.jpg', title: 'Advocate Chamber Consultation', category: 'chamber', caption: 'Legal consultation session at Advocate Khusboo Verma\'s office.', source: 'local' },
        { id: 'local_5', url: '../images/gallery_5.jpg', thumb: '../images/gallery_5.jpg', title: 'Hindu Marriage Registration', category: 'registration', caption: 'Hindu Marriage Act registration ceremony completed.', source: 'local' },
        { id: 'local_6', url: '../images/gallery_6.jpg', thumb: '../images/gallery_6.jpg', title: 'Court Marriage Solemnization', category: 'court', caption: 'Marriage solemnized under the courts of Guwahati.', source: 'local' },
        { id: 'local_7', url: '../images/gallery_7.jpg', thumb: '../images/gallery_7.jpg', title: 'Couple Registration', category: 'couples', caption: 'Happy couple after successful marriage registration.', source: 'local' },
        { id: 'local_8', url: '../images/gallery_8.jpg', thumb: '../images/gallery_8.jpg', title: 'Office Ceremony', category: 'chamber', caption: 'Legal marriage process completed at our Athgaon office.', source: 'local' },
        { id: 'local_9', url: '../images/gallery_9.jpg', thumb: '../images/gallery_9.jpg', title: 'Inter-Faith Marriage', category: 'court', caption: 'Inter-faith marriage legally registered under the Special Marriage Act.', source: 'local' },
        { id: 'local_10', url: '../images/gallery_10.jpg', thumb: '../images/gallery_10.jpg', title: 'Certificate Collection', category: 'registration', caption: 'Official marriage certificates collected after registration.', source: 'local' },
        { id: 'local_11', url: '../images/gallery_11.jpg', thumb: '../images/gallery_11.jpg', title: 'Wedding Ceremony', category: 'ceremonies', caption: 'Complete wedding ceremony documentation in Guwahati.', source: 'local' },
        { id: 'local_12', url: '../images/gallery_12.jpg', thumb: '../images/gallery_12.jpg', title: 'Legal Consultation', category: 'chamber', caption: 'Expert legal guidance for marriage registration procedures.', source: 'local' },
    ];

    // ── State ────────────────────────────────────────────────────────────────
    let allImages = [];
    let filteredImages = [];
    let currentFilter = 'all';
    let lightboxIndex = 0;
    let isLoading = false;

    // ── Load Config from Admin Panel (localStorage) ───────────────────────────
    function loadAdminConfig() {
        try {
            const cloudCfg = JSON.parse(localStorage.getItem('cmg_cloud_config') || '{}');
            const galSettings = JSON.parse(localStorage.getItem('cmg_gallery_settings') || '{}');

            GALLERY_CONFIG.cloudName = cloudCfg.cloudName || '';
            GALLERY_CONFIG.folder = cloudCfg.folder || 'court-marriage-guwahati';
            GALLERY_CONFIG.imagesPerPage = parseInt(galSettings.perPage) || 12;
            GALLERY_CONFIG.showBadge = galSettings.showBadge !== 'no';
        } catch (e) {
            console.warn('[Gallery] Could not load admin config:', e);
        }
    }

    // ── Fetch from Cloudinary & Local Storage ─────────────────────────────────
    async function fetchCloudinaryImages() {
        // 1. Read stored uploads from localStorage (uploaded via Admin panel)
        const storedUploads = JSON.parse(localStorage.getItem('cmg_uploaded_images') || '[]');

        // 2. Fetch from Cloudinary tag endpoints if cloudName is configured
        let apiCloudImages = [];
        if (GALLERY_CONFIG.cloudName) {
            const tagsToTry = [GALLERY_CONFIG.folder, 'gallery', 'court_marriage', 'court', 'registration', 'ceremonies', 'chamber', 'couples'];

            for (const tag of tagsToTry) {
                try {
                    const url = `https://res.cloudinary.com/${GALLERY_CONFIG.cloudName}/image/list/${tag}.json`;
                    const res = await fetch(url);
                    if (res.ok) {
                        const data = await res.json();
                        const fetched = (data.resources || []).map(r => ({
                            id: r.public_id,
                            url: `https://res.cloudinary.com/${GALLERY_CONFIG.cloudName}/image/upload/q_auto,f_auto,w_1200/${r.public_id}`,
                            thumb: `https://res.cloudinary.com/${GALLERY_CONFIG.cloudName}/image/upload/q_auto,f_auto,w_600,h_450,c_fill/${r.public_id}`,
                            title: extractTitle(r.public_id),
                            category: extractCategory(r.tags),
                            caption: r.context?.custom?.caption || 'Court marriage photo — Guwahati.',
                            source: 'cloudinary',
                            public_id: r.public_id,
                            width: r.width,
                            height: r.height
                        }));
                        apiCloudImages.push(...fetched);
                    }
                } catch (err) { /* CORS or restricted endpoint fallback */ }
            }
        }

        // 3. Merge stored uploads + API results (deduplicate by public_id / id)
        const cloudMap = new Map();
        [...storedUploads, ...apiCloudImages].forEach(img => {
            const key = img.public_id || img.id || img.url;
            if (key) cloudMap.set(key, img);
        });

        return Array.from(cloudMap.values());
    }

    function extractTitle(publicId) {
        return publicId
            .split('/').pop()
            .replace(/[-_]/g, ' ')
            .replace(/\d{10,}/g, '')
            .trim()
            .replace(/\b\w/g, c => c.toUpperCase()) || 'Gallery Photo';
    }

    function extractCategory(tags) {
        if (!tags) return 'all';
        const known = ['court', 'registration', 'ceremonies', 'chamber', 'couples'];
        const tagArr = Array.isArray(tags) ? tags : (typeof tags === 'string' ? tags.split(',') : []);
        for (const t of tagArr.map(s => s.trim())) {
            if (known.includes(t)) return t;
        }
        return 'all';
    }

    // ── Show Skeletons ─────────────────────────────────────────────────────────
    function showSkeletons(count = 8) {
        const grid = document.getElementById('galleryPageGridTrack');
        if (!grid) return;
        grid.innerHTML = Array.from({ length: count }, () =>
            `<div class="gallery-skeleton"></div>`
        ).join('');
    }

    // ── Render Gallery Grid ───────────────────────────────────────────────────
    function renderGallery() {
        const grid = document.getElementById('galleryPageGridTrack');
        if (!grid) return;

        // Apply filter
        filteredImages = currentFilter === 'all'
            ? allImages
            : allImages.filter(img => img.category === currentFilter);

        updateCountLabel(filteredImages.length);

        if (filteredImages.length === 0) {
            grid.innerHTML = `
                <div class="gallery-empty-state">
                    <i class="fa-solid fa-images"></i>
                    <h3>No photos in this category yet</h3>
                    <p>Check back soon or browse all photos.</p>
                </div>`;
            return;
        }

        const catLabelMap = {
            court: 'Court Marriage', registration: 'Registration',
            ceremonies: 'Ceremony', chamber: 'Chamber & Office',
            couples: 'Couples', all: 'General'
        };

        grid.innerHTML = filteredImages.map((img, index) => `
            <div class="gallery-card cloudinary-card" data-index="${index}" data-category="${img.category}" style="animation: galleryCardIn 0.4s ease ${(index % 8) * 0.06}s both;">
                <span class="gallery-pill-badge">${(catLabelMap[img.category] || img.category).toUpperCase()}</span>
                <img src="${resolveUrl(img.thumb)}" alt="${img.title}" loading="lazy" decoding="async"
                     onerror="this.onerror=null;this.src='../images/gallery_1.jpg'">
                ${img.source === 'cloudinary' && GALLERY_CONFIG.showBadge ?
                    `<span class="cloudinary-badge"><i class="fa-solid fa-cloud"></i>Cloud</span>` : ''}
                <div class="gallery-card-overlay">
                    <div class="gallery-zoom-trigger" title="Click to view full image">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <div class="gallery-card-title-banner">${img.title}</div>
                </div>
            </div>
        `).join('');

        // Inject card animation keyframe if not already present
        if (!document.getElementById('galleryCardInStyle')) {
            const st = document.createElement('style');
            st.id = 'galleryCardInStyle';
            st.textContent = `@keyframes galleryCardIn { from { opacity:0; transform:translateY(20px) scale(0.96); } to { opacity:1; transform:none; } }`;
            document.head.appendChild(st);
        }

        // Click handlers
        grid.querySelectorAll('.gallery-card').forEach(card => {
            card.addEventListener('click', () => {
                const idx = parseInt(card.dataset.index);
                openLightbox(idx);
            });
        });
    }

    function updateCountLabel(count) {
        const el = document.getElementById('galleryTotalCount');
        if (el) el.textContent = count;
    }

    // ── Filter Tabs ───────────────────────────────────────────────────────────
    function initFilterTabs() {
        document.querySelectorAll('.gallery-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentFilter = tab.dataset.filter || 'all';
                renderGallery();
            });
        });
    }

    // ── Lightbox ──────────────────────────────────────────────────────────────
    function openLightbox(index) {
        lightboxIndex = index;
        const img = filteredImages[index];
        if (!img) return;

        updateLightboxContent(img, index);
        const lb = document.getElementById('galleryLightbox');
        if (lb) {
            lb.classList.add('active');
            lb.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function updateLightboxContent(img, index) {
        const lbImg = document.getElementById('lightboxImg');
        const lbTitle = document.getElementById('lightboxTitle');
        const lbCaption = document.getElementById('lightboxCaption');
        const lbCategory = document.getElementById('lightboxCategory');
        const lbCounter = document.getElementById('lightboxCounter');

        if (lbImg) {
            lbImg.style.opacity = '0';
            lbImg.src = resolveUrl(img.url);
            lbImg.alt = img.title;
            lbImg.onload = () => { lbImg.style.opacity = '1'; };
        }
        if (lbTitle) lbTitle.textContent = img.title;
        if (lbCaption) lbCaption.textContent = img.caption;
        if (lbCategory) lbCategory.textContent = img.category.charAt(0).toUpperCase() + img.category.slice(1);
        if (lbCounter) lbCounter.textContent = `${index + 1} / ${filteredImages.length}`;
    }

    function closeLightbox() {
        const lb = document.getElementById('galleryLightbox');
        if (lb) {
            lb.classList.remove('active');
            lb.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    function navigateLightbox(direction) {
        lightboxIndex = (lightboxIndex + direction + filteredImages.length) % filteredImages.length;
        updateLightboxContent(filteredImages[lightboxIndex], lightboxIndex);
    }

    function initLightbox() {
        const closeBtn = document.getElementById('lightboxClose');
        const prevBtn = document.getElementById('lightboxPrevBtn');
        const nextBtn = document.getElementById('lightboxNextBtn');
        const overlay = document.getElementById('lightboxOverlay');

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (overlay) overlay.addEventListener('click', closeLightbox);
        if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox(1));

        document.addEventListener('keydown', (e) => {
            const lb = document.getElementById('galleryLightbox');
            if (!lb || !lb.classList.contains('active')) return;
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
            if (e.key === 'Escape') closeLightbox();
        });

        // Touch/swipe support
        let touchStartX = 0;
        const lbContent = document.querySelector('.lightbox-card-dialog');
        if (lbContent) {
            lbContent.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
            lbContent.addEventListener('touchend', e => {
                const diff = touchStartX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) navigateLightbox(diff > 0 ? 1 : -1);
            }, { passive: true });
        }
    }

    // ── Stats / Count Label & View Toggles ─────────────────────────────────────
    function initStatsBar() {
        const statsBar = document.querySelector('.gallery-stats-bar');
        if (!statsBar) return;

        // View Toggles (grid vs masonry)
        document.querySelectorAll('.view-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const grid = document.getElementById('galleryPageGridTrack');
                if (!grid) return;
                if (btn.dataset.view === 'masonry') {
                    grid.classList.add('masonry-view');
                } else {
                    grid.classList.remove('masonry-view');
                }
            });
        });
    }

    // ── Main Init ─────────────────────────────────────────────────────────────
    async function initGallery() {
        loadAdminConfig();
        initFilterTabs();
        initLightbox();
        initStatsBar();

        // Inject stats bar + view toggles before the grid if not already in HTML
        const gridSection = document.querySelector('.gallery-grid-section .container');
        if (gridSection && !document.querySelector('.gallery-stats-bar')) {
            const statsBar = document.createElement('div');
            statsBar.className = 'gallery-stats-bar';
            statsBar.innerHTML = `
                <div class="gallery-count-label">
                    Showing <strong id="galleryTotalCount">—</strong> photos
                    ${GALLERY_CONFIG.cloudName ? '· <span style="color:var(--gold,#c59b27);font-weight:700;">☁ Cloudinary</span>' : '· Local Gallery'}
                </div>
                <div class="gallery-view-toggles">
                    <button class="view-toggle-btn active" data-view="grid" title="Grid View"><i class="fa-solid fa-grip"></i></button>
                    <button class="view-toggle-btn" data-view="masonry" title="Masonry View"><i class="fa-solid fa-table-columns"></i></button>
                </div>
            `;
            const filterTabs = gridSection.querySelector('.gallery-filter-tabs');
            if (filterTabs) filterTabs.after(statsBar);
            else gridSection.insertBefore(statsBar, gridSection.firstChild);

            // Re-init view toggles since DOM was just updated
            statsBar.querySelectorAll('.view-toggle-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    statsBar.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const grid = document.getElementById('galleryPageGridTrack');
                    if (!grid) return;
                    if (btn.dataset.view === 'masonry') {
                        grid.classList.add('masonry-view');
                    } else {
                        grid.classList.remove('masonry-view');
                    }
                });
            });
        }

        showSkeletons(8);

        // Fetch Cloudinary + Stored images
        const cloudImages = await fetchCloudinaryImages();

        // Merge: Newly uploaded Cloudinary images first at top, then local mock images
        if (cloudImages.length > 0) {
            allImages = [...cloudImages, ...LOCAL_IMAGES];
        } else {
            allImages = LOCAL_IMAGES;
        }

        filteredImages = allImages;
        renderGallery();
    }

    // ── Real-Time Auto Refresh when Admin Uploads Images ──────────────────────
    window.addEventListener('storage', (e) => {
        if (e.key === 'cmg_uploaded_images' || e.key === 'cmg_cloud_config') {
            initGallery();
        }
    });

    // ── Start when DOM is ready ───────────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGallery);
    } else {
        initGallery();
    }

})();
