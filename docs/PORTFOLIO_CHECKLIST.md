# Portfolio Launch Checklist (GitHub Pages)

## Conversion (Client Lead Quality)
- [ ] Hero headline states one clear business outcome in one sentence.
- [ ] Primary CTA is visible above the fold on desktop and mobile.
- [ ] Contact options include direct email and one fast booking path.
- [ ] Case studies show `Context -> Action -> Outcome` with numbers.
- [ ] Remove generic claims that are not supported by proof.

## Lighthouse Targets
- [ ] Performance >= 90
- [ ] Accessibility >= 95
- [ ] Best Practices >= 95
- [ ] SEO >= 95

## Performance Tasks
- [ ] Keep total JS bundle lean; remove unused dependencies.
- [ ] Avoid heavy third-party scripts at initial load.
- [ ] Keep scheduling lightweight with direct Google Calendar and email links.
- [ ] Preconnect only to domains that are actually used.
- [ ] Ensure image assets are optimized and sized correctly.

## Accessibility Tasks
- [ ] Every section has a logical heading order.
- [ ] Interactive elements are keyboard reachable.
- [ ] Visible focus styles are present.
- [ ] Color contrast is at least WCAG AA.
- [ ] Reduced motion preference is respected.
- [ ] Links have descriptive labels.

## SEO and Metadata
- [ ] Title tag includes role + name + value proposition.
- [ ] Meta description communicates backend specialization clearly.
- [ ] Open Graph tags are present for social sharing.
- [ ] Canonical URL matches production URL.

## GitHub Pages Deployment
- [ ] `vite.config.js` base matches repo path (`/Portfolio/`).
- [ ] Run `npm run build` with no errors.
- [ ] Deploy `dist` output to GitHub Pages branch/workflow.
- [ ] Verify page loads directly at `https://lathiyaom.github.io/Portfolio/`.
- [ ] Verify refresh/deep-link behavior works with SPA routing strategy.

## Post-Launch Validation
- [ ] Test on Chrome, Edge, and mobile browsers.
- [ ] Test with throttled network to confirm first meaningful paint.
- [ ] Submit URL in Google Search Console (optional but recommended).
- [ ] Record baseline Lighthouse report and track monthly.
