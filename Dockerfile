# Use a lightweight Node.js image as the base
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Build the React app for production
RUN npm run build

# Create a new image based on nginx (web server)
FROM nginx

# Copy the built React app from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Start the nginx server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
