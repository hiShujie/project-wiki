# Team Tsinghua-TFL 2023 Wiki
> For future iGEMers to use as a wiki template. Hopefully it can relieve your pressure of project web！🥺
## Files
The template structure is as follows:

    |__ assets/            -> contains uncompiled Sass files
    |__ components/        -> contains Vue.js components
    |__ layouts/           -> contains Nuxt.js layouts
    |__ pages/             -> contains all views and routes of the website
    |__ plugins/           _> contains Nuxt.js plugins
    |__ .dockerignore      -> tells dockers which files/directories should be excluded from the context
    |__ .editorconfig      -> a collection of text editor plugins for maintaining consistent coding styles
    |__ .gitignore         -> tells GitLab which files/directories should not be uploaded to the repository
    |__ .gitlab-ci.yml     -> an automated flow for building, testing and deploying your website.
    |__ docker-compose.yml -> a config file for Docker Compose
    |__ Dockerfile         -> a file with instructions on how to build the docker image
    |__ LICENSE            -> License CC-by-4.0, all wikis are required to have this license - DO NOT MODIFY
    |__ nuxt.config.js     -> a Nuxt configuration file
    |__ package-lock.json  -> the exact dependencies tree of the website
    |__ package.json       -> contains all the dependencies and scripts for the website
    |__ README.md          -> a file containing the text you are reading right now
    |__ tailwind.config.js -> a tailwind configuration file
    |__ tsconfig.json      -> a Typescript configuration file
    
## Technologies
  * [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
  * [Nuxt.js](https://nuxtjs.org/): a Vue.js framework
  * [Sass](https://sass-lang.com/): a CSS extension language

## Building locally using npm
``` bash
git clone https://github.com/hiShujie/project-wiki.git
cd project-wiki
npm install
npm run dev
```

## Testing production
``` bash
docker-compose up -d --build
docker-compose down #to stop the running container
```
