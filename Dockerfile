FROM lipanski/docker-static-website:2.6.0

COPY src .
COPY conf/httpd.conf /etc