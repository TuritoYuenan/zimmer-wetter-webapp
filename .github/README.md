![Project Banner](.github/Swinburne%20Weather%20Service.png)

# Swinburne Weather Service Web Application

This used to be the web application for monitoring weather measured by a weather station, as part of the Swinburne Weather Service project.

We moved on and figured out better ways to make a web app (including not using Xata for database and a full-ahh SvelteKit app for what should have been a simple webpage)

## Usage

1. Clone this repository
2. Open the terminal within the repository's directory

### Set up database

```shell
npm install -g @xata.io/cli
xata init --schema schema.json
```

### Build with docker

```sh
docker build . -t weather-app
```

## Tech Stack

- Framework: SvelteKit
- Database: Xata
- Languages: HTML, CSS, TypeScript, JSON

## Credits

- Author: Nguyen Ta Minh Triet, Freshman @ Swinburne University, HCMC, Vietnam
