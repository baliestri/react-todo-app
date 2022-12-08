FROM node:lts-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile --production
COPY . ./

CMD ["src/index.js"]
