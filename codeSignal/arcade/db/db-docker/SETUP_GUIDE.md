# Setup Guide: Running a containerized MySQL database

Installation guide to get a docker MySQL database up and running.

---

## 1) Install: Docker Engine

[Debian Guide](https://docs.docker.com/engine/install/debian/)

convenience script (not recommend for production )

    $ curl -fsSL https://get.docker.com -o get-docker.sh
    $ sudo sh get-docker.sh

Add permission to run Docker as a non-root user \*EXTRA SECURITY CONCERNS

    $ sudo usermod -aG docker your-user

_\*Remember to log out and back in for this to take effect!_

Test install by running your first docker image:

    $ docker container run hello-world

| command / hotkey                                  | function                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docker container run [container_name] [command]` | Run container with optional command _**[OPTIONS:** `-it` interactive mode,`-d` detached mode,`--rm` auto remove on exit, `--name` name the container, `-p outer#:inner#` expose docker inner port, `-v outer:inner` mount outer volume (dir) into container, `--link [container_name]` assigns container ip to name for communication (depreciated but works), `--network [net_name]` connects to named network **]**_ |
| Interactive mode: `ctrl+d`                        | Quit running command and kill container                                                                                                                                                                                                                                                                                                                                                                                |
| `docker ps`                                       | See running docker containers _**Options:** `-a` see all containers, `-q` list just ids_                                                                                                                                                                                                                                                                                                                               |
| `docker container ls`                             | see running docker containers                                                                                                                                                                                                                                                                                                                                                                                          |
| Interactive mode: `ctrl+P` + `ctrl+q`             | detach from running container and quit                                                                                                                                                                                                                                                                                                                                                                                 |
| `docker container attach [container_name]`        | reattach to a detached container                                                                                                                                                                                                                                                                                                                                                                                       |
| `docker container stop [container_name]`          | kill a detached container by name                                                                                                                                                                                                                                                                                                                                                                                      |
| `docker container rm [id or name]`                | removes the container                                                                                                                                                                                                                                                                                                                                                                                                  |
| `docker images rm [image_name]`                   | removes the image                                                                                                                                                                                                                                                                                                                                                                                                      |
| `docker network ls`                               | display networks                                                                                                                                                                                                                                                                                                                                                                                                       |
| `docker network create [net_name]`                | create network by name                                                                                                                                                                                                                                                                                                                                                                                                 |

Tips

Add to bash profile to hide legacy commands

    export DOCKER_HIDE_LEGACY_COMMANDS=true

    echo "export DOCKER_HIDE_LEGACY_COMMANDS=true" >> .bashrc

Examples Commands

    $ docker container run -it alpine sh
    $ cat /etc/os-release
    $ uname -r

Remove all containers (will not remove running containers)

    $ docker container rm $(docker ps -aq)

---

## 2) Install: docker-compose on debian 9

\*\* This is what lets you use '.yml' file to start up your containers

    Docker Compose makes it easier for users to orchestrate the processes of Docker containers, including starting up, shutting down, and setting up intra-container linking and volumes.

Steps

1. Get [Current Release](https://github.com/docker/compose/releases) version number
2. Run this command replaceing "1.27.2" with the newest release number.

```bash
$ sudo curl -L https://github.com/docker/compose/releases/download/1.27.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

3. Set permissions to make it excutable

```bash
$ sudo chmod +x /usr/local/bin/docker-compose
```

4. Verify installation by checking version number.

```bash
$ docker-compose --version
```

[Source](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-debian-9)

### Once installed:

| command                                          | function                              |
| ------------------------------------------------ | ------------------------------------- |
| `docker-compose up`                              | Run \*.yml file in current directory  |
| `docker-compose ps`                              | Check container status                |
| `docker-compose down`                            | Stop and Remove the running container |
| `docker-compose exec [container_name]`           | followed by command to execute        |
| `docker-compose logs [options] [container_name]` | Shows log files                       |

| Arguments         | function                                                                   |
| ----------------- | -------------------------------------------------------------------------- |
| `-d` , `--detach` | Detached mode: Run containers in the background, print new container names |

example:

```
docker-compose exec mysql-development mysql -uroot -phelloworld testapp
```

---

## 3) Install MySQL Workbench

    sudo apt-get install mysql-workbench

Then open with (or find in start menu)

    mysql-workbench

---

## Using MySQL client

    docker-compose exec mysql-development mysql -uroot -phelloworld testapp

| commands               | action                   |
| ---------------------- | ------------------------ |
| `SHOW TABLES;`         | lists tables in database |
| `SHOW DATABASES;`      | lists databases          |
| `USE [database_name];` | switches databases       |

\*\* Semi-colon is required at the end of all commands

LOAD SETUP DATA

```
sudo docker-compose exec -T mysql-development mysql -phelloworld testapp < setup.sql
```

## RESOURCES

Free online course: [https://learndocker.online/](https://learndocker.online/)
