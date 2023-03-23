#stage 1
FROM node:14.21 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/parking-management-system /usr/share/nginx/html
EXPOSE 3000
