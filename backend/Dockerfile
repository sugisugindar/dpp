# Use an official Node.js runtime as the base image
FROM node:18
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install backend dependencies
RUN npm install
# Copy the rest of the backend files
COPY . .
# Set environment variables (optional, use .env in production)
ENV PORT=5001
# Expose the port the backend runs on
EXPOSE 5001
# Start the backend server
CMD ["npm", "run", "server"]
