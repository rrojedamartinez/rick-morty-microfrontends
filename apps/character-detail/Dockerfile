FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

COPY apps/characters/package.json \
    apps/characters/package.json

COPY apps/character-detail/package.json \
    apps/character-detail/package.json

COPY apps/shell/package.json \
    apps/shell/package.json

RUN npm ci

COPY apps/character-detail apps/character-detail

RUN npm run build -w @rick-morty/character-detail

FROM nginx:1.27-alpine

COPY docker/nginx.conf \
    /etc/nginx/conf.d/default.conf

COPY --from=build \
    /app/apps/character-detail/dist \
    /usr/share/nginx/html

EXPOSE 80