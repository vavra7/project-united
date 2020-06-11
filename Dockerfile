ARG NODE_VERSION


FROM node:${NODE_VERSION}

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn

CMD ["yarn", "dev"]