/* ==========================================================================
   SERVICE DATA FOR DETAILS MODAL
   ========================================================================== */
const serviceData = {
    "Court Marriage": {
        title: "Court Marriage Legal Assistance",
        description: "A Court Marriage is solemnized under the Special Marriage Act, 1954. It is applicable for all Indian citizens irrespective of their religion, caste, or creed. It allows couples of different faiths or backgrounds to marry legally without conversion.",
        eligibility: "Groom: 21+ Years, Bride: 18+ Years. Neither party should have a spouse living at the time of marriage. Both must be of sound mind and capable of giving valid consent.",
        documents: "Aadhar Card, PAN Card, Birth Certificates (or 10th pass certificate), 6 recent Passport size photos of both bride and groom, and identical documents for 3 adult witnesses.",
        timeline: "Mandatory 30-day notice period display. The entire process takes approximately 30-35 days.",
        benefits: "Legally recognized worldwide, zero requirement of religious ceremonies, no conversion required, official Government Certificate issued."
    },
    "Marriage Registration": {
        title: "Compulsory Marriage Registration",
        description: "If you have already performed a traditional wedding (Hindu, Muslim, Christian, etc.), registering it with the government is legally mandatory. We assist you in applying to the Registrar of Marriages under the relevant state laws to obtain your legal certificate.",
        eligibility: "Groom: 21+ Years, Bride: 18+ Years. The marriage must have already been solemnized in accordance with their personal rites or customs.",
        documents: "Wedding Invitation Card, Temple/Church marriage certificate or priest declaration, wedding photographs showing rituals, Aadhar/PAN of couple, and ID proofs of 3 wedding witnesses.",
        timeline: "Usually processed within 3 to 7 working days, depending on government office appointment slots.",
        benefits: "Official government proof of marriage, essential for applying for spouse visas, passports, joint bank accounts, and inheritance claims."
    },
    "Traditional Marriage": {
        title: "Traditional Ceremony & Registration",
        description: "A traditional wedding ceremony conducted according to personal religious rites (Hindu, Sikh, Buddhist, Jain temple rites). Post-ceremony, we facilitate the compulsory government registration to secure the official government marriage certificate.",
        eligibility: "Groom: 21+ Years, Bride: 18+ Years. Rites must be performed traditionally by an authorized priest or temple.",
        documents: "Age proofs (10th mark sheet/birth certificate), ID proofs, wedding photographs/invitation card, and 2 witnesses with their ID cards.",
        timeline: "Ceremony and local temple certificate in 1 day. Government registration takes an additional 3-5 days.",
        benefits: "Fast solemnization, respects traditional religious rituals, fully recognized legally once registered."
    },
    "Inter-Caste Marriage": {
        title: "Inter-Caste Marriage Guidance",
        description: "We provide complete legal security and processing for inter-caste marriages under the Special Marriage Act or Hindu Marriage Act. We ensure the legal process is completed smoothly and securely, offering complete protection guidance.",
        eligibility: "Groom: 21+ Years, Bride: 18+ Years. Standard eligibility criteria under Special Marriage Act apply.",
        documents: "Standard age proofs, address proofs, 6 passport photos, and ID cards of 3 witnesses.",
        timeline: "30 days under the Special Marriage Act, or 3-5 days if registering an already performed Vedic/Hindu marriage.",
        benefits: "Protection of legal rights, eligibility for state-specific inter-caste marriage promotion incentives (if applicable), complete security."
    },
    "Inter-Religion Marriage": {
        title: "Inter-Religion Marriage Legalities",
        description: "Inter-religion couples can marry under the Special Marriage Act, 1954. This law permits marriage without either partner having to convert to the other's religion. We guide couples through the legal drafts to avoid conflicts and secure their union.",
        eligibility: "Groom: 21+ Years, Bride: 18+ Years. Neither partner must have a living spouse. Mutual consent is essential.",
        documents: "Aadhar Card, PAN Card, passport photos, and ID cards of 3 witnesses representing either religion.",
        timeline: "Requires a mandatory 30-day notice display in the Marriage Officer's office.",
        benefits: "Preservation of original religious identities, full protection under Indian secular laws, globally accepted legal certificate."
    },
    "NRI Marriage": {
        title: "NRI Matrimonial Registration",
        description: "Specialized legal services for marriages where one or both partners are Non-Resident Indians (NRIs), Overseas Citizens of India (OCIs), or foreign nationals marrying Indian citizens in Guwahati.",
        eligibility: "Groom: 21+ Years, Bride: 18+ Years. Strict verification of marital status in country of residence.",
        documents: "Passport & valid visa, Single Status Certificate / No Objection Certificate (NOC) from embassy, employer/address proof abroad, and standard Indian documents for the other partner.",
        timeline: "Notice display of 30 days is mandatory under the Special Marriage Act.",
        benefits: "Smooth visa processing, internationally validated certificate, legal verification preventing future disputes."
    },
    "Divorce Consultation": {
        title: "Matrimonial & Divorce Legal Consultation",
        description: "Professional, confidential legal advice regarding separation, mutual consent divorce (Section 13B), alimony, child custody, and legal procedures required before remarrying.",
        eligibility: "Couples who have lived separately for at least 1 year and mutually agree that they cannot live together.",
        documents: "Marriage Certificate, wedding photos, joint petition drafts, and asset/income proofs for settlement.",
        timeline: "Mutual consent divorce takes 6 to 18 months (cooling-off period can sometimes be waived by court appeal).",
        benefits: "Peaceful settlement of matrimonial disputes, secure future paths, formal court-decreed separation."
    },
    "Legal Documentation": {
        title: "Affidavits & Court Documentation",
        description: "Drafting of all necessary legal documents including age declarations, single status affidavits, address corrections, witness declarations, and custom legal drafts required by the Registrar of Marriages.",
        eligibility: "Available for anyone preparing to register or solemnize their marriage.",
        documents: "Supporting details, drafts of personal profiles, and existing identity cards.",
        timeline: "Drafted, printed on stamp papers, and notarized within 24 hours.",
        benefits: "Prevents government form rejections, ensures 100% legal accuracy, saves time and multiple court visits."
    }
};

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header
    initStickyHeader();

    // 2. Mobile Drawer Navigation
    initMobileDrawer();

    // 3. Active Link Highlighter
    initActiveLinkHighlighter();

    // 4. Stat Counter Animation
    initStatCounters();

    // 5. FAQ Accordion
    initFaqAccordion();

    // 6. Form Submission (Mock & Validation)
    initForms();

    // 7. Modals (Consultation & Service Details)
    initModals();
    initDownloadFormsModal();

    // 8. Viewport Scroll Animations
    initScrollAnimations();

    // 9. Testimonial Slider
    initTestimonialSlider();

    // 10. Interactive Tab Switcher (about-advocate.html)
    initTabSwitcher();

    // 11. Auto consultation popup modal
    initAutoConsultationModal();

    // 12. Hero Tagline Text Rotator
    initTextRotator();

    // 13. Services Category Filter
    initServicesFilter();

    // 14. 30-Second Legal Notice Popup
    initLegalNoticePopup();

    // 15. Interactive Gallery & Lightbox
    initInteractiveGallery();

    // 16. Interactive Eligibility Quiz, Doc Tabs & Process Stepper
    initInteractiveComponents();

    // 17. Hero Client Photo Showcase Slider
    initHeroSlider();

    // 18. Google Review Lightbox Modal
    initGoogleReviewModal();
});

