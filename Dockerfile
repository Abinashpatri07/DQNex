# ==========================================
# 1. BUILD STAGE
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package management files
COPY package*.json ./

# Install dependencies cleanly
RUN npm ci

# Copy application source
COPY . .

# Optional build argument for production API URL (defaults to localhost:5000/api)
ARG VITE_API_URL=http://localhost:5000/api
ENV VITE_API_URL=$VITE_API_URL

# Build production assets into /app/dist
RUN npm run build

# ==========================================
# 2. PRODUCTION RUNNER STAGE (Nginx)
# ==========================================
FROM nginx:alpine AS runner

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration for React SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
