# Use a multi-stage build for a smaller final image
FROM node:latest AS builder

WORKDIR /app

# Copy package.json and package-lock.json (if using)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React application in production mode (optimized for smaller size)
RUN npm run build 

# Stage 2: Create a slim runtime image with Nginx
FROM nginx:alpine 

WORKDIR /usr/share/nginx/html

# Copy the production build artifacts from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 (adjust if needed)
ENV HOST 0.0.0.0
EXPOSE 3000

# Use a custom Nginx configuration for serving React applications (replace with your actual configuration)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]