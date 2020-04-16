# Use an existing docker image as a base
FROM alpine

# Download and install a dependencies
RUN apk add --update redis
RUN apk add --update gcc

# Tell image what to do, when it starts a cointainer
CMD ["redis-server"]
