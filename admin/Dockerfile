# Use an official Node.js runtime as the base image
FROM node:18 AS build
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install admin panel dependencies
RUN npm install
# Copy the rest of the admin files
COPY . .
# Build the admin React application
RUN npm run build
# Use Nginx to serve the admin panel
FROM nginx:alpine
# Change this line to reflect the correct output directory from Vite
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80 for the admin panel
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
