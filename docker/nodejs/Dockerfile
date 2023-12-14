FROM node:20-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app

COPY nodejs/pnpm-lock.yaml ./pnpm-lock.yaml
COPY nodejs/package*.json ./

RUN pnpm install

EXPOSE 9000

# # アプリケーションのサーバーを起動
CMD [ "node", "app.js" ]
