FROM node:alpine

WORKDIR /todolist

# ENV PATH /todolist/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]
