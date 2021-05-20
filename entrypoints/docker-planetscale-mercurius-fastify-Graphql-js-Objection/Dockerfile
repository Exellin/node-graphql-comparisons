# Compile to Javascript
FROM node:16 AS node-build

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# Production
FROM node:16 AS node-prod

WORKDIR /usr/src/app

ARG PLANETSCALE_ORG
ENV PLANETSCALE_ORG=$PLANETSCALE_ORG

ARG PLANETSCALE_SERVICE_TOKEN_NAME
ENV PLANETSCALE_SERVICE_TOKEN_NAME=$PLANETSCALE_SERVICE_TOKEN_NAME

ARG PLANETSCALE_SERVICE_TOKEN
ENV PLANETSCALE_SERVICE_TOKEN=$PLANETSCALE_SERVICE_TOKEN

COPY package*.json ./
RUN npm install --production

ADD https://github.com/planetscale/cli/releases/download/v0.36.0/pscale_0.36.0_linux_amd64.tar.gz .
RUN [ "tar", "zxvf", "pscale_0.36.0_linux_amd64.tar.gz", "-C", "/usr/bin" ]
COPY --from=node-build ./usr/src/app/dist ./dist
WORKDIR ./dist

EXPOSE 4000
CMD ["pscale", "connect", "node-graphql-comparisons", "main", "--execute", "node index.js"]
