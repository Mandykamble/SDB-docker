FROM node

WORKDIR /index

COPY package*.json ./

RUN npm install
RUN npm install nodemon
RUN npm install express
COPY . .

EXPOSE 80

CMD ["npm", "start"]