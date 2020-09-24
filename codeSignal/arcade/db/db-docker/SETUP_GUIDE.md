# Setup Guide: Running a containerized MySQL database

Installation guide to get a docker MySQL database up and running.

---

## 1) Install: Docker Engine

[Debian Guide](https://docs.docker.com/engine/install/debian/)

convenience script (not recommend for production )

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Add permission to run Docker as a non-root user \*EXTRA SECURITY CONCERNS

```bash
sudo usermod -aG docker your-user
```

_\*Remember to log out and back in for this to take effect!_

Test install by running your first docker image:

```bash
docker container run hello-world
```

## Commands

---

```bash
docker container run [options] [image_name] [command]
```

Run container with an optional command and options

| OPTIONS                        | Description                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| `-it`                          | Starts container in interactive mode                                                |
| `-i`                           | shows output                                                                        |
| `-t`                           | shows pseudo input                                                                  |
| `-d`                           | detached mode                                                                       |
| `--rm`                         | auto remove on exit (also removes anonymous volumes)                                |
| `--name [container_name]`      | name the container                                                                  |
| `-p [outer]:[inner]`           | expose docker inner container port to outer host port                               |
| `--publish [outer]:[inner]`    | long form of -p                                                                     |
| `-v [outer]:[inner]`           | mount outer host folder into container folder                                       |
| `--link [container_name]`      | resolves container name to ip address (depreciated but works)                       |
| `--network [net_name]`         | connects to named network                                                           |
| `--network-alias [alias_name]` | Assign a network alias to a container, can assign multiple containers to same alias |
| `-e "[EXAMPLE=value]"`         | pass in environment variables at run time                                           |
| `-env-file [file_name]`        | load all env variables in file at run time                                          |

Example

```bash
docker container run --name webserver -p 80:80 -e "PS1=\h:\w# " -v $(pwd)/html:/var/www/html/ -itd nginx:latest
```

\*Tip using `$(pwd)` is a way to get present working directory
\*Environment variable PS1 sets the bash prompt, \h = host, \w = dir

| commands / hotkey                                            | function                                                                                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Interactive mode: `ctrl+d`                                   | Quit running command and kill container                                                                                               |
| `docker ps`                                                  | See running docker containers _**Options:** `-a` see all containers, `-q` list just ids_                                              |
| `docker container ls`                                        | see running docker containers                                                                                                         |
| Interactive mode: `ctrl+P` + `ctrl+q`                        | detach from running container and quit                                                                                                |
| `docker container attach [container_name]`                   | reattach to a detached container                                                                                                      |
| `docker container stop [container_name]`                     | stops container by sending SIGTERM signal to PID1 (Also starts a 10second timeout that send the SIGKILL signal if it doesnt stop)name |  | `docker container kill [container_name]` | kills container immediately |
| `docker container rm [id or name]`                           | removes the container                                                                                                                 |
| `docker images rm [image_name]`                              | removes the image                                                                                                                     |
| `docker network ls`                                          | display networks                                                                                                                      |
| `docker network create [net_name]`                           | create network by name                                                                                                                |
| `docker image pull [image_name]:[tag]`                       | download a docker image (tag is optional)                                                                                             |
| `docker image ls`                                            | list local docker images                                                                                                              |
| `Docker login [optional_repository_url]`                     | default login to hub.docker.com or other repository if url is included                                                                |
| `Docker image tag [old_name]:[old_tag] [new_name]:[new_tag]` | rename a docker image                                                                                                                 |
| `Docker image push [name]:[tag]`                             | push images to your repo must be name spaced to your user name                                                                        |
| `ctrl+c`                                                     | send SIGINT command to PID 1                                                                                                          |
| `docker logs [-f][container_name]`                           | shows logs in standard out `-f` follow mode to show all new logs                                                                      |
| `docker volume ls`                                           | docker managed volumes (will be used if not source is declared with `-v`)                                                             |
| `Docker volume rm [volume_name]`                             | remove a specific volume                                                                                                              |
| `docker volume prune`                                        | delete all unused volumes                                                                                                             |
| `docker volume inspect [volume_name]`                        | display volume information                                                                                                            |
| `docker volume create [volume_name]`                         | create a new volume                                                                                                                   |

Tips

Mount all volumes from another container `--volumes-from [container_name]`

```bash
docker container run -it --rm --name c2 --volumes-from c1 alpine sh
```

Add to bash profile to hide legacy commands

```bash
export DOCKER_HIDE_LEGACY_COMMANDS=true
echo "export DOCKER_HIDE_LEGACY_COMMANDS=true" >> .bashrc
```

Examples Commands

Binds a local directory to a directory in the container with read only (ro) permission.

```bash
Docker container run -v /local/dir:/container/dir:ro
```

NGINX static html folder

```bash
Docker container run -v $(pwd)/local/dir:/var/www/html:ro
```

Tip use \$(pwd) to print working directory

Can also bind named docker volume

```bash
Docker container run -v named-volume:/container/dir:ro
Docker volume ls (will show named-volume)
```

\* Recommended to always do read only permission when ever possible

Alternative to -v or --volume (volume is the default, no src will create anonymous volume)

```bash
--mount type=[bind|volume],src=[local_path],destination=[container_path],readonly
```

Other commands

```bash
docker container run -it alpine sh
cat /etc/os-release
uname -r
```

Remove all containers (will not remove running containers)

```bash
docker container rm $(docker ps -aq)
```

---

## 2) Install: docker-compose on debian 9

\*\* This is what lets you use '.yml' file to start up your containers

**_Docker Compose makes it easier for users to orchestrate the processes of Docker containers, including starting up, shutting down, and setting up intra-container linking and volumes._**

---

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

| command                                          | function                                                |
| ------------------------------------------------ | ------------------------------------------------------- |
| `docker-compose up [service_name]`               | Run all services in \*.yml file (or only the named one) |
| `docker-compose ps`                              | Check container status (process status)                 |
| `docker-compose down`                            | Stop and Remove the running container and resources     |
| `docker-compose exec [container_name]`           | followed by command to execute                          |
| `docker-compose logs [options] [container_name]` | Shows log files                                         |

| Arguments         | function                                                                   |
| ----------------- | -------------------------------------------------------------------------- |
| `-d` , `--detach` | Detached mode: Run containers in the background, print new container names |

example:

```bash
docker-compose exec mysql-development mysql -uroot -phelloworld testapp
```

Example `*.yml` file

```yml
# must specify version number of the docker-compose yml spec you are using
version: '3.3'

services:
  # Name of services
  web:
    image: nginx:latests
    ports:
      # Dashes denote a list and can be followed by multiple lines of dashes
      - 80:80
    volumes:
      - ./html:/usr/share/nginx/html
  # another service (based on matching indents)
  pg:
    image: postgres:9.6-alpine
    # List environment variables directly
    environment:
      - POSTGRES_DB=test
      # Variables without value will pickup values from '.env' file
      - POSTGRES_HOST
    # Or reference a file
    env_file:
      - ./db.env
  alpine:
    image: alpine:latest
    # Same as -> -it
    stdin_open: true
    tty: true
    command: sh
```

---

## 3) Install MySQL Workbench

```bash
sudo apt-get install mysql-workbench
```

Then open with (or find in start menu)

```bash
mysql-workbench
```

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

## Create an image

Example `Dockerfile`

```Dockerfile

FROM [base_image_name]

RUN [commands..]

# linking log files to standard out (or stderr)
RUN rm /dir/log/file && ln -s dev/stdout /dir/log/file

# automatically create anonymous volume at this location
VOLUME /dir/location

# copy files from local host to container at build time (can use pattern matching (anything supported by: Go's filepath.Match ) IE: /html/*.html see docs for details)
COPY ./html/*.html /var/www/html/

# add can copy over files from urls or zip files
ADD https://www.example.com/ondex.html

# Lets docker know you intend to use this port but doesnt real expose it
EXPOSE 80

# Set environment variables can be overridden at runtime with -e
ENV PS1="\h:\w# " ANOTHER="HEELLLOO"

# <- comment; EXEC FORM of executing commands as items in an array
CMD ["[cmd]","[args]"]
```

Build image

    $ Docker image build -t [my_name]:[my_tag] [context]

\* context is the directory were the Dockerfile exists

Use .dockerignore file to exclude files from being included in the build

Example `.dockerignore` file

    /node_modules/
    .env

## RESOURCES

Free online course: [https://learndocker.online/](https://learndocker.online/)
