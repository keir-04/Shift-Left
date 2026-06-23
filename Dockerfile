FROM node:24-alpine3.24

WORKDIR /app


COPY package*.json ./


RUN npm ci --omit=dev


COPY . .


# Remove npm after installing dependencies
# Runtime container only needs node
RUN rm -rf /usr/local/lib/node_modules/npm && \
    rm -rf /usr/local/bin/npm && \
    rm -rf /usr/local/bin/npx


RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app


USER appuser


EXPOSE 3000


CMD ["node","app.js"]
