FROM node:22
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

RUN npm install

# Copy the rest of the application
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]