FROM node:24-alpine

COPY index.js index.js
COPY package.json package.json


RUN npm install 

CMD ["node", "index.js"]


