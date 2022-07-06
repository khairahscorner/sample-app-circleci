# syntax=docker/dockerfile:1

FROM node:16-alpine AS development
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]