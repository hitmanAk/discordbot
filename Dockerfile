FROM node:22
# Set the working directory in the container
WORKDIR /tmp

# Copy the application files into the working directory
COPY . /tmp

# Install the application dependencies
RUN npm install

RUN npm run build

EXPOSE 3000
# Define the entry point for the container
CMD ["npm", "start"]