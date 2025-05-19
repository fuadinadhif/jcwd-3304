# NOTES

1. `docker images`: Melihat list docker image
2. `docker ps`: Melihat list container yang sedang berjalan
3. `docker ps -a`: Melihat list semua container
4. `docker stop [container_name]`
5. `docker kill [container_name]`
6. `docker build -t [image_name]`: Membuat (build) image dari file Dockerfile
7. `docker run -p [docker_port]:[local_port] [image_name]`: Menjalankan image di sebuah container dan mengekspose port-nya
8. `docker start [container_name]`
9. `docker compose up --build`: Membuat dan menjalankan docker container berdasarkan file `docker-compose.yaml`
10. `docker exec -it [container_name] sh`: Masuk ke dalam docker container (agar bisa menjalankan command line)
11. `docker volume ls`: Menampilkan list volume yang ada
12. `docker inspect`: Inspect detail container kita
13. `docker rm [container_name]`: Delete/remove container
14. `docker volume prune`: Remove volume yang tidak terpakai
15. `docker volume rm [volume_name]`: Remove suatu volume sesuai nama
