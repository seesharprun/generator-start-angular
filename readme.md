# Yeoman Generator for Angular

Creates a blank, empty [Angular 4](http://angularjs.blogspot.com/2017/03/angular-400-now-available.html) project ideal for use with Visual Studio Code.

The template is designed to integrate tightly with the Build, Tasks and Debug features of <http://twitter.com/code>.

## Install

* Install the generator from NPM using:

    ```shell
    npm install --global yo generator-start-angular
    ```

## Getting Started

1. Create an Angular Project:

    ```shell
    yo start-angular
    ```

    > Creates a new project in Visual Studio Code that is configured to debug using NPM *lite-server* package. ``npm install`` is ran automatically for you.

1. Open the application in Visual Studio Code:

    ```shell
    code .
    ```

1. Press ``F5`` in Visual Studio Code to debug the application.

    > The TypeScript compiler runs in *watch* mode allowing you to modify HTML and TS files and see changes reflected in the running application.

### Generator Options

| Option | Description |
| --- | --- |
| ``--bootstrap`` | Adds Bootstrap v4 Alpha 6 styling to the generated Angular application. |
| ``--nochild`` | Excludes the example child component from the generated Angular application. |
| ``--v2`` | Generates the Angular application using v2.x+ libraries instead of Angular v4.x+ libraries. |

> You can use the generator options in any combination.
