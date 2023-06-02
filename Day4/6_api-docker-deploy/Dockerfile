FROM node:18
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]