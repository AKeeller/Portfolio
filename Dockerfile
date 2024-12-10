ARG BUSYBOX_VERSION=1.37.0

#######################################

FROM --platform=$BUILDPLATFORM node:lts AS builder-npm

WORKDIR /usr/local/app/

COPY . .

RUN npm install
RUN npm run build

#######################################

FROM alpine AS builder-busybox

RUN apk add --no-cache gcc musl-dev make perl

ARG BUSYBOX_VERSION
ADD https://busybox.net/downloads/busybox-${BUSYBOX_VERSION}.tar.bz2 .
RUN tar xf busybox-${BUSYBOX_VERSION}.tar.bz2

WORKDIR /busybox-${BUSYBOX_VERSION}

ADD https://github.com/lipanski/docker-static-website/raw/a2143a70fe21a40f46b30edcaa20239df8e40cc0/.config .

RUN yes n | make oldconfig && make -j $(nproc)

#######################################

FROM scratch

ARG BUSYBOX_VERSION

COPY --from=builder-busybox /busybox-${BUSYBOX_VERSION}/busybox /bin/
COPY --from=builder-npm /usr/local/app/dist/Personal-Website /var/www/html

USER 2000:2000

WORKDIR /var/www/html

EXPOSE 80

CMD ["/bin/busybox", "httpd", "-f"]