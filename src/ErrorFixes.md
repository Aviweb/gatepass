1. (Crypto module does not work in edge ) .Crypto module error in the middleware you're trying to use the crypto module in an environment that doesn't support it, such as the Edge runtime (e.g., Vercel Edge Functions or Cloudflare Workers). The Edge runtime is lightweight and doesn't include certain Node.js core modules, including crypto.

To fix this issue, you can switch to a compatible JWT library
