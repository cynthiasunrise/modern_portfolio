CSS3 Animation & Transitions Crash Course
Traversy Media
Video del 31/10/17
https://www.youtube.com/watch?v=zHUpx90NerM

CODE:
https://www.youtube.com/redirect?q=http%3A%2F%2Fwww.traversymedia


LO QUE SE USÓ EN ESTE PROYECTO:
-----------------------------------------------------------------------------------------
* Install NodeJS 
  NODEjs --> Javascript runtime. It comes with something called NPM or Node Package Manager

  The compile tool we are using for Sass is called "NODE SASS" and we need NPM to install it

* Install git

* Sass workflow (Node-sass + Live server workflow)
  We need a way for our Sass to be compiled down to regular CSS because the browser doesn't read SCSS files
  * We need to create the "PACKAGE.JSON file", is like a MANIFEST for our project, so execute these commands (VScode's prompt):
    - npm init
      accept package name
      accept version
      you can put a description
      everything else is fine
      In Author, you can put your name
      In License, MIT
      Is this OK? ENTER
    - All these will create a PACKAGE.JSON file with some key-value pairs. If we install anything with NPM, it will get put in this file inside the dependencies object

  * Search in google "NodeSass" github, grab the NPM install command from that page
  * Install node-Sass
    - execute command
      "npm i node-sass"
      This will create the node-modules directory. Everytime you install something with NPM it gets in node-modules folder.
      With node-sass, you'll see a lot of files in there because node-sass has its own dependencies, and then those dependencies have dependencies

  * Now Set it up (Node-sass) so that it works --> NPM script

    "scripts" section in PACKAGE.JSON file
    "sass": "node-sass -w scss/ -o dist/css/ --recursive"
     -w es watch the scss folder
     -o es output to dist/css folder
     --recursive es para los partials, que son los archivos scss que se van a importar al main.scss

    - Run the NPM script:
      execute command "npm run <name of script>". In this case, name is "sass"
        npm run sass

* I had problems with the -w parameter, watching the files, and I try this to fix it:
  https://github.com/sass/node-sass/issues/2022
  and replace the 'node_modules/node-sass/lib/render.js' with this version: https://github.com/marcosbozzani/node-sass/blob/bug-vscode-watch/lib/render.js
  https://github.com/marcosbozzani/node-sass/blob/bug-vscode-watch/lib/render.js

  Volver a ejecutar:
  npm run sass

* GIT
  - Crear un archivo .gitignore
    touch .gitignore
    Ejecuté este comando desde gitbash externo, porque desde el PowerShell de VSCOde no me permitió.

    Aquí ponemos todos los archivos o carpetas que no queremos que sean agregados a nuestro repositorio.

  - git init
    Crea un .git hidden folder

  - git add .

  - git commit -m "Initial workflow setup"

* En un terminal vamos a estar corriendo node-sass compiler para que nos indique posibles erorres, y en el otro terminal vamos a correr nuestros scripts para crear archivos o para git.

USEFUL TIPS
-----------------------------------------------------------------------------------------
* "cls" or CTRL + L
  for cleaning

* MKDIR Terminal's command:
  "mkdir responsiveportofolioCSS_Sass"

* "code ."
  abre Visual Studio Code
  If this command no funciona, en tu palette del VSCOde (Ctrl+Shft+P) busca "Install code command in path"
