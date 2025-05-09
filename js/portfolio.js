/**
 * Portfolio Gallery Filtering
 * Handles the filtering of portfolio items based on category
 */

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Add fade-in animation
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50);
                } else {
                    item.style.display = 'none';
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