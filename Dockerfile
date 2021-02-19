FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls

EXPOSE 3000

CMD ["node", "src/app.js"]
