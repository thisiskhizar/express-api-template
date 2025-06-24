
# Express API Template

This is a reusable template for building Node.js Express API applications. It includes common middlewares, error handling, and a modular folder structure to help you quickly set up your API projects.


## Features

- Express.js: Fast and lightweight web framework.
- Environment Variables: Managed using dotenv.
- Middlewares:
	- helmet for security.
	- cors for cross-origin resource sharing.
	- cookie-parser for parsing cookies.
	- express-rate-limit for rate limiting.
	- Custom error handling and 404 middleware.
- Validation: Request validation using Joi.
- Logging: morgan for HTTP request logging.
- Modular Structure: Organized folder structure for scalability.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thisiskhizar/express-api-template.git
   cd express-api-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:

   ```env
   PORT=5000
   NODE_ENV=development
   ```

4. Start the server:

   - Development mode:

     ```bash
     npm run dev
     ```

   - Production mode:

     ```bash
     npm start
     ```
    
