# Multi-stage build for VOTUM static site
# SITE_ENV decides indexing (src/config/environment.js). Default: not indexable.
#   docker build --build-arg SITE_ENV=production …   only for a production host
FROM node:20-alpine AS builder
WORKDIR /app
ARG SITE_ENV=development
ENV SITE_ENV=$SITE_ENV

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime
WORKDIR /usr/share/nginx/html
ARG SITE_ENV=development
ENV SITE_ENV=$SITE_ENV

# Rendered to /etc/nginx/conf.d/default.conf with ${SITE_ENV} at container start
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /app/dist/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
