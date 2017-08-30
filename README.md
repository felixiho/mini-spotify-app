# Mini Spotify App

## Changelog
### [1.0.1] - 2017-08-30
### Added
- Albums
- Tracks
- A "go back" button

<hr>

## Software Prerequisites

Before installing this project, the following software is required:

### Git

Look at [Setting Up Git](https://help.github.com/articles/set-up-git/) for instructions.

### Node.js - npm

Go to [Node.js](https://nodejs.org/en/) website, download the latest version and install it in your computer. Node's package manager, npm will be installed along with it. They are used for installing dependencies, running the build steps, and running tests.

<hr>

## After cloning
First run "npm install" to download all the dependencies.

## App scaffolding
The skeleton app was downloaded from Angular repo.

## Spotify API authentication
This app needs to authenticate with the Spotify API so a token is required. This token can be generated at https://developer.spotify.com/web-api/console/get-search-item/. Then it needs to be added to the variable "authToken" in the file "spotify.service.ts" in the folder "services". This token will last an hour.

## Development server
Run `npm start` from a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.
