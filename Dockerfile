# Use a lightweight official Node.js or Python image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app source code
COPY . .

# Expose the port your app runs on
EXPOSE 80

# Command to run your application
CMD ["npm", "start"]
