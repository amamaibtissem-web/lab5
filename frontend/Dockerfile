FROM node:18 as build
WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .

RUN chmod -R 755 /app/node_modules/.bin

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
