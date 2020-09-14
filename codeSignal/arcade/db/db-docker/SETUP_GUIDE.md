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
