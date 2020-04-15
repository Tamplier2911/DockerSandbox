# Use an existing docker image as a base || find image with node
FROM node:alpine

# Create a working directory, where all files will be copied
WORKDIR /usr/app

# Copy required file from fs to temp container fs - optimize cache
COPY ./package.json ./

# Download and install a dependencies
RUN npm install

# Copy rest of the files from fs to temp container
COPY ./ ./

# Tell image what to do, when it starts a cointainer
CMD ["npm", "start"]