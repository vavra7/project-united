FROM node:14.3
WORKDIR /app
# COPY package*.json ./
COPY package.json ./
COPY yarn.lock ./
# RUN npm install
RUN yarn
COPY src .
COPY tsconfig.json .
COPY next-env.d.ts .
# RUN npm run build
RUN yarn build
CMD ["yarn", "dev"]