# base image
FROM node:alpine as builder

# create project dir
RUN mkdir /app

# select working directory
WORKDIR /app

# copy package.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy rest of the files
COPY ./ ./

# run build
RUN npm run build

# prod phase
FROM nginx

# which port we expose
EXPOSE 3000

# copy and refplace configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/

# copy build to nginx
COPY --from=builder /app/build /usr/share/nginx/html

# startup command
# nginx has onw
