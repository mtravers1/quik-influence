FROM 984575983798.dkr.ecr.us-east-1.amazonaws.com/node16-13-1-alpine:latest

WORKDIR /app

COPY package.json .
RUN yarn install


COPY . .
RUN yarn build

#Define Argument variables
# ARG env
# ENV envValue=$env


# #Build
# RUN if [ "$env" = "prod" ] ; then yarn build ; fi
# RUN if [ "$env" = "dev" ] ; then yarn buildDev ; fi
# RUN if [ "$env" = "staging" ] ; then yarn buildStaging ; fi

EXPOSE 3000

CMD ["yarn", "start"]