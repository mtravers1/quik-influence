#FROM 984575983798.dkr.ecr.us-east-1.amazonaws.com/node:16
FROM node

WORKDIR /app

COPY package.json .
RUN yarn install


COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]