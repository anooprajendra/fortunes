# Get the latest Alpine Release
FROM alpine:latest

# Install fortunes, and python3
RUN apk add --no-cache fortune python3 py3-pip

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

