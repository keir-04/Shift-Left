# Secure lightweight Node image

FROM node:22-alpine


# Create application directory

WORKDIR /app


# Copy dependency files

COPY package*.json ./


# Install production dependencies

RUN npm ci --only=production


# Copy source code

COPY . .


# Create non-root user

RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup


USER appuser


EXPOSE 3000


CMD ["npm","start"]
