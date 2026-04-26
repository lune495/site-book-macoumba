FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN rm -f package-lock.json && npm install --legacy-peer-deps
COPY ./ .

# ARG env
# RUN npm run build --mode $env
RUN npm run build
FROM nginx as production-stage
COPY --from=build-stage /app/build /app/book_front
COPY nginx.conf /etc/nginx/nginx.conf
