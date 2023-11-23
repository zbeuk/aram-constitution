FROM node:21-alpine AS builder

ENV CI true

WORKDIR /app
COPY . ./

RUN corepack pnpm install && corepack pnpm run build

FROM nginx:alpine-slim

COPY --from=builder /app/dist/ /usr/share/nginx/html
