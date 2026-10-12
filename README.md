# Growth Marketing Portfolio — GitHub Pages

A static, multi-page website created from the supplied HTML portfolio draft. Each page has its own HTML file, while navigation, footer, and styling are shared.

## Files and structure

- `index.html` — homepage
- `about.html` — about and career timeline
- `seo.html`, `ads.html`, `email.html`, `analytics.html`, `leads.html`, `content.html` — separate service pages
- `contact.html` — email-based contact form
- `privacy.html`, `terms.html` — policy templates to review
- `sitemap.html` — internal-link directory
- `assets/css/style.css` — shared styling
- `assets/js/site.js` — shared header/footer/navigation
- `assets/js/contact.js` — contact form behavior

## Edit the project

- Edit a page's text in that page's `.html` file.
- Change colors, spacing, typography, and responsive styling in `assets/css/style.css`.
- Change shared navigation and footer in `assets/js/site.js`.
- Change the contact destination in `assets/js/contact.js`.
- Keep all files and folders in their current relative structure so links and assets continue working.

## Before publishing

1. Confirm the name and branding are correct. The source draft used “Apurv Sharma”.
2. Verify every metric, client reference, qualification, and experience claim.
3. Replace the contact email in `assets/js/contact.js` if needed.
4. Review `privacy.html` and `terms.html`; they are starter templates, not legal advice.
5. Test the contact flow and every internal link.

## Publish on GitHub Pages

1. Sign in to GitHub and create a new repository. For a personal site, the repository can be named `YOUR-USERNAME.github.io`; otherwise use a normal repository name such as `growth-marketing-portfolio`.
2. Choose **Public** if you want to use GitHub Pages on the free plan, and create the repository.
3. On the repository page, choose **Add file → Upload files**.
4. Unzip this project on your computer. Upload the *contents* of the `growth-marketing-portfolio` folder (including `index.html`, `assets/`, and all other `.html` files), not the ZIP file itself.
5. Scroll down, enter a commit message such as `Add portfolio website`, and click **Commit changes**.
6. Open **Settings → Pages** in the repository.
7. Under **Build and deployment**, choose **Deploy from a branch**. Select branch `main` and folder `/(root)`, then save.
8. Wait for the Pages deployment to finish. The Pages section will show the published URL.
   - Personal repository `YOUR-USERNAME.github.io`: `https://YOUR-USERNAME.github.io/`
   - Normal repository: `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`
9. Open the published URL and test all pages, navigation links, and mobile layout. If you change files later, commit the changes and GitHub Pages will redeploy automatically.

## Important notes

- This is a static HTML/CSS/JavaScript website; it does not require a build command or a server.
- The contact form opens the visitor's email app. It does not store messages or send them automatically.
- If a page returns 404, check that the exact filename and case match the link.
- For custom domains, configure the domain under **Settings → Pages** and follow GitHub's DNS instructions.
