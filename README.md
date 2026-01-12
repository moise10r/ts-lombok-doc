# lombokx-ts Documentation Website

This is the official documentation website for [lombokx-ts](https://www.npmjs.com/package/lombokx-ts), built with Next.js.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
src/
├── app/
│   ├── page.tsx        # Homepage
│   ├── setup/          # Setup/installation guide
│   ├── features/       # Features showcase
│   └── docs/           # API documentation
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── CodeBlock.tsx   # Code snippet component
│   └── FeatureCard.tsx # Feature card component
└── ...
```

## Pages

- **/** - Landing page with hero, features overview, and quick examples
- **/setup** - Installation and configuration guide
- **/features** - Detailed showcase of all decorators
- **/docs** - Complete API reference and documentation

## Deployment

This site can be deployed to any static hosting platform:

### Vercel (Recommended)

```bash
npm i -g vercel
vercel deploy
```

### Netlify

Connect your GitHub repository to Netlify for automatic deployments.

### GitHub Pages

```bash
npm run build
# Deploy the .next folder or use next export for static export
```

## License

MIT

