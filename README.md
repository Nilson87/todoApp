#TodoApp
## Author: Mathias Nilson

##Project description:
    A simple to-do list that gets data from an API (local JSON).

### Installation
The app needs to be run from a server for the $.getJSON work.
The author suggests "http-server"

    -Installation via npm:
        npm install http-server -g
        This will install http-server globally so that it may be run from the command line.

        Run command "http-server" in root folder.
        The app is then available on localhost:port

    The styles.less file is compiled in the provided project. However if needed it can be recompiled using "lessc"

    Since no task runner is used, the less-files will be compiled manually.

    - Install less via npm:
        npm install less -g
        In project root,
        Run command "lessc styles/styles.less styles/styles.css" in root folder.

### Usage
The to-dos will be listed and when a checkbox is checked, the data object is updated and a feedback message will be visible in the browser's console.


### Technologies

    - ES6
    - JQuery 3
    - LESS
