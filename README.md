# Fortunes Server

This utility reads Unix fortune cookies, and outputs them on to
a web page.

### Build and Usage Requirements

1. Docker

### Building

1. Download the source code.
1. Create Docker Image
   ```sh
   $ docker buildx build -f docker/Dockerfile -t fortunes-server:latest .
   ```

### Usage
1. Run Docker container
   ```
   $ docker run -p 34035:34035 fortunes-server:latest
   ```
1. Open a web browser, and navigate to `${IPADDRESS OF HOST}:34035`
1. **Offensive** fortunes are available by toggling the switch.
