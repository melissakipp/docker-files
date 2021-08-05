# EJS and Docker

In progress... Boilerplate pack to use for EJS project that is Production ready.

**Version** 1.0.0

## Usage for Development

**Installation**

If you do not have NodeJS and NPM install on your machine, this will install the node into a image.

```sh
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml run <service-name> npm install
```

**To start the container and server for dev**

```sh
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

**Output**

```terminal
App running on http://{HOST}:{PORT}
```

### Next Step Production

...

### Author

Melissa Kipp

#### License

This project is licensed under the MIT License

#### Resources

#### TODO:

- [ ] Design
- [ ] Develop
- [ ] Test
- [ ] Google Cloud Deployment
