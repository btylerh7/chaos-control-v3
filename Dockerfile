FROM oven/bun:latest as base

COPY . .
RUN bun install --frozen-lockfile

RUN bun run build
ENV NODE_ENV=production

CMD ["bun", "./build/index.js"]
