# Base Image
FROM node:alpine

# Create working directory
WORKDIR /app

# Copy required files
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy rest of the files
COPY ./ ./

# Define tartup command
CMD ["npm", "start"]