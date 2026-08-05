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

    // 13. Services Category Filter (services.html)
    initServicesFilter();

    // 14. 30-Second Legal Notice Popup
    initLegalNoticePopup();
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
            setTimeout(() => startCount(counter), 10);
        } else {
            counter.innerText = target + '+';
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
    const openConsultBtn = document.getElementById('openConsultationModal');
    const closeConsultBtn = document.getElementById('closeConsultationModal');
    const consultOverlay = document.getElementById('modalOverlay');

    if (openConsultBtn && consultModal) {
        openConsultBtn.addEventListener('click', () => openModal(consultModal));
        closeConsultBtn.addEventListener('click', () => closeModal(consultModal));
        consultOverlay.addEventListener('click', () => closeModal(consultModal));
    }

    // Service Detail Modal
    const serviceModal = document.getElementById('serviceDetailModal');
    const closeServiceBtn = document.getElementById('closeServiceDetailModal');
    const serviceOverlay = document.getElementById('serviceDetailOverlay');

    if (serviceModal) {
        closeServiceBtn.addEventListener('click', () => closeModal(serviceModal));
        serviceOverlay.addEventListener('click', () => closeModal(serviceModal));
    }
}

function openModal(modalEl) {
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
    modalEl.classList.remove('open');
    document.body.style.overflow = 'auto';
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
    const animatedElements = document.querySelectorAll('[data-animate]');

    const animationOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Trigger once
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
