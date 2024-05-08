# Get the latest Alpine Release
FROM alpine:latest

# Install fortunes, and python3
RUN apk update
RUN apk add --no-cache fortune python3 py3-pip

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH=$VIRTUAL_ENV/bin:$PATH

# Install fastapi
RUN pip3 install fastapi uvicorn

# Copy Fortune API Code
COPY src /app
COPY static /app/static

RUN chmod 0500 /app/fortune-api-server

WORKDIR /app

EXPOSE 34035

# Command
CMD ["./fortune-api-server"]

