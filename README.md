# Segucargo WordPress Theme

A modern WordPress theme for container shipping logistics built with React and Vite.

## Installation

1. Clone this repository into your WordPress themes directory:
```bash
cd wp-content/themes
git clone https://github.com/yourusername/segucargo-theme.git
```

2. Install dependencies and build the theme:
```bash
cd segucargo-theme
npm install
npm run build
```

3. Activate the theme in WordPress admin panel.

## Development

1. Start the development server:
```bash
npm run dev
```

2. Build for production:
```bash
npm run build
```

## WordPress Integration

This theme integrates React with WordPress using the following approach:

- React components are built into static assets
- WordPress serves the initial HTML and loads React
- The theme uses WordPress REST API for dynamic content
- All React routes are handled client-side

## File Structure

```
├── dist/               # Built files (generated)
├── src/                # React source files
├── functions.php       # WordPress theme functions
├── index.php          # Main template file
├── style.css          # Theme stylesheet
└── vite.config.ts     # Vite configuration
```

## Requirements

- WordPress 5.0+
- PHP 7.4+
- Node.js 16+
- npm 7+

## License

GPL-2.0+