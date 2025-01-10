FROM node:latest

WORKDIR /app

COPY . .

RUN npm install
RUN npx prisma generate

EXPOSE 3300

CMD ["npm", "run dev"]