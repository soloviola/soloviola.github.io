/**
 * Header Component
 * Reusable navigation header for all pages
 */
(function() {
    'use strict';

    // Get the current page path to determine base path for links
    function getBasePath() {
        const path = window.location.pathname;
        // Check if we're in a subdirectory (like posts/)
        if (path.includes('/posts/')) {
            return '../';
        }
        // If on index.html or blog.html at root, use empty string or './'
        return './';
    }

    // Get current page name to highlight active nav link
    function getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('/posts/') || path.includes('blog.html')) {
            return 'writing';
        }
        return 'about';
    }

    // Create the header HTML
    function createHeader() {
        const basePath = getBasePath();
        const currentPage = getCurrentPage();
        
        // Determine if title should be a link
        const isPostPage = window.location.pathname.includes('/posts/');
        const titleHtml = isPostPage 
            ? `<a href="${basePath}index.html" class="site-title-link">Gim Miao</a>`
            : 'Gim Miao';

        // Construct proper paths - handle basePath correctly
        const indexPath = basePath === './' ? 'index.html' : basePath + 'index.html';
        const blogPath = basePath === './' ? 'blog.html' : basePath + 'blog.html';

        return `
            <div class="site-title">${titleHtml}</div>
            <nav class="nav-links">
                <a href="${indexPath}" class="nav-link ${currentPage === 'about' ? 'active' : ''}">About</a>
                <a href="${blogPath}" class="nav-link ${currentPage === 'writing' ? 'active' : ''}">Writing</a>
                <a href="https://drive.google.com/file/d/1adWShkWawi7V_PZ7ZAKZAcuk0Idustlz/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="nav-link">Resume</a>
            </nav>
        `;
    }

    // Initialize header on page load
    function initHeader() {
        // Find the container where header should be injected
        const container = document.querySelector('.site-nav-container');
        
        if (container) {
            // Create the site-nav wrapper
            const siteNav = document.createElement('div');
            siteNav.className = 'site-nav';
            siteNav.innerHTML = createHeader();
            
            // Replace the container with the new nav
            container.parentNode.replaceChild(siteNav, container);
        } else {
            // Fallback: try to find existing site-nav and update it
            const existingNav = document.querySelector('.site-nav');
            if (existingNav) {
                existingNav.innerHTML = createHeader();
            }
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeader);
    } else {
        initHeader();
    }
})();

