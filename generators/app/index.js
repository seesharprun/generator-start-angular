var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);        
        this.option('bootstrap');
    },
    prompting: {
        logIntro: function () {            
            this.log('─────────────────────');
            this.log('Creating New Angular App');       
            this.log('─────────────────────');
        }
    },
    configuring : {
        configuration: function () {
            this.folderName = this.options.bootstrap ? 'bootstrap/' : '';
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
                this.templatePath('package.json'),
                this.destinationPath('package.json'), 
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
                this.templatePath('.gitignore'),
                this.destinationPath('.gitignore'),
                { }
            );          
        },
        writeHTMLFiles: function() {    
            this.fs.copyTpl(
                this.templatePath(this.folderName + 'index.html'),
                this.destinationPath('index.html'), 
                { }
            );    
            this.fs.copyTpl(
                this.templatePath(this.folderName + 'app.component.html'),
                this.destinationPath('app/views/app.component.html'), 
                { }
            );
            this.fs.copyTpl(
                this.templatePath(this.folderName + 'child.component.html'),
                this.destinationPath('app/views/child.component.html'), 
                { }
            );
        },
        writeApplication: function() {
            this.fs.copyTpl(
                this.templatePath('app.component.ts'),
                this.destinationPath('app/app.component.ts'), 
                { }
            );
            this.fs.copyTpl(
                this.templatePath('child.component.ts'),
                this.destinationPath('app/child.component.ts'), 
                { }
            );
            this.fs.copyTpl(
                this.templatePath('app.module.ts'),
                this.destinationPath('app/app.module.ts'), 
                { }
            );
            this.fs.copyTpl(
                this.templatePath('main.ts'),
                this.destinationPath('app/main.ts'), 
                { }
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