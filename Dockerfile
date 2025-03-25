FROM node:20.12-bookworm-slim AS development

USER node

WORKDIR /app

VOLUME [ "/data" ]

EXPOSE 4200

COPY --chown=node:node ./package*.json ./

RUN npm ci

COPY --chown=node:node ./ ./

CMD ["npm", "run", "start", "--", "--host"]


FROM development AS build

RUN npm run build -- --configuration=production


FROM node:20.12-bookworm-slim AS production

WORKDIR /var/www

EXPOSE 4200

RUN npm install -g serve

COPY --from=build /app/dist/tours-app/browser .

USER node

CMD ["serve", "-s", "-p", "4200"]

# FROM nginx:1.25.4-alpine3.18

# COPY ./virtual_host.conf /etc/nginx/conf.d/default.conf

# COPY --from=build /app/dist/tours-app/browser /var/www