/* ==========================================================================
   1. STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   2. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileDrawer() {
    const hamburger = document.getElementById('hamburgerMenu');
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('drawerOverlay');
    const closeBtn = document.getElementById('drawerClose');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    if (!hamburger || !drawer || !overlay || !closeBtn) return;

    const toggleDrawer = (open) => {
        if (open) {
            drawer.classList.add('open');
            overlay.classList.add('open');
            hamburger.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            drawer.classList.remove('open');
            overlay.classList.remove('open');
            hamburger.classList.remove('is-open');
            document.body.style.overflow = '';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    };

    hamburger.addEventListener('click', () => {
        const isOpen = drawer.classList.contains('open');
        toggleDrawer(!isOpen);
    });
    closeBtn.addEventListener('click', () => toggleDrawer(false));
    overlay.addEventListener('click', () => toggleDrawer(false));

    // Close drawer on link click
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => toggleDrawer(false));
    });

    // Close drawer on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            toggleDrawer(false);
        }
    });
}

/* ==========================================================================
   3. ACTIVE NAV LINK HIGHLIGHTER ON SCROLL
   ========================================================================== */
function initActiveLinkHighlighter() {
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (pageName === href || (pageName === '' && href === 'index.html')) {
            link.classList.add('active');
        } else if (pageName === 'index.html' && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

/* ==========================================================================
   4. STAT COUNTERS (COUNT UP ANIMATION)
   ========================================================================== */
function initStatCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // lower is faster

    const startCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => startCount(counter), 15);
        } else {
            counter.innerText = target;
        }
    };

    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/* ==========================================================================
   5. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const isOpen = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            // Toggle current item
            if (isOpen) {
                item.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

/* ==========================================================================
   6. FORMS HANDLING (INQUIRY & APPOINTMENT MODAL)
   ========================================================================== */
function initForms() {
    // A. Main Contact Form
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Set loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Submitting...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
            
            const userName = document.getElementById('userName').value;
            const userPhone = document.getElementById('userPhone').value;
            const userEmail = document.getElementById('userEmail').value;
            const selectService = document.getElementById('selectService').value;
            const preferredDate = document.getElementById('preferredDate').value;
            const userMessage = document.getElementById('userMessage').value;

            // Form validation
            if (!/^\d{10}$/.test(userPhone.trim())) {
                showFeedback(formFeedback, "Please enter a valid 10-digit mobile number.", false);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                return;
            }

            // Mock saving to local storage (Google sheets integration prototype)
            const leadData = {
                leadId: Date.now(),
                name: userName,
                phone: userPhone,
                email: userEmail,
                service: selectService,
                preferredDate: preferredDate || 'N/A',
                message: userMessage || 'N/A',
                timestamp: new Date().toLocaleString(),
                status: 'New'
            };

            saveLeadLocally(leadData);

            // Simulate Network Delay
            setTimeout(() => {
                showFeedback(formFeedback, "Thank you! Your legal inquiry has been submitted. Advocate Khusboo Verma's team will contact you shortly.", true);
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1200);
        });
    }

    // B. Modal Appointment Form
    const modalForm = document.getElementById('modalForm');
    const modalFeedback = document.getElementById('modalFeedback');

    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById('modalSubmitBtn');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = `Confirming Appointment... <i class="fa-solid fa-spinner fa-spin"></i>`;

            const name = document.getElementById('modalName').value;
            const phone = document.getElementById('modalPhone').value;
            const service = document.getElementById('modalService').value;
            const date = document.getElementById('modalDate').value;

            if (!/^\d{10}$/.test(phone.trim())) {
                showFeedback(modalFeedback, "Invalid phone number. Must be 10 digits.", false);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                return;
            }

            const appointmentData = {
                leadId: Date.now(),
                name: name,
                phone: phone,
                service: service,
                preferredDate: date,
                message: 'Consultation Modal Booking',
                timestamp: new Date().toLocaleString(),
                status: 'New'
            };

            saveLeadLocally(appointmentData);

            setTimeout(() => {
                showFeedback(modalFeedback, "Appointment confirmed! We will call you back to lock your time slot.", true);
                modalForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                // Auto close modal after success
                setTimeout(() => {
                    closeModal(document.getElementById('consultationModal'));
                    modalFeedback.style.display = 'none';
                }, 2000);
            }, 1200);
        });
    }
}

