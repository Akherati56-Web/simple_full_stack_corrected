FROM node:18

WORKDIR /vite_project

COPY ./package.json /vite_project

RUN node --version

RUN npm install

COPY . /vite_project

CMD ["npm", "run", "dev"]