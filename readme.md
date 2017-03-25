# Yeoman Generator for Angular

> **Heads up!** This generator has just been updated to version ``2.0.0`` which supports Angular 4 by default.

Creates a blank, empty [Angular 4](http://angularjs.blogspot.com/2017/03/angular-400-now-available.html) project ideal for use with Visual Studio Code.

The template is designed to integrate tightly with the Build, Tasks and Debug features of <http://twitter.com/code>.

## Install

* Install the generator from NPM using:

    ```shell
    npm install generator-start-angular
    ```

## Getting Started

1. Create an Angular Project

    ```shell
    yo start-angular
    ```
    
    > Creates a new project in Visual Studio Code that is configured to debug using NPM *lite-server* package. ``npm install`` is ran automatically for you.

1. Press ``F5`` in Visual Studio Code to debug the application.

    > The TypeScript compiler runs in *watch* mode allowing you to modify HTML and TS files and see changes reflected in the running application.

### Bootstrap 4

Want Bootstrap 4 styling?

``` shell
yo start-angular --bootstrap
```

### Angular 2

Need to go back to Angular 2?

```shell
yo start-angular --v2
```

Angular 2 still works with Bootstrap!

``` shell
yo start-angular --v2 --bootstrap
```
