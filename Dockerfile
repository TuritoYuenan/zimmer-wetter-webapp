# Use Node.js image (lightweight via Alpine)
FROM node:alpine

# Work in /app directory
WORKDIR /app

# Import package.json first
COPY package.json .

# Install packages first (also helps caching)
RUN npm i

# Copy web app source code
COPY . .

# Access web app at port 5173
EXPOSE 5173

# Run vite --host to publicise the web app
CMD ["npx", "vite", "--host"]
