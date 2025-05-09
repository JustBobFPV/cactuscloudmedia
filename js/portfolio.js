/**
 * Portfolio Gallery Filtering
 * Handles the filtering of portfolio items based on category
 */

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    // Add a small delay for smooth animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    // Hide the item after animation
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add hover effect to gallery items
    galleryItems.forEach(item => {
        const overlay = item.querySelector('.gallery-overlay');
        
        item.addEventListener('mouseenter', function() {
            overlay.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            overlay.style.opacity = '0';
        });
    });

    // Initialize video grid layout
    const videoGrid = document.querySelector('.video-grid');
    if (videoGrid) {
        const videoItems = videoGrid.querySelectorAll('.video-item');
        
        // Set aspect ratio for video wrappers
        videoItems.forEach(item => {
            const wrapper = item.querySelector('.video-wrapper');
            if (wrapper) {
                wrapper.style.paddingBottom = '56.25%'; // 16:9 aspect ratio
            }
        });
    }
}); 