var generators = require('yeoman-generator');
var gulpBeautify = require('gulp-beautify');
var gulpFilter = require('gulp-filter');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);        
        this.option('bootstrap');
        this.option('v2');
        this.option('nochild');
    },
    initializing: {
        logIntro: function () {            
            this.log('─────────────────────');
            this.log('Creating New Angular App');
            this.log('─────────────────────');
        }
    },
    configuring : {
        configuration: function () {
            this.version = this.options.v2 ? 2 : 4;
            this.bootstrap = this.options.bootstrap || false;
            this.child = this.options.nochild ? false : true;
        },
        report: function () {
            this.log('Angular Version:\t' + this.version + '.x');
            this.log('Use Bootstrap 4:\t' + this.bootstrap);
            this.log('Has Child Component:\t' + this.child);
        }
    },
    default: {
        logOutro: function () {                 
            this.log('─────────────────────');
        }
    },
    writing: {
        writeSupportFiles: function() {
            this.fs.copyTpl(
                this.templatePath('tsconfig.json'),
                this.destinationPath('tsconfig.json'), 
                { }
            );  
            this.fs.copyTpl(
                this.templatePath('launch.json'),
                this.destinationPath('.vscode/launch.json'), 
                { }
            );
            this.fs.copyTpl(
                this.templatePath('settings.json'),
                this.destinationPath('.vscode/settings.json'), 
                { }
            );   
            this.fs.copyTpl(
                this.templatePath('systemjs.config.js'),
                this.destinationPath('systemjs.config.js'), 
                { }
            );   
            this.fs.copyTpl(
                this.templatePath('tasks.json'),
                this.destinationPath('.vscode/tasks.json'), 
                { }
            );
            this.fs.copyTpl(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore'),
                { }
            );          
        },
        writeModuleFiles: function() {
            this.fs.copyTpl(
                this.templatePath('main.ts'),
                this.destinationPath('app/main.ts'), 
                { }
            );
            this.fs.copyTpl(
                this.templatePath('app.module.ts'),
                this.destinationPath('app/app.module.ts'), 
                {
                    includeChild: this.child
                }
            );
        },
        writeAppComponentFiles: function() {
            this.fs.copyTpl(
                this.templatePath('app.component.ts'),
                this.destinationPath('app/app.component.ts'), 
                {
                    includeChild: this.child,
                    angularVersion: this.version
                }
            );    
            this.fs.copyTpl(
                this.templatePath('app.component.html'),
                this.destinationPath('app/views/app.component.html'), 
                {
                    includeChild: this.child,
                    angularVersion: this.version,
                    useBootstrap: this.bootstrap
                }
            );
        },
        writeChildComponentFiles: function() {
            if (this.child) {
                this.fs.copyTpl(
                    this.templatePath('child.component.ts'),
                    this.destinationPath('app/child.component.ts'), 
                    {
                        angularVersion: this.version
                    }
                );
                this.fs.copyTpl(
                    this.templatePath('child.component.html'),
                    this.destinationPath('app/views/child.component.html'), 
                    {
                        angularVersion: this.version,
                        useBootstrap: this.bootstrap
                    }
                );
            }
        },
        writeHTMLFiles: function() {    
            this.fs.copyTpl(
                this.templatePath('index.html'),
                this.destinationPath('index.html'), 
                {
                    angularVersion: this.version,
                    useBootstrap: this.bootstrap
                }
            );
        },
        writePackageFiles: function() {     
            this.fs.copyTpl(
                this.templatePath('package.json'),
                this.destinationPath('package.json'), 
                {
                    angularVersion: this.version
                }
            );    
        }
    },
    install: {
        installNPMDependencies: function () {
            this.installDependencies({
                npm: true,
                bower: false
            });
        }
    }
});