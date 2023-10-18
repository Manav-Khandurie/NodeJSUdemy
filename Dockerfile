#This Docker Image is on dockerhub manavkhandurie:testlabupes
FROM node:16
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD ["node", "app.js"]