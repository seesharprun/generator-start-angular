# Yeoman Generator for edX Angular Course

Creates a blank, empty Angular 2 project ideal for use with Visual Studio Code.

The template is designed to integrate tightly with the Build, Tasks and Debug features of <http://twitter.com/code>.

Based on Angular 2 Release Candidate.

## Install

* Install the generator from NPM using:

    ```shell
    npm install generator-edx-angular
    ```

## Getting Started

1. Create an Angular Project
    ```shell
    yo edx-angular
    ```
    
    > Creates a new project in Visual Studio Code that is configured to debug using NPM *lite-server* package. ``npm install`` is ran automatically for you.

1. Press ``F5`` in Visual Studio Code to debug the application.

### Browser-Based Transpile

* For quick demos, you can generate an Angular project that transpiles your TypeScript files in the browser instead of manually in the IDE:

    ```shell
    yo edx-angular --transpile
    ```
