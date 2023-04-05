FROM node:18
# This is a dev dockerfile, uncommenting out the below would run Apollo Server without Apollo Studio Sandbox
# ENV NODE_ENV=production

WORKDIR /app
COPY . .

RUN npm install && npm install -g typescript

RUN tsc

EXPOSE 5555
CMD ["node", "./dist/index.js"]