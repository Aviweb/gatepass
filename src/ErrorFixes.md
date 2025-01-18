1. (Crypto module does not work in edge ) .Crypto module error in the middleware you're trying to use the crypto module in an environment that doesn't support it, such as the Edge runtime (e.g., Vercel Edge Functions or Cloudflare Workers). The Edge runtime is lightweight and doesn't include certain Node.js core modules, including crypto.

To fix this issue, you can switch to a compatible JWT library

2. In the backend routes, ensure that all the keys are present before making a create/update request

3. Try to create a new prisma client instance in each api routes

4. in order to make queries for unique values in the prisma instance, the column should be set as unique in the schema structure
