FROM node:16.13.2

WORKDIR /app

COPY package.json .
RUN yarn install


COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]