function showFeedback(element, message, isSuccess) {
    element.innerText = message;
    element.className = 'form-feedback'; // Reset
    element.classList.add(isSuccess ? 'success' : 'error');
    element.style.display = 'block';
}

function saveLeadLocally(leadData) {
    try {
        let leads = JSON.parse(localStorage.getItem('courtMarriageLeads')) || [];
        leads.push(leadData);
        localStorage.setItem('courtMarriageLeads', JSON.stringify(leads));
        console.log("Lead captured successfully:", leadData);
    } catch (e) {
        console.error("Local storage error:", e);
    }
}

/* ==========================================================================
   7. MODALS CONTROLLER (BOOKING & SERVICE DETAILS)
   ========================================================================== */
function initModals() {
    // Consultation Modal
    const consultModal = document.getElementById('consultationModal');
    const closeConsultBtn = document.getElementById('closeConsultationModal');
    const consultOverlay = document.getElementById('modalOverlay');

    if (consultModal) {
        // Bind ALL consultation open triggers across the site
        const triggers = document.querySelectorAll('#openConsultationModal, .download-modal-trigger, .open-consult-modal, .consult-btn, .btn-consultation');
        triggers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // If not form download button, open consultation modal
                if (!btn.classList.contains('download-modal-trigger')) {
                    e.preventDefault();
                    openModal(consultModal);
                }
            });
        });

        if (closeConsultBtn) {
            closeConsultBtn.addEventListener('click', () => closeModal(consultModal));
        }
        if (consultOverlay) {
            consultOverlay.addEventListener('click', () => closeModal(consultModal));
        }
    }

    // Service Detail Modal
    const serviceModal = document.getElementById('serviceDetailModal');
    const closeServiceBtn = document.getElementById('closeServiceDetailModal');
    const serviceOverlay = document.getElementById('serviceDetailOverlay');

    if (serviceModal) {
        if (closeServiceBtn) closeServiceBtn.addEventListener('click', () => closeModal(serviceModal));
        if (serviceOverlay) serviceOverlay.addEventListener('click', () => closeModal(serviceModal));
    }

    // Global listener for ALL modal close buttons, overlays, and Escape key
    document.querySelectorAll('.modal-close, .modal-overlay, #cancelDownloadFormsModal').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const modal = this.closest('.modal');
            if (modal) closeModal(modal);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.open').forEach(m => closeModal(m));
            document.body.style.overflow = '';
        }
    });
}

function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    // Ensure body scroll is ALWAYS restored when no open modal remains
    const remainingOpen = document.querySelectorAll('.modal.open');
    if (remainingOpen.length === 0) {
        document.body.style.overflow = '';
    }
}

// Function triggered via HTML Service Cards
function openServiceDetail(serviceKey) {
    const data = serviceData[serviceKey];
    if (!data) return;

    const titleEl = document.getElementById('serviceDetailTitle');
    const contentEl = document.getElementById('serviceDetailContent');
    const modal = document.getElementById('serviceDetailModal');

    titleEl.innerHTML = `<i class="fa-solid fa-gavel text-primary"></i> ${data.title}`;
    contentEl.innerHTML = `
        <div class="modal-detail-block">
            <h4>Description</h4>
            <p>${data.description}</p>
        </div>
        <div class="modal-detail-block">
            <h4>Eligibility Requirements</h4>
            <p>${data.eligibility}</p>
        </div>
        <div class="modal-detail-block">
            <h4>Required Documents</h4>
            <p>${data.documents}</p>
        </div>
        <div class="modal-detail-block">
            <h4>Processing Timeline</h4>
            <p>${data.timeline}</p>
        </div>
        <div class="modal-detail-block">
            <h4>Key Legal Benefits</h4>
            <p>${data.benefits}</p>
        </div>
    `;

    openModal(modal);
}

/* ==========================================================================
   8. VIEWPORT SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
    // Selectors to automatically auto-animate across every single page
    const selectorsToAnimate = [
        '.section-header',
        '.section-title',
        '.sub-title',
        '.service-card',
        '.feature-card',
        '.court-card-item',
        '.doc-item-card',
        '.process-step-card',
        '.faq-item',
        '.gallery-item',
        '.pricing-card',
        '.contact-card-item',
        '.location-card-info',
        '.location-map-frame',
        '.cta-banner-container',
        '.hero-content',
        '.hero-slider-wrapper',
        '.eligibility-quiz-wrapper',
        '.profile-left-col',
        '.profile-right-col',
        '.guideline-card',
        '.trust-card',
        '.step-card'
    ];

    selectorsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            if (!el.hasAttribute('data-animate') && !el.classList.contains('reveal-on-scroll')) {
                el.classList.add('reveal-on-scroll');
                el.setAttribute('data-animate', 'fade-up');
                
                // Add staggered animation delays for cards in grids
                if (index > 0 && index < 10) {
                    el.style.transitionDelay = `${(index % 4) * 0.12}s`;
                }
            }
        });
    });

    const animatedElements = document.querySelectorAll('[data-animate], .reveal-on-scroll');

    const animationOptions = {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
}

/* ==========================================================================
   9. TESTIMONIALS SLIDER CONTROLLER
   ========================================================================== */
