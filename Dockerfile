FROM 984575983798.dkr.ecr.us-east-1.amazonaws.com/node16

WORKDIR /app

COPY package.json .
RUN yarn install


COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]