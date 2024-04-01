# Use the lightweight Node.js image as base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Expose port 3000 to allow outside access to your app
EXPOSE 3000

# Command to start the application
CMD ["npm", "start", "--", "--host", "0.0.0.0"]