Учебный проект в политехе

Docker
docker build -t example-angular -f Dockerfile .
docker run --rm -ti --name angular_1 -p "127.0.0.1:4200:4200" example-angular