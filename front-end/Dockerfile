FROM node:16
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
COPY . /app/
EXPOSE 4200
CMD ["npm", "run", "start"]