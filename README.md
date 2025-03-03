# BLK Marketplace 

A centralized, community-driven marketplace dedicated to Black-owned businesses, providing a moral alternative to major brands while fostering economic empowerment and authentic representation.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Quick Start

1. Clone the repository

```bash
git clone https://github.com/yourusername/blk-marketplace.git
cd blk-marketplace
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```


The development server will start on `http://localhost:5173` by default. If port 5173 is already in use, Vite will automatically try the next available port (e.g., 5174, 5175, etc.).

### Custom Port
To specify a custom port:
```bash
npm run dev -- --port 3000
```

This provides clearer information about:
1. The default port
2. Vite's automatic port selection
3. How to manually specify a port
4. What happens if the default port is taken

## Available Scripts

References package.json:
```typescript:blk-marketplace/package.json
```

## Project Structure

```
blk-marketplace/
├── src/
│   ├── components/
│   │   ├── Layout/       # Layout components (Navbar, Footer, etc.)
│   │   └── Product/      # Product-related components
│   ├── pages/            # Page components (Home, About, etc.)
│   ├── styles/           # Theme configuration
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
└── package.json         # Project configuration and dependencies
```

## Dependencies

This project uses:
```typescript:blk-marketplace/package.json
```

## Development Dependencies

Required for development:
```typescript:blk-marketplace/package.json
```

## Theme Configuration

The project uses Chakra UI with a custom theme. See:
```typescript:blk-marketplace/src/styles/theme.ts
```

## Troubleshooting

1. **Module not found errors**
   ```bash
   rm -rf node_modules
   npm install
   ```

2. **Port already in use**
   ```bash
   # Kill the process using port 5173
   npx kill-port 5173
   # Or start on a different port
   npm run dev -- --port 3000
   ```

3. **TypeScript errors**
   - Ensure you're using TypeScript 5.2 or higher
   - Run `npm install` to update type definitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes with a meaningful commit message (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Note: Be sure to create a new branch for each feature or bug fix so that we can review changes as a team before we merge them into the main branch.

This provides clearer information about:
1. The default port
2. Vite's automatic port selection
3. How to manually specify a port
4. What happens if the default port is taken

