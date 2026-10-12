# Jasmen Gloria Portfolio

Portfolio for Jasmen O. Gloria, based on the supplied résumé, two certificates, profile photo, and project photos. Projects use a static grid with two columns on desktop and one on phones. Cards enlarge slightly on mouse hover or touch press, then return to their normal size on release, cancellation, or pointer exit. The background grid, scroll reveals, card glow, image lightbox, mobile navigation, and theme ripple are retained.

## Run locally

From this `jasmineportfolio` folder:

```powershell
npm install
npm run dev
```

From the parent `Portfolio design` folder, `npm run dev` also launches this app. If dependencies need reinstalling, run `npm run setup` from the parent folder. Keep the terminal running while viewing the portfolio; stopping it makes localhost links unavailable.

To view the portfolio from another device on the same Wi-Fi, run `npm run phone` from either folder and open the printed Network URL. The command builds the latest source automatically, then serves `dist/` on port 4175. Keep the computer and terminal running. Restart the command after source changes to rebuild the site.

## Build

```powershell
npm run build
npm run preview
```

The production website is generated in `dist/`. A static host must rewrite page requests (`/projects`, `/experience`, `/stack`, `/certifications`, `/resume`) to `index.html`.

Content and links are in `src/data/portfolioData.js`. Photos and the résumé PDF are in `public/assets/`.

The GitHub button links to `https://github.com/taurusgurl36-byte`. The Facebook button uses `https://www.facebook.com/share/19ZL9YprXJ/` and displays the Facebook logo. The Résumé button opens an in-site viewer that renders the supplied PDF without forcing a download. Certificates and project photos open in a centered image-only viewer, with a close button, backdrop click, and Escape key support. The Medicare project uses the supplied landscape PNG. Certificate photos display upright using their orientation metadata; the original image files are preserved.

## Source map

| Location                     | Purpose                                                                |
| ---------------------------- | ---------------------------------------------------------------------- |
| `src/main.jsx`               | React entry point and global stylesheet import                         |
| `src/App.jsx`                | Routes, page layouts, theme provider, and motion settings              |
| `src/pages/`                 | Complete pages for each route                                          |
| `src/components/`            | Reusable UI such as navigation, cards, and the image viewer            |
| `src/data/portfolioData.js`  | Personal details, projects, education, skills, links, and certificates |
| `src/animations/variants.js` | Shared scroll reveal animation                                         |
| `src/hooks/useCardGlow.js`   | Cursor glow behavior and animation cleanup                             |
| `src/utils/`                 | Theme storage and image orientation calculations                       |
| `src/styles/components.css`  | Editable styles for photos, certificates, and the lightbox             |
| `src/styles/theme.css`       | Light/dark colors, scrollbar helpers, and theme transition             |
| `src/styles/utilities.css`   | Original precompiled Tailwind utility CSS                              |
| `public/assets/`             | Photos, certificate, and résumé PDF                                    |
| `tests/`                     | Node tests for theme storage, image orientation, and content assets    |

## Editing the portfolio

The profile header in `Hero.jsx` places Jasmen's photo on the right, with location and email below the name, followed by the résumé bio and labeled GitHub, Facebook, and Résumé buttons. Buttons lift on hover and compress when pressed, respecting reduced-motion preferences. Facebook uses the supplied image at `public/assets/facebook-logo.png`. `SkillIcon.jsx` maps each Basic Skill to an app mark or descriptive icon, shared by the homepage and Basic Skills page. Responsive styles are in `components.css`; narrow phones stack the contact details and wrap the buttons.

Change text and links in `src/data/portfolioData.js`. Each project has an explicit `year`; the experience timeline uses it to show the newest project first. Mark a project `featured: true` to include it in the homepage grid. `ProjectsGrid.jsx` provides the same card layout on the homepage and Projects page. The shared image viewer displays each complete image without a frame, caption, or zoom toolbar. Its backdrop and close button follow the selected theme on every screen size.

Change colors in `src/styles/theme.css` and custom component styles in `src/styles/components.css`. `src/index.css` imports the stylesheets in their intended order. The utility stylesheet is precompiled; there is no Tailwind compiler configured here. For a new style, add a descriptive class in the custom stylesheet rather than assuming a new Tailwind class will exist.

The small theme script in `index.html` applies the initial color before React starts. Keep its theme values and storage key aligned with `src/utils/theme.js`.

## Formatting and checks

```powershell
npm run format
npm run format:check
npm test
npm run build
```

The main app lives in `jasmineportfolio/` with its own `.prettierrc.json`, `.prettierignore`, and `.editorconfig`. Parent-folder commands are convenient shortcuts. Formatting skips dependencies, build output, the lockfile, and the generated utility stylesheet. The tests use Node's built-in runner and need no additional test framework.
