FROM node:18-alpine
WORKDIR /app

EXPOSE 8080

CMD [ "node","index.js" ]
