> Hello! This is written by Shujie Zhang, leader of Tsinghua-TFL2023 Team. She encountered tens of thousands of trouble when collocating the nuxt+vue environment, so she wrote this in order to help you, no matter you are a member of her team or iGEMers in the following years.


>Attention List
dev command in package.json is different from windows(it's docker!). Attention to package.json when pushing the latest progress.
## Program Structure

    |__ assets/            -> holding css/scss文件
    |__ components/        -> holding all the components
    |__ layouts/           -> holding the general template
    |__ pages/             -> holding all the pages
    |__ plugins/           -> holding plugins
    |__ init_document.md   -> explaining how to modify the wiki in nuxt   
    |__ .gitignore         -> to tell GitLab which to load 
    |__ .gitlab-ci.yml     -> a process for pervading that **can not be modified**
    |__ LICENSE            -> license
    |__ nuxt.config.ts     -> Nuxt collocating(be careful!)
    |__ package-lock.json  -> the specific rely tree(Auto when using npm install)
    |__ package.json       -> all the relies and bashes(Auto when using npm install)
    |__ README.md          -> program intro
    |__ tsconfig.json      -> Typescript collocating(be careful!)

## Run nuxt locally and on gitlab
### Environment   

For collocating node.js, look [here](https://blog.csdn.net/WHF__/article/details/129362462), its's really detailed and you are not going to be even a bit lost!   

### Create Our Program

1 Create a folder such as "Tsinghua-TFL", and run   
``` bash
cd tsinghua-tfl #enter
git pull #renew the latest code
npm install #install npm
```
in the content of "Tsinghua-TFL".     

- For detailed git course, see [here](https://www.liaoxuefeng.com/wiki/896043488029600) for git and [here](https://blog.csdn.net/qq_38232816/article/details/112822309) for SSH and [here](https://blog.csdn.net/ccccce/article/details/83302940) for git operations.
- If you choose SSH, remember the address is "git@gitlab.igem.org" instead of "git@gitlab.igem.org:2023/tsinghua-tfl.git". And rsa key is recommended to be stored by default and one ssh is enough for your computer. Do not change its position and do not overwrite it casually!
- After ssh, connect gitlab repo with your local cp. Look [here](https://blog.csdn.net/menfolk_k/article/details/107123980) for further guidance. 

2 After that, the **node_modules** folder and the **.nuxt** folder are forbidden to modified!  

3 run
``` bash
npm run dev
```

- Probably you will encounter some problems here. Shujie herself experienced four kinds of error reports and stayed up all night to fix them...See whether [this](https://blog.csdn.net/m0_48300767/article/details/131450325) is needed by you~
- If you can not find any solution throughout the website, calm down and download Node.js de novo...This worked for Shujie at least.   

4 visit `http://localhost:3000/tsinghua`to see your program

5 use`Ctrl+C`to stop local running

