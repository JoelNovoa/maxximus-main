# Base image with Node.js
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if using)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your React app
COPY . .

# Build the React app for production
RUN npm run build 

# Smaller image for serving
FROM nginx:alpine

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port (adjust if needed)
EXPOSE 3000

# Serve the built app with nginx
CMD ["nginx", "-g", "daemon off;"]