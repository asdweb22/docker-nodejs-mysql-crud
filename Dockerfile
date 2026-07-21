# ----------------------------------------------------
# Use lightweight Alpine version of Node.js
# Alpine Linux is very small (~5MB), making the final
# Docker image much smaller than the standard image.
# ----------------------------------------------------
FROM node:22-alpine

# ----------------------------------------------------
# Set the working directory inside the container.
# Every following command will run from this folder.
# ----------------------------------------------------
WORKDIR /app

# ----------------------------------------------------
# Copy package.json and package-lock.json first.
# Docker caches this layer, so dependencies are only
# reinstalled when package files change.
# ----------------------------------------------------
COPY package*.json ./

# ----------------------------------------------------
# Install project dependencies.
# npm installs all packages listed in package.json.
# ----------------------------------------------------
RUN npm install

# ----------------------------------------------------
# Copy the remaining application source code into
# the container.
# ----------------------------------------------------
COPY . .

# ----------------------------------------------------
# Tell Docker that this container listens on port 3000.
# This is documentation only; port mapping happens
# when running the container.
# ----------------------------------------------------
EXPOSE 3000

# ----------------------------------------------------
# Start the Node.js application.
# ----------------------------------------------------
CMD ["npm", "start"]