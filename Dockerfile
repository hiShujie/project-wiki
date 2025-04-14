FROM node:16.15-alpine3.16

RUN mkdir /tsinghua-tfl
WORKDIR /tsinghua-tfl

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

RUN npm run build
RUN npm run generate

CMD ["npm", "run", "start"]
