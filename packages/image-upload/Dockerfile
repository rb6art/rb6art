FROM node:alpine

WORKDIR /app
RUN mkdir /app/temp-images
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]
