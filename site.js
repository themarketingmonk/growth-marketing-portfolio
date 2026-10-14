// Shared navigation and footer. Edit links here to update every page.
const NAV_ITEMS = [
  ["Home","index.html"],["About","about.html"],["SEO / AEO / GEO","seo.html"],
  ["Paid Ads","ads.html"],["Email & CRM","email.html"],["Analytics","analytics.html"],
  ["Lead Generation","leads.html"],["Content Strategy","content.html"],["Contact","contact.html"]
];
const SERVICE_LINKS = [
  ["SEO, AEO & GEO","seo.html"],["Performance Advertising","ads.html"],
  ["Email & CRM Automation","email.html"],["Analytics & Dashboards","analytics.html"],
  ["B2B Lead Generation","leads.html"],["Content & Growth Strategy","content.html"]
];
function sharedLayout(){
  const current = location.pathname.split("/").pop() || "index.html";
  const nav = NAV_ITEMS.map(([label,url])=>`<a href="${url}" class="${current===url?'active':''}">${label}</a>`).join("");
  document.getElementById("siteHeader").innerHTML = `
    <a class="brand" href="index.html"><span class="brand-mark">▲</span><span>Apurv Sharma</span></a>
    <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation" aria-expanded="false">☰ Menu</button>
    <nav class="nav" id="mainNav" aria-label="Main navigation">${nav}</nav>`;
  document.getElementById("siteFooter").innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div><a class="brand" href="index.html"><span class="brand-mark">▲</span><span>Apurv Sharma</span></a>
          <p>Data-driven growth marketing, performance advertising, SEO, and CRM automation engineered for revenue scale.</p></div>
        <div><h3>Explore</h3><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li></ul></div>
        <div><h3>Services</h3><ul>${SERVICE_LINKS.map(([l,u])=>`<li><a href="${u}">${l}</a></li>`).join("")}</ul></div>
        <div><h3>Policies</h3><ul><li><a href="privacy.html">Privacy Policy</a></li><li><a href="terms.html">Terms & Conditions</a></li><li><a href="sitemap.html">HTML Sitemap</a></li></ul></div>
      </div>
      <div class="footer-bottom"><span>© <span id="year"></span> Apurv Sharma. All rights reserved.</span><span>Update contact details in <code>assets/js/site.js</code>.</span></div>
    </div>`;
  document.getElementById("year").textContent = new Date().getFullYear();
  const toggle=document.getElementById("menuToggle"), menu=document.getElementById("mainNav");
  toggle.addEventListener("click",()=>{const open=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
}
document.addEventListener("DOMContentLoaded",sharedLayout);
