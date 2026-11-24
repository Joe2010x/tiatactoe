FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM alpine:3.24
RUN apk --no-cache upgrade && apk add --no-cache tini \
 && adduser -D -H -u 10001 app
COPY --from=build /app/build /www
EXPOSE 8080
USER 10001
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["httpd", "-f", "-v", "-p", "[::]:8080", "-h", "/www"]
