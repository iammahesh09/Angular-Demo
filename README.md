Welcome to Angular
------------------

1. Install Angular

    $ npm install -g @angular/cli

    $ ng new PROJECT-NAME

    $ cd PROJECT-NAME

    $ ng serve

2. Install Bootstrap 4

    npm install bootstrap@latest --save
    npm install jquery@latest --save
    npm install popper.js --save


    and insert css and js files in 'angular.json'

    "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    ],

    "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/tether/dist/js/popper.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],

