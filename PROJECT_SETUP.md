# EcoTrack Project Setup

## Project Type
This is a **Static HTML Project** with no Node.js dependencies.

## Development Server Configuration

### ✅ Correct Setup Commands:
- **Setup Command**: `echo "EcoTrack static HTML project - no setup needed"`
- **Dev Command**: `python3 -m http.server 8000`
- **Proxy Port**: `8000`

### ❌ DO NOT USE:
- `npm install` or `ni` (no package.json needed)
- `npm start` or `npm run dev`
- Node.js based servers

## Quick Start

1. **No installation needed** - this is pure HTML/CSS/JS
2. **Start server**: `python3 -m http.server 8000`
3. **Access app**: `http://localhost:8000`

## File Structure

```
├── index.html              # Main dashboard (login required)
├── login.html              # Login page
├── register.html           # Registration page  
├── detailed.html           # Detailed charts page
├── static/
│   ├── css/                # AdminLTE CSS
│   ├── js/                 # AdminLTE JS + EcoTrack data model
│   └── assets/             # Images and assets
└── templates/              # Django templates (unused in static mode)
```

## Features

- **Login System**: demo@example.com / demo
- **Carbon Tracking**: 2.3/3.0 tonnes annual goal
- **Interactive Charts**: Chart.js powered visualizations
- **Shared Data Model**: Consistent data across all pages
- **Responsive Design**: Mobile-friendly AdminLTE theme

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **UI Framework**: AdminLTE 4.0 + Bootstrap 5
- **Charts**: Chart.js 4.4.0
- **Icons**: Bootstrap Icons
- **Fonts**: Source Sans Pro

## Development Notes

- No build process required
- No package manager needed
- All dependencies loaded via CDN
- Data persisted in localStorage
- Static file serving only

## Troubleshooting

If dev server fails with npm errors:
1. Check setup command is NOT `ni` or `npm install`
2. Use `python3 -m http.server 8000` for dev command
3. Ensure proxy port is set to `8000`
4. This project has NO package.json by design
