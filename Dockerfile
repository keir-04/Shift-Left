FROM node:24-alpine3.24


WORKDIR /app


# Update npm and vulnerable bundled dependencies
RUN npm install -g npm@latest && \
    npm install -g undici@latest && \
    npm cache clean --force


COPY package*.json ./


RUN npm ci --omit=dev


COPY . .


RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app


USER appuser


EXPOSE 3000


CMD ["node","app.js"]
