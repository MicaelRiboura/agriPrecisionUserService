FROM node:22

WORKDIR /app

COPY ./package.json .
COPY ./.env .

RUN npm install

COPY ./src ./src

EXPOSE 3333

ENTRYPOINT ["node", "src/server.js"]