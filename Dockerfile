# Match with my local Node Version
FROM node:20-alpine

# RUN mkdir -p /app
WORKDIR /app

# My . Dir -> /app Directory
ADD . /app/

# Dependency Install
RUN npm install

# Build
RUN npm run build

# PORT (8080) Expose
EXPOSE 3000

# START
ENTRYPOINT npm run start:prod