FROM node:6
MAINTAINER Shawn Hartsell

COPY . /app
WORKDIR /app

EXPOSE 9000
CMD ["npm", "start"]
