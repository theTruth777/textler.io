FROM node:12.2.0-alpine

WORKDIR /usr/app

RUN apk update
RUN apk upgrade
RUN apk --no-cache add bash
RUN apk --no-cache add curl

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s

COPY . .
RUN yarn install

EXPOSE 3000