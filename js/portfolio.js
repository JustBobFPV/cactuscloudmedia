/**
 * Portfolio Gallery Filtering
 * Handles the filtering of portfolio items based on category
 */

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let animationFrame;

    // Debounced animation function with improved performance
    const animateItems = (filter) => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }

        // Use requestAnimationFrame for smooth animations
        animationFrame = requestAnimationFrame(() => {
            galleryItems.forEach(item => {
                const isVisible = filter === 'all' || item.getAttribute('data-category') === filter;
                
                // Apply transitions smoothly
                if (isVisible) {
                    item.style.display = 'block';
                    // Use requestAnimationFrame for smoother animation
                    requestAnimationFrame(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    });
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    // Hide after animation completes
                    setTimeout(() => {
                        if (item.style.opacity === '0') {
                            item.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    };

    // Add click handlers to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Initialize video grid layout with improved aspect ratio handling
    const videoGrid = document.querySelector('.video-grid');
    if (videoGrid) {
        const videoItems = videoGrid.querySelectorAll('.video-item');
        
        // Set aspect ratio for video wrappers
        videoItems.forEach(item => {
            const wrapper = item.querySelector('.video-wrapper');
            if (wrapper) {
                // Use CSS custom property for aspect ratio
                wrapper.style.setProperty('--aspect-ratio', '56.25%'); // 16:9 aspect ratio
                wrapper.style.paddingBottom = 'var(--aspect-ratio)';
            }
        });
    }

    // Add intersection observer for lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target.querySelector('img');
                    if (img && img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        galleryItems.forEach(item => {
            imageObserver.observe(item);
        });
    }

    // Gallery Item Actions
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const action = button.getAttribute('aria-label');
            const galleryItem = button.closest('.gallery-item');
            const title = galleryItem.querySelector('h3').textContent;
            
            if (action === 'View Details') {
                // Create and show modal
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <button class="modal-close">&times;</button>
                        <div class="modal-body">
                            <img src="${galleryItem.querySelector('img').src}" alt="${title}" />
                            <div class="modal-info">
                                <h2>${title}</h2>
                                <p>${galleryItem.querySelector('p').textContent}</p>
                                <div class="modal-tags">
                                    <span class="tag">${galleryItem.querySelector('.gallery-tag').textContent}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(modal);
                document.body.style.overflow = 'hidden';
                
                // Close modal functionality
                const closeBtn = modal.querySelector('.modal-close');
                closeBtn.addEventListener('click', () => {
                    modal.remove();
                    document.body.style.overflow = '';
                });
                
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.remove();
                        document.body.style.overflow = '';
                    }
                });
            } else if (action === 'Share') {
                // Share functionality
                if (navigator.share) {
                    navigator.share({
                        title: title,
                        text: `Check out this amazing ${galleryItem.querySelector('.gallery-tag').textContent} by Cactus Cloud Media!`,
                        url: window.location.href
                    }).catch(console.error);
                } else {
                    // Fallback for browsers that don't support Web Share API
                    const shareUrl = window.location.href;
                    const tempInput = document.createElement('input');
                    tempInput.value = shareUrl;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                    
                    // Show copied message
                    const message = document.createElement('div');
                    message.className = 'share-message';
                    message.textContent = 'Link copied to clipboard!';
                    document.body.appendChild(message);
                    
                    setTimeout(() => {
                        message.remove();
                    }, 2000);
                }
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update copyright year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}); 