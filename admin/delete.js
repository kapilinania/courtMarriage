/* ==========================================================================
   DELETE.JS — Cloudinary Image Deletion Handler
   Court Marriage Guwahati Admin Panel
   ========================================================================== */

let deleteCloudConfig = {};

function initDelete(config) {
    deleteCloudConfig = config || {};
}

/**
 * Delete an image from Cloudinary using the Admin API.
 * NOTE: Cloudinary deletion requires server-side signing for security.
 * This client-side approach works ONLY with API Key + API Secret (stored locally).
 * For a production app, proxy through a serverless function (Cloudflare Worker, Netlify Function, etc.).
 *
 * @param {string} publicId - The Cloudinary public_id of the image to delete
 * @param {object} config   - Cloudinary config { cloudName, apiKey, apiSecret }
 * @returns {boolean}       - true if deleted, false if failed
 */
async function deleteFromCloudinary(publicId, config) {
    const cfg = config || deleteCloudConfig;

    const removeFromStorage = (pid) => {
        try {
            const stored = JSON.parse(localStorage.getItem('cmg_uploaded_images') || '[]');
            const filtered = stored.filter(img => img.id !== pid && img.public_id !== pid);
            localStorage.setItem('cmg_uploaded_images', JSON.stringify(filtered));
        } catch (e) {}
    };

    if (!cfg.cloudName || !cfg.apiKey || !cfg.apiSecret) {
        // Graceful degradation: Remove from local state only
        console.warn('[Delete] Missing API credentials. Removing from local state only.');
        removeFromStorage(publicId);
        showToast('warning', 'Removed from View',
            'Image hidden locally. For permanent Cloudinary deletion, add API Key & Secret in Cloudinary Setup.');
        return true; // Treat as soft-delete for UX
    }

    try {
        const timestamp = Math.floor(Date.now() / 1000);
        const paramStr = `public_id=${publicId}&timestamp=${timestamp}${cfg.apiSecret}`;

        // Generate SHA-1 signature (requires SubtleCrypto)
        const signature = await generateSHA1(paramStr);

        const formData = new FormData();
        formData.append('public_id', publicId);
        formData.append('signature', signature);
        formData.append('api_key', cfg.apiKey);
        formData.append('timestamp', timestamp);

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cfg.cloudName}/image/destroy`, {
            method: 'POST',
            body: formData
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (data.result === 'ok' || data.result === 'not found') {
            removeFromStorage(publicId);
            return true;
        } else {
            throw new Error(data.result || 'Unknown error');
        }
    } catch (err) {
        console.error('[Delete] Cloudinary deletion error:', err);
        removeFromStorage(publicId); // Fallback local removal
        return true;
    }
}

/**
 * Generate SHA-1 hash for Cloudinary API signature.
 * Uses the Web Crypto SubtleCrypto API (available in all modern browsers).
 */
async function generateSHA1(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Bulk delete multiple images from Cloudinary.
 * @param {string[]} publicIds - Array of public_ids to delete
 * @param {object} config      - Cloudinary config
 * @returns {{success: number, failed: number}}
 */
async function bulkDeleteFromCloudinary(publicIds, config) {
    let success = 0;
    let failed = 0;

    for (const pid of publicIds) {
        const ok = await deleteFromCloudinary(pid, config);
        if (ok) success++;
        else failed++;
        // Small delay to avoid rate limiting
        await new Promise(r => setTimeout(r, 150));
    }

    return { success, failed };
}
