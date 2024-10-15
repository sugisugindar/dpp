# Use an official Node.js runtime as the base image
FROM node:18 AS build
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install frontend dependencies
RUN npm install
# Copy the rest of the frontend files
COPY . .
# Build the React application
RUN npm run build
# Debug: List contents of /app after the build
RUN echo "Contents of /app after build:" && ls -la /app && echo "Contents of /app/dist:" && ls -la /app/dist
# Use Nginx to serve the frontend
FROM nginx:alpine
# Copy the built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80 for the frontend
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
