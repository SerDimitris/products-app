# version of node to use
FROM node:20

# Directory to save image
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure that both package and package-lock are copied
COPY package*.json ./

RUN npm install

# Copy all files to /app
COPY . .

# Port to play from
EXPOSE 3000

# Start application
CMD ["npm", "run", "start"]