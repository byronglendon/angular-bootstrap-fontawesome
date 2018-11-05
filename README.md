# AngularRoutingScss

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# angular-bootstrap-fontawesome

## My Setup Process

npm install -g @angular/cli@6

---------------------------------
SASS & Routing
---------------------------------
ng new angular-routing-scss --style=scss –routing
// Or convert
//ng config schematics.@schematics/angular:component '{ styleext: "scss"}'
//ng config schematics.@schematics/angular:component.styleext styl
// ng set defaults.styleExt scss

---------------------------------
BOOTSTRAP
---------------------------------

ng add ngx-bootstrap 
npm install bootstrap@4.1.1 --save //ngx-rocket uses v 4.1.1
//npm install bootstrap-sass --save //Try this
//npm install bootstrap-scss@4.1.1 --save //shouldnt be necessary check bootstrap/scss/_function.

---------------------------------
FONT AWESOME PRO
---------------------------------
//Free
npm install --save@fortawesome/fontawesome-free
//npm install font-awesome 
//Pro
npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && \
npm config set "//npm.fontawesome.com/:_authToken" TOKEN
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=TOKEN

## Author 
Byron Glendon
https://www.linkedin.com/in/byronglendon/