function initTestimonialSlider() {
    const track = document.getElementById('reviewsTrack');
    const prevBtn = document.getElementById('prevReviewBtn');
    const nextBtn = document.getElementById('nextReviewBtn');
    const dotsContainer = document.getElementById('reviewsDots');

    if (!track) return;

    const slides = Array.from(track.children);
    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoPlayTimer = null;

    const getVisibleSlides = () => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const maxIndex = () => {
        return Math.max(0, slides.length - getVisibleSlides());
    };

    const renderDots = () => {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const visible = getVisibleSlides();
        const dotCount = Math.max(1, slides.length - visible + 1);
        
        if (dotCount <= 1) return; // No dots needed if all fit in one screen view

        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to review slide ${i + 1}`);
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoPlay();
            });
            dotsContainer.appendChild(dot);
        }
    };

    const updateSliderPosition = () => {
        const visible = getVisibleSlides();
        const slideWidthPercent = 100 / visible;
        track.style.transform = `translateX(-${currentIndex * slideWidthPercent}%)`;
        
        const dots = dotsContainer ? Array.from(dotsContainer.children) : [];
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });

        // Hide navigation arrows if everything fits on screen
        if (prevBtn && nextBtn) {
            if (slides.length <= visible) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'flex';
                nextBtn.style.display = 'flex';
            }
        }
    };

    const goToSlide = (index) => {
        const maxIdx = maxIndex();
        if (index < 0) {
            currentIndex = maxIdx;
        } else if (index > maxIdx) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        updateSliderPosition();
    };

    const nextSlide = () => {
        goToSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        goToSlide(currentIndex - 1);
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });
    }

    // Auto Play
    const startAutoPlay = () => {
        autoPlayTimer = setInterval(() => {
            if (slides.length > getVisibleSlides()) {
                nextSlide();
            }
        }, 6000); // 6 seconds duration
    };

    const resetAutoPlay = () => {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            startAutoPlay();
        }
    };

    // Initialize Testimonial Slider
    renderDots();
    updateSliderPosition();
    startAutoPlay();

    // Listen for resize to recalculate slider layout
    window.addEventListener('resize', () => {
        renderDots();
        const maxIdx = maxIndex();
        if (currentIndex > maxIdx) {
            currentIndex = maxIdx;
        }
        updateSliderPosition();
    });

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
    track.addEventListener('mouseleave', startAutoPlay);
}

/* ==========================================================================
   10. INTERACTIVE TAB SWITCHER (about-advocate.html)
   ========================================================================== */
function initTabSwitcher() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length === 0) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const container = btn.closest('.tabs-container');
            const targetTabId = btn.getAttribute('data-tab');
            if (!container || !targetTabId) return;

            // Remove active states on other buttons
            container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            // Hide all tab content panes
            container.querySelectorAll('.tab-pane').forEach(pane => {
                pane.style.display = 'none';
            });

            // Activate current selection
            btn.classList.add('active');
            const activePane = document.getElementById(targetTabId);
            if (activePane) {
                if (targetTabId === 'tab-skills') {
                    activePane.style.display = 'grid'; // Grid layout for core practice areas
                } else {
                    activePane.style.display = 'block';
                }
            }
        });
    });
}

/* ==========================================================================
   11. AUTO CONSULTATION MODAL TIMER
   ========================================================================== */
function initAutoConsultationModal() {
    const modal = document.getElementById('consultationModal');
    if (!modal) return;

    // Check if the user has already dismissed the popup in the current session
    const isClosedBefore = sessionStorage.getItem('consultationModalClosed');
    if (isClosedBefore === 'true') return;

    // Open consultation modal automatically after 10 seconds (10000ms)
    const popupTimer = setTimeout(() => {
        openModal(modal);
    }, 10000);

    // Trap close event to prevent further popups
    const closeBtn = document.getElementById('closeConsultationModal');
    const overlay = document.getElementById('modalOverlay');

    const recordDismissal = () => {
        clearTimeout(popupTimer);
        sessionStorage.setItem('consultationModalClosed', 'true');
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', recordDismissal);
    }
    if (overlay) {
        overlay.addEventListener('click', recordDismissal);
    }

    // Capture ESC key close as well
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            recordDismissal();
        }
    });

    // Capture submit form to dismiss timer
    const form = document.getElementById('modalForm');
    if (form) {
        form.addEventListener('submit', recordDismissal);
    }
}

/* ==========================================================================
   12. HERO TAGLINE TEXT ROTATOR
   ========================================================================== */
function initTextRotator() {
    const el = document.getElementById('rotatorText');
    if (!el) return;
    
    const words = ["Legal", "Confidential", "Hassle-Free", "100% Reliable", "Expert Guided"];
    let wordIndex = 0;
    
    setInterval(() => {
        el.style.opacity = 0;
        setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            el.textContent = words[wordIndex];
            el.style.opacity = 1;
        }, 400); // 400ms fade duration matching css transition
    }, 3000); // changes every 3 seconds
}

/* ==========================================================================
   13. SERVICES CATEGORY FILTER (services.html)
   ========================================================================== */
function initServicesFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const serviceItems = document.querySelectorAll('.service-detail-card');
    if (filterBtns.length === 0 || serviceItems.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');
            
            // Toggle active button class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show/Hide items with animation
            serviceItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'flex';
                    // Trigger fade-in next tick
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'none';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(15px)';
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   14. 30-SECOND LEGAL NOTICE POPUP
   ========================================================================== */
function initLegalNoticePopup() {
    // Check if notice has been displayed in this session to prevent spamming
    const isNoticeShown = sessionStorage.getItem('legalNoticeShown');
    if (isNoticeShown === 'true') return;

    setTimeout(() => {
        // Create the element
        const popupEl = document.createElement('div');
        popupEl.className = 'legal-notice-popup';
        popupEl.id = 'legalNoticePopup';
        popupEl.innerHTML = `
            <div class="legal-notice-content">
                <button class="legal-notice-close" id="closeLegalNotice" aria-label="Close Notice"><i class="fa-solid fa-xmark"></i></button>
                <div class="legal-notice-header">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <h3>Important Notice</h3>
                </div>
                <div class="legal-notice-body">
                    <p>Under the Special Marriage Act, 1954, a mandatory <strong>30-day notice period</strong> is required after submitting your court marriage registration application. The certificate cannot be issued before the completion of this statutory period.</p>
                </div>
                <div class="legal-notice-footer">
                    <button class="btn btn-primary btn-sm" id="acceptLegalNotice">Acknowledge</button>
                </div>
            </div>
        `;

        document.body.appendChild(popupEl);

        // Add class to trigger slide-in animation
        setTimeout(() => {
            popupEl.classList.add('open');
        }, 100);

        // Close handlers
        const dismissNotice = () => {
            popupEl.classList.remove('open');
            setTimeout(() => {
                popupEl.remove();
            }, 400);
            sessionStorage.setItem('legalNoticeShown', 'true');
        };

        document.getElementById('closeLegalNotice').addEventListener('click', dismissNotice);
        document.getElementById('acceptLegalNotice').addEventListener('click', dismissNotice);
    }, 30000); // 30 seconds delay
}

/* ==========================================
   INTERACTIVE GALLERY & LIGHTBOX MODULE
   ========================================== */
function initInteractiveGallery() {
    const galleryTrack = document.getElementById('galleryTrack');
    const galleryPageGridTrack = document.getElementById('galleryPageGridTrack');
    const galleryPagination = document.getElementById('galleryPagination');
    const prevBtn = document.getElementById('galleryPrevBtn');
    const nextBtn = document.getElementById('galleryNextBtn');
    const loadMoreBtn = document.getElementById('loadMoreGalleryBtn');
    
    // Lightbox elements
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxPrev = document.getElementById('lightboxPrevBtn');
    const lightboxNext = document.getElementById('lightboxNextBtn');

    if (!galleryTrack && !galleryPageGridTrack) return;

    // Gallery Data Source (easily updateable array)
    const galleryData = [
        { id: 1, title: "Registration Desk Solemnization", category: "court", categoryLabel: "Court Marriage", image: "images/gallery_1.jpg", caption: "Couples signing official court marriage register in Guwahati advocate chamber." },
        { id: 2, title: "Government Marriage Certificate", category: "registration", categoryLabel: "Registration", image: "images/gallery_2.jpg", caption: "Joyful couple holding their legally issued court marriage registration certificate." },
        { id: 3, title: "Legal Advice Consultation", category: "chamber", categoryLabel: "Chamber & Office", image: "images/gallery_3.jpg", caption: "Advocate Khusboo Verma explaining registration procedures to clients." },
        { id: 4, title: "Traditional Garland Exchange", category: "ceremonies", categoryLabel: "Ceremonies", image: "images/gallery_4.jpg", caption: "Sacred garland exchange ritual before solemnizing marriage registration." },
        { id: 5, title: "Official Stamp & Document Signing", category: "court", categoryLabel: "Court Marriage", image: "images/gallery_5.jpg", caption: "Handing over wedding rings and signing official government affidavits." },
        { id: 6, title: "Guwahati Office & Witness Gathering", category: "chamber", categoryLabel: "Chamber & Office", image: "images/gallery_6.jpg", caption: "Happy family and witnesses gathered at Guwahati court marriage office." },
        { id: 7, title: "Traditional Marriage Blessings", category: "ceremonies", categoryLabel: "Ceremonies", image: "images/gallery_7.jpg", caption: "Traditional Assamese ritual blessing ceremony for legal marriage." },
        { id: 8, title: "Official Legal Seal & Agreement", category: "registration", categoryLabel: "Registration", image: "images/gallery_8.jpg", caption: "Official government stamp seal placed on final court marriage registration." },
        { id: 9, title: "Sacred Vow Rituals", category: "ceremonies", categoryLabel: "Ceremonies", image: "images/gallery_9.jpg", caption: "Couples exchanging legal vows and traditional garlands in Guwahati." },
        { id: 10, title: "Document Review & Drafting", category: "chamber", categoryLabel: "Chamber & Office", image: "images/gallery_10.jpg", caption: "Detailed legal verification of witness IDs and marriage application notices." },
        { id: 11, title: "Court Appearance & Approval", category: "court", categoryLabel: "Court Marriage", image: "images/gallery_11.jpg", caption: "Couples celebrating successful court appearance and marriage authorization." },
        { id: 12, title: "Official Registration Seal", category: "registration", categoryLabel: "Registration", image: "images/gallery_12.jpg", caption: "Certified legal registrar seal affixed to government marriage certificate." }
    ];

    let currentFilter = 'all';
    let isExpanded = false;
    let currentSlide = 0;
    let activeLightboxIndex = 0;
    let filteredItems = [...galleryData];

    // Helper: get items per view based on viewport width
    function getItemsPerView() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    // Render Gallery
    function renderGallery() {
        filteredItems = galleryData.filter(item => currentFilter === 'all' || item.category === currentFilter);

        // 1. Render Home Page Slider if element exists
        if (galleryTrack) {
            const displayLimit = isExpanded ? filteredItems.length : Math.min(6, filteredItems.length);
            const visibleItems = filteredItems.slice(0, displayLimit);

            galleryTrack.innerHTML = visibleItems.map((item, idx) => `
                <div class="gallery-card" data-index="${idx}" data-id="${item.id}">
                    <div class="gallery-img-box">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                        <div class="gallery-overlay">
                            <div class="gallery-zoom-icon">
                                <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div class="gallery-info">
                        <div>
                            <span class="gallery-badge">${item.categoryLabel}</span>
                            <h4>${item.title}</h4>
                            <p>${item.caption}</p>
                        </div>
                    </div>
                </div>
            `).join('');

            if (loadMoreBtn) {
                if (filteredItems.length <= 6) {
                    loadMoreBtn.style.display = 'none';
                } else {
                    loadMoreBtn.style.display = 'inline-flex';
                    if (isExpanded) {
                        loadMoreBtn.innerHTML = `<i class="fa-solid fa-compress"></i> <span>Show Fewer Photos</span>`;
                    } else {
                        loadMoreBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> <span>Load More Photos (${filteredItems.length - 6} More)</span>`;
                    }
                }
            }

            currentSlide = 0;
            updateSliderPosition();
            renderPagination(visibleItems.length);
        }

        // 2. Render Dedicated Gallery Page Grid if element exists
        if (galleryPageGridTrack) {
            galleryPageGridTrack.innerHTML = filteredItems.map((item, idx) => `
                <div class="gallery-grid-item" data-index="${idx}">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="gallery-grid-overlay">
                        <span class="gallery-grid-badge">${item.categoryLabel}</span>
                        <div class="gallery-grid-zoom">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                        <p class="gallery-grid-caption">${item.title}</p>
                    </div>
                </div>
            `).join('');
        }

        attachCardClickEvents();
    }

    // Update Slider Track Transform (Home Page)
    function updateSliderPosition() {
        if (!galleryTrack) return;
        const itemsPerView = getItemsPerView();
        const totalCards = galleryTrack.children.length;
        const maxSlide = Math.max(0, totalCards - itemsPerView);

        if (currentSlide > maxSlide) currentSlide = maxSlide;
        if (currentSlide < 0) currentSlide = 0;

        const cardWidthPercent = 100 / itemsPerView;
        const movePercent = currentSlide * cardWidthPercent;
        galleryTrack.style.transform = `translateX(-${movePercent}%)`;

        if (prevBtn) prevBtn.classList.toggle('disabled', currentSlide === 0);
        if (nextBtn) nextBtn.classList.toggle('disabled', currentSlide >= maxSlide);

        updatePaginationDots();
    }

    // Render Pagination Dots
    function renderPagination(itemCount) {
        if (!galleryPagination) return;
        const itemsPerView = getItemsPerView();
        const totalPages = Math.max(1, itemCount - itemsPerView + 1);

        if (totalPages <= 1) {
            galleryPagination.style.display = 'none';
            return;
        }

        galleryPagination.style.display = 'flex';
        galleryPagination.innerHTML = Array.from({ length: totalPages }, (_, i) => `
            <span class="gallery-dot ${i === currentSlide ? 'active' : ''}" data-slide="${i}"></span>
        `).join('');

        galleryPagination.querySelectorAll('.gallery-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentSlide = parseInt(e.target.dataset.slide, 10);
                updateSliderPosition();
            });
        });
    }

    function updatePaginationDots() {
        if (!galleryPagination) return;
        galleryPagination.querySelectorAll('.gallery-dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlide);
        });
    }

    // Attach Card Click Events for Lightbox
    function attachCardClickEvents() {
        const cards = document.querySelectorAll('.gallery-card, .gallery-grid-item');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const idx = parseInt(card.dataset.index, 10);
                openLightbox(idx);
            });
        });
    }

    // Filter Tabs Click Events
    const filterTabs = document.querySelectorAll('.gallery-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            isExpanded = false;
            renderGallery();
        });
    });

    // Slider Controls (Next / Prev)
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSliderPosition();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const itemsPerView = getItemsPerView();
            const maxSlide = Math.max(0, galleryTrack ? galleryTrack.children.length - itemsPerView : 0);
            if (currentSlide < maxSlide) {
                currentSlide++;
                updateSliderPosition();
            }
        });
    }

    // Load More Button Event
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            renderGallery();
        });
    }

    // Window Resize Handler
    window.addEventListener('resize', () => {
        updateSliderPosition();
    });

    // Touch Swipe Support for Home Slider
    if (galleryTrack) {
        let startX = 0;
        let dist = 0;
        galleryTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        galleryTrack.addEventListener('touchend', (e) => {
            dist = e.changedTouches[0].clientX - startX;
            if (dist < -40) {
                const itemsPerView = getItemsPerView();
                const maxSlide = Math.max(0, galleryTrack.children.length - itemsPerView);
                if (currentSlide < maxSlide) {
                    currentSlide++;
                    updateSliderPosition();
                }
            } else if (dist > 40) {
                if (currentSlide > 0) {
                    currentSlide--;
                    updateSliderPosition();
                }
            }
        }, { passive: true });
    }

    // ==========================================
    // LIGHTBOX CONTROLLER
    // ==========================================
    function openLightbox(index) {
        if (!lightbox || index < 0 || index >= filteredItems.length) return;
        activeLightboxIndex = index;
        updateLightboxContent();
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function updateLightboxContent() {
        const item = filteredItems[activeLightboxIndex];
        if (!item) return;

        lightboxImg.src = item.image;
        lightboxImg.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxCategory.textContent = item.categoryLabel;
        lightboxCaption.textContent = item.caption;
        lightboxCounter.textContent = `${activeLightboxIndex + 1} / ${filteredItems.length}`;
    }

    function prevLightbox() {
        activeLightboxIndex = (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
        updateLightboxContent();
    }

    function nextLightbox() {
        activeLightboxIndex = (activeLightboxIndex + 1) % filteredItems.length;
        updateLightboxContent();
    }

    // Lightbox Controls Events
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);

    // Keyboard Shortcuts (Arrow Left/Right & Escape)
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
    });

    // Initial render
    renderGallery();
}

