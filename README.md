# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The website is [deployed](https://codify-berkeley-education.github.io/DecalWebsite/) using github pages. After changes have been pushed to the Main branch, and after building the site, run

```
GIT_USER=<Your GitHub username> yarn deploy
GIT_USER=aidansunbury yarn deploy #Example
```

to publish the changes and update the website.
