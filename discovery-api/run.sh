docker build -t discovery-api-server .
docker run -d -t -p 3000:3000 discovery-api-server