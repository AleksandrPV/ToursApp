# FROM node:20.12-bookworm-slim AS development
FROM node:22.14-bookworm-slim 
#AS development

USER node

WORKDIR /

EXPOSE 4200

COPY --chown=node:node ./package*.json ./

RUN npm ci

COPY --chown=node ./ ./

CMD ["npm", "run", "ServerWithNg"]
# CMD ["npm", "start"]

FROM development AS build

RUN npm run build

FROM nginx:1.25.4-alpine3.18

COPY ./virtual_host.conf /etc/nginx/conf.d/default.conf

COPY --from=build /dist/tours-app /var/www