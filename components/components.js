document.addEventListener("DOMContentLoaded", () => {
    // Dynamically resolve relative paths whether we are on index.html or inside /tools/
    const inToolsDir = window.location.pathname.includes('/tools/');
    const toolsPrefix = inToolsDir ? '' : 'tools/';
    const rootPrefix = inToolsDir ? '../' : '';

    const headerHTML = `
        <div class="nav-container">
            <a href="${rootPrefix}index.html" class="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary)"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <div style="display: flex; align-items: center;">PDF<span>Solⁿ</span></div>
            </a>
            <ul class="nav-links">
                <li><a href="${rootPrefix}index.html">All Tools</a></li>
                <li><a href="${toolsPrefix}merge-pdf.html">Merge PDF</a></li>
                <li><a href="${toolsPrefix}compress-pdf.html">Compress PDF</a></li>
            </ul>
        </div>
    `;

    const footerHTML = `
    <footer>
        <div class="footer-container">
            <div class="footer-col">
                <h4 style="display: flex; align-items: center; gap: 8px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary)"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    PDFSolⁿ
                </h4>
                <p style="color: #94a3b8; font-size: 14px; line-height: 1.6; margin-top: -10px;">
                    A professional suite of 100% private, client-side PDF utilities. Designed for speed, security, and simplicity.
                </p>
            </div>
            <div class="footer-col">
                <h4>Popular Tools</h4>
                <ul>
                    <li><a href="${toolsPrefix}merge-pdf.html">Merge PDF</a></li>
                    <li><a href="${toolsPrefix}compress-pdf.html">Compress PDF</a></li>
                    <li><a href="${toolsPrefix}pdf-to-word.html">PDF to Word</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact & Support</h4>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">API Documentation</a></li>
                    <li><span style="color:#94a3b8; font-size:14px;">Email:</span> <a href="mailto:support@pdfsoln.com">support@pdfsoln.com</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 PDF Solⁿ. All Rights Reserved. (Client-Side Encryption Active)
        </div>
    </footer>
    `;

    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
