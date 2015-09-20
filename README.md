# es6-project-setup

Download this repository into your workspace, follow the below mentioned instructions and get up and running with any ES6 project in a matter of seconds.

ES6 - The new face of JS!
---------------------
It is pretty apparent that ES6 is rapidly taking over, it is important that we prepare ourselves for this change.
To do so we need to be acquainted with the various new features ES6 supports.

Setup an ES6 project - GETTING STARTED
---------------------
This repo sets up a project that integrates Babel and Browserify to write code in ES6 that can be understood and executed by various browsers. 

What is Babel?
---------------------
In plain words, Babel is a transpiler for JavaScript best known for its ability to turn ES6 (the next version of JavaScript) into code that runs in your browser (or on your server) today. 
For more info, check this out: https://babeljs.io/

What is Browserify?
---------------------
Browserify allows us to use node.js style modules in the browser. We define dependencies and then Browserify bundles it all up into a single neat and tidy JavaScript file.
For more info, check this out: https://github.com/substack/node-browserify#usage

Installtion
---------------------


Understanding the project structure
---------------------

Below is the project structure:

 ```
|-- dist/
   |-----main.js
   |-----main.min.js
|-- modules/
   |-----learnES6.js
   |-----main.js
|--Gruntfile.js
|--package.json
|--usage.html
 ```

All of you would be familiar with Gruntfile.js and the package.json.

The modules/ folder contains the JS files with all the ES6, and the dist contains main.js - the converted ES5 code for the browser to execute. The dist folder also contains main.min.js which a minified version main.js once it has been created by the browserify task.

For this project, I have chosen the javascript task runner, Grunt.

Insight on Gruntfile.js
---------------------

This file is pretty much a replica of alot of the gruntfiles most of you would have seen till date!
But what does the grunt build here do?
This task executes the Browserify task once and stops.
Everytime this task run, all of the JS code inside the modules folder is bundled up and wrapped up in a single file, the code then goes through bablify which converts the ES6 code into ES5 which the browser in turn executes.

What features of ES6 are we covering here?
---------------------
This is essesntially to understand how ES6 is currently running on the browsers not supporting it. Hence I have only covered the few minimal features of ES6 herewith namely the import,export,class,arrows.

To get a complete overview of the new ES6 feature please refer: http://es6-features.org/#Constants

The contents of the two files:
 ```
 |-- modules/
   |-----learnES6.js
   |-----main.js
```
   
 contains the ES6 code.

```main.js``` imports ```learnES6.js```, and then when we run ```grunt``` here, the following takes place:

-Browserify will bundle all the files into one
-The bundled file is passed through babelify to transform the code into ES5
-A file named main.js that can be executed in all browsers
