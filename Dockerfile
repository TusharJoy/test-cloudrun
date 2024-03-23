FROM node:latest
WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 3080

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "server.js" ]