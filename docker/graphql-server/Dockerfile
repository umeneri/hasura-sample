FROM node:20-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app

COPY graphql-server/ ./

RUN pnpm install
RUN pnpm build

EXPOSE 4000

CMD [ "node", "dist/server.js" ]
