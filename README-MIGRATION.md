# Portfolio React/Vite migration

This project preserves the uploaded production portfolio HTML, CSS, images, JSON data,
and existing legacy behavior. The existing production JS bundle is retained as `legacy.js`
for portfolio features that were not supplied as editable source. The Spline canvas is
mounted separately by React using `@splinetool/react-spline`.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Spline scene
The React component currently uses the Spline scene URL already present in the uploaded
production JavaScript:
`https://prod.spline.design/zS15SJeb7s1kZXKJ/scene.splinecode`

Replace it in `src/main.tsx` if you want a different scene.

## GitHub Pages
The workflow deploys `dist` to GitHub Pages. In repository Settings > Pages, select
GitHub Actions as the source. This configuration assumes this repository is the
account root site (`username.github.io`), matching the uploaded repository name.

## Important
The original project README states its source code is private. This migration is a
compatibility-oriented Vite source scaffold around the available production files;
it does not recreate the unavailable original component source. Review the deployed
site and browser console before replacing your live repository.
