FROM node:16.6.0-alpine3.11 as prod
ENV NODE_VERSION 16.6.0

ENV PORT 3000

WORKDIR /app

COPY package*.json ./

# RUN npm install && mv node_modules ../
# RUN npm install --only=production npm@7.20.3 && npm cache clean --force
RUN npm install npm@7.20.3 && npm cache clean --force
RUN mkdir -p /app/node_modules && chown -R node:node /app

RUN apk add --no-cache tini

USER node
COPY --chown=node:node . ./
# COPY --chown -R 766 /app/

ENTRYPOINT [ "/sbin/tini", "--" ]
CMD [ "node", "/app/server.js" ]



# FROM prod as dev
# ENV NODE_ENV=development

# EXPOSE $PORT

# CMD ["nodemon", "/app/server.js", "--inspect=0.0.0.0:9229"]
# CMD [ "nodemon", "-L", "/app/server.js", "--development" ]



# FROM dev as test
# ENV NODE_ENV=development

# CMD [ "npm", "test" ]