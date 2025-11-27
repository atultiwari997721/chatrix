# Environment Variables Configuration

## For Local Development

### 1. Create `.env.local` in client folder

**File**: `k:\chatrix\client\.env.local`

```env
REACT_APP_ENDPOINT=http://localhost:3005
```

## For Production (Vercel)

### 1. Create `.env.production` in client folder

**File**: `k:\chatrix\client\.env.production`

```env
REACT_APP_ENDPOINT=https://your-backend-url.onrender.com
```

### 2. In Vercel Dashboard Environment Variables

Set:

- **Name**: `REACT_APP_ENDPOINT`
- **Value**: `https://your-backend-url.onrender.com`
- **Environments**: Select "Production"

## How to Use Environment Variables in React

```javascript
// In your React components:
const apiEndpoint = process.env.REACT_APP_ENDPOINT;

// Example - connecting to backend
const socket = io(process.env.REACT_APP_ENDPOINT, {
  reconnectionDelay: 1000,
  reconnection: true,
  reconnectionAttempts: 10,
  transports: ["websocket"],
  agent: false,
  upgrade: false,
  rejectUnauthorized: false,
});
```

## Notes

- Environment variables in React must start with `REACT_APP_`
- Variables are embedded at build time, not runtime
- Never commit `.env` files to Git (add to `.gitignore`)
- For sensitive data, only set in Vercel dashboard, not in code

## Example Full Backend URL

```
https://chatrix-backend.onrender.com
https://your-app-name.railway.app
https://your-app-name.herokuapp.com
```
