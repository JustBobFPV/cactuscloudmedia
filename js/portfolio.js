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

            const filter = button.getAttribute('data-filter');
            animateItems(filter);
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
}); 