/* ==========================================================================
   16. INTERACTIVE ELIGIBILITY QUIZ & DOCUMENT TABS & PROCESS STEPPER
   ========================================================================== */
function initInteractiveComponents() {
    // 1. Eligibility Quiz
    const quizForm = document.getElementById('eligibilityQuizForm');
    const quizResultBox = document.getElementById('quizResultBox');
    const quizResultText = document.getElementById('quizResultText');

    if (quizForm && quizResultBox && quizResultText) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const groomAge = document.getElementById('groomAgeSelect').value;
            const brideAge = document.getElementById('brideAgeSelect').value;
            const maritalStatus = document.getElementById('maritalStatusSelect').value;

            if (groomAge === '21+' && brideAge === '18+' && maritalStatus === 'valid') {
                quizResultBox.className = 'quiz-result-box success';
                quizResultText.innerHTML = '🎉 <strong>Full Eligibility Confirmed!</strong> Both groom (21+) and bride (18+) meet all statutory requirements for Court Marriage in Guwahati.';
            } else {
                quizResultBox.className = 'quiz-result-box error';
                let reason = [];
                if (groomAge === 'under21') reason.push('Groom must be 21+ years old');
                if (brideAge === 'under18') reason.push('Bride must be 18+ years old');
                if (maritalStatus === 'invalid') reason.push('Legally valid divorce decree or unmarried status required');
                quizResultText.innerHTML = '⚠️ <strong>Notice:</strong> ' + reason.join(', ') + '. Contact Advocate Khusboo Verma for guidance.';
            }
        });
    }

    // 2. Document Category Tabs
    const docTabs = document.querySelectorAll('.doc-tab');
    const docPanes = document.querySelectorAll('.doc-tab-pane');

    docTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');
            docTabs.forEach(t => t.classList.remove('active'));
            docPanes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add('active');
        });
    });

    // 3. Process Stepper Wizard
    const stepBtns = document.querySelectorAll('.process-step-btn');
    const stepCards = document.querySelectorAll('.process-step-card');

    stepBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const stepNum = btn.getAttribute('data-step');
            stepBtns.forEach(b => b.classList.remove('active'));
            stepCards.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetCard = document.getElementById(`stepCard${stepNum}`);
            if (targetCard) targetCard.classList.add('active');
        });
    });
}

/* ==========================================================================
   17. HERO CLIENT PHOTO SHOWCASE SLIDER
   ========================================================================== */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-slider-dots .dot');
    const prevBtn = document.getElementById('heroSliderPrev');
    const nextBtn = document.getElementById('heroSliderNext');
    const sliderWrapper = document.getElementById('heroClientSlider');

    if (!slides.length) return;

    let currentIndex = 0;
    let autoplayTimer = null;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(nextSlide, 3800);
    }

    function stopAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            goToSlide(idx);
            startAutoplay();
        });
    });

    if (sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', stopAutoplay);
        sliderWrapper.addEventListener('mouseleave', startAutoplay);

        // Touch Swipe Support
        let startX = 0;
        sliderWrapper.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
        sliderWrapper.addEventListener('touchend', e => {
            let diffX = startX - e.changedTouches[0].clientX;
            if (Math.abs(diffX) > 40) {
                if (diffX > 0) nextSlide();
                else prevSlide();
                startAutoplay();
            }
        }, { passive: true });
    }

    startAutoplay();
}

/* ==========================================================================
   18. GOOGLE REVIEWS LIGHTBOX MODAL HANDLER
   ========================================================================== */
function initGoogleReviewModal() {
    const modal = document.getElementById('googleReviewModal');
    const closeBtn = document.getElementById('closeGoogleReviewModal');
    const reviewCards = document.querySelectorAll('.open-review-modal-btn');

    if (!modal) return;

    const modalAvatar = document.getElementById('modalReviewerAvatar');
    const modalName = document.getElementById('modalReviewerName');
    const modalMeta = document.getElementById('modalReviewerMeta');
    const modalTime = document.getElementById('modalReviewTime');
    const modalText = document.getElementById('modalReviewText');

    function openModal(card) {
        const reviewer = card.getAttribute('data-reviewer') || 'Verified Client';
        const photo = card.getAttribute('data-photo');
        const initial = card.getAttribute('data-initial') || reviewer.charAt(0);
        const location = card.getAttribute('data-location') || 'Guwahati';
        const time = card.getAttribute('data-time') || 'Recently';
        const text = card.getAttribute('data-text') || '';

        const currentAvatar = document.getElementById('modalReviewerAvatar');
        if (currentAvatar) {
            if (photo) {
                currentAvatar.outerHTML = `<img src="${photo}" alt="${reviewer}" class="reviewer-avatar-img" id="modalReviewerAvatar">`;
            } else {
                currentAvatar.outerHTML = `<div class="reviewer-avatar-circle" id="modalReviewerAvatar">${initial}</div>`;
            }
        }

        if (modalName) modalName.innerHTML = `${reviewer} <i class="fa-solid fa-circle-check" style="color: #4285f4; font-size: 14px;"></i>`;
        if (modalMeta) modalMeta.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${location} • Verified Google Maps Client`;
        if (modalTime) modalTime.innerText = time;
        if (modalText) modalText.innerText = `"${text}"`;

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    reviewCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    // Also initialize mobile review gallery slider
    initMobileReviewSlider();
}

/* ==========================================================================
   19. MOBILE-ONLY 1-CARD-AT-A-TIME REVIEW GALLERY SLIDER
   ========================================================================== */
function initMobileReviewSlider() {
    const track = document.getElementById('mobileReviewSliderTrack');
    const prevBtn = document.getElementById('mobileReviewPrev');
    const nextBtn = document.getElementById('mobileReviewNext');
    const dotsContainer = document.getElementById('mobileReviewDots');

    if (!track) return;

    const cards = track.querySelectorAll('.mobile-review-slide-card');
    if (cards.length === 0) return;

    let currentIndex = 0;

    // Create pagination dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        cards.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = `mobile-slider-dot ${idx === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => scrollToSlide(idx));
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots(index) {
        if (!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll('.mobile-slider-dot');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function scrollToSlide(index) {
        if (index < 0) index = cards.length - 1;
        if (index >= cards.length) index = 0;
        currentIndex = index;

        const cardWidth = cards[0].offsetWidth + 16;
        track.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
        updateDots(currentIndex);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => scrollToSlide(currentIndex - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => scrollToSlide(currentIndex + 1));
    }

    track.addEventListener('scroll', () => {
        const cardWidth = cards[0].offsetWidth + 16;
        if (cardWidth <= 0) return;
        const newIndex = Math.round(track.scrollLeft / cardWidth);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
            currentIndex = newIndex;
            updateDots(currentIndex);
        }
    }, { passive: true });

    // Optional auto slide every 5 seconds on mobile
    let autoSlideTimer = setInterval(() => {
        if (window.innerWidth <= 768) {
            scrollToSlide(currentIndex + 1);
        }
    }, 5000);

    track.addEventListener('touchstart', () => clearInterval(autoSlideTimer), { passive: true });
}

/* ==========================================================================
   16. DOWNLOAD FORMS MODAL CONTROLLER
   ========================================================================== */
function initDownloadFormsModal() {
    // 1. Ensure modal HTML exists in DOM; inject if missing
    let modal = document.getElementById('downloadFormsModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'downloadFormsModal';
        modal.innerHTML = `
            <div class="modal-dialog download-forms-dialog">
                <div class="modal-content download-forms-content">
                    <div class="download-forms-header modal-header">
                        <h3><i class="fa-solid fa-file-pdf"></i> Download Official Legal Forms</h3>
                        <button class="modal-close" id="closeDownloadFormsModal" aria-label="Close modal"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="download-forms-body modal-body">
                        <p class="download-forms-intro">Select the required official document to download:</p>
                        <div class="download-forms-list">
                            <a href="forms/Marriage_Application_Form.pdf" download="Marriage_Application_Form.pdf" target="_blank" class="download-form-item">
                                <div class="df-icon-wrap">
                                    <i class="fa-solid fa-file-pdf"></i>
                                </div>
                                <div class="df-details">
                                    <span class="df-title">Marriage_Application_Form</span>
                                    <span class="df-subtitle">Application for Registration of Marriage (PDF)</span>
                                </div>
                                <div class="df-action-btn">
                                    <i class="fa-solid fa-download"></i> <span>Download</span>
                                </div>
                            </a>

                            <a href="forms/Notice_of_Intended_Marriage.pdf" download="Notice_of_Intended_Marriage.pdf" target="_blank" class="download-form-item">
                                <div class="df-icon-wrap">
                                    <i class="fa-solid fa-file-pdf"></i>
                                </div>
                                <div class="df-details">
                                    <span class="df-title">Notice_of_Intended_Marriage</span>
                                    <span class="df-subtitle">Notice of Intended Marriage Form (PDF)</span>
                                </div>
                                <div class="df-action-btn">
                                    <i class="fa-solid fa-download"></i> <span>Download</span>
                                </div>
                            </a>

                            <a href="forms/Schedule_III_Declaration_Form.pdf" download="Schedule_III_Declaration_Form.pdf" target="_blank" class="download-form-item">
                                <div class="df-icon-wrap">
                                    <i class="fa-solid fa-file-pdf"></i>
                                </div>
                                <div class="df-details">
                                    <span class="df-title">Declaration Form</span>
                                    <span class="df-subtitle">Schedule III Declaration Form (PDF)</span>
                                </div>
                                <div class="df-action-btn">
                                    <i class="fa-solid fa-download"></i> <span>Download</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="download-forms-footer modal-footer">
                        <button type="button" class="btn btn-secondary" id="cancelDownloadFormsModal">Close</button>
                    </div>
                </div>
            </div>
            <div class="modal-overlay" id="downloadFormsOverlay"></div>
        `;
        document.body.appendChild(modal);
    }

    const closeBtn = document.getElementById('closeDownloadFormsModal');
    const cancelBtn = document.getElementById('cancelDownloadFormsModal');
    const overlay = document.getElementById('downloadFormsOverlay');

    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modal));
    if (cancelBtn) cancelBtn.addEventListener('click', () => closeModal(modal));
    if (overlay) overlay.addEventListener('click', () => closeModal(modal));

    // Global Click Listener for Download Form triggers
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('#headerDownloadBtn, .btn-download-header, .download-modal-trigger, .drawer-link[href*="forms/"]');
        
        if (trigger || (e.target.closest('a') && e.target.closest('a').textContent.trim().toLowerCase().includes('download form'))) {
            const link = trigger || e.target.closest('a');
            if (link && !link.classList.contains('download-form-item') && !link.closest('#downloadFormsModal')) {
                e.preventDefault();
                
                // Close mobile drawer if active
                const mobileDrawer = document.getElementById('mobileDrawer');
                const drawerOverlay = document.getElementById('drawerOverlay');
                if (mobileDrawer) mobileDrawer.classList.remove('open', 'active');
                if (drawerOverlay) drawerOverlay.classList.remove('open', 'active');
                document.body.style.overflow = 'auto';

                openModal(modal);
            }
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal(modal);
        }
    });
}



