# base image
FROM node:alpine

# create project dir
RUN mkdir /app

# select working directory
WORKDIR /app

# copy package.json
COPY package.json ./

# install dependencies
RUN npm install

# copy rest of the files
COPY ./ ./

# startup command
CMD [ "npm", "run", "start" ]
