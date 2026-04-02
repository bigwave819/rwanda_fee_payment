# Use official Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Step 6: Generate the Prisma client (based on your schema)
RUN npx prisma generate

# Build NestJS app
RUN npm run build

# Expose port
EXPOSE 3000

# Run production server
CMD ["node", "dist/main.js"]