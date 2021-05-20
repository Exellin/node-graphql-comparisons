FROM node:16

WORKDIR /usr/src/app

ARG PLANETSCALE_ORG
ENV PLANETSCALE_ORG=$PLANETSCALE_ORG

ARG PLANETSCALE_SERVICE_TOKEN_NAME
ENV PLANETSCALE_SERVICE_TOKEN_NAME=$PLANETSCALE_SERVICE_TOKEN_NAME

ARG PLANETSCALE_SERVICE_TOKEN
ENV PLANETSCALE_SERVICE_TOKEN=$PLANETSCALE_SERVICE_TOKEN

ENV NODE_PATH=entrypoints/docker-planetscale-mercurius-fastify-Graphql-js-Objection/build

COPY package*.json ./
RUN npm install

ADD https://github.com/planetscale/cli/releases/download/v0.36.0/pscale_0.36.0_linux_amd64.tar.gz .
RUN [ "tar", "zxvf", "pscale_0.36.0_linux_amd64.tar.gz", "-C", "/usr/bin" ]
COPY . .
RUN npm run build
WORKDIR ./dist

EXPOSE 4000
CMD ["pscale", "connect", "node-graphql-comparisons", "main", "--execute", "node index.js"]
