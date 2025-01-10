FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY ./prisma ./

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3300

CMD ["npm", "run", "dev"]