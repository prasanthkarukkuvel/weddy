import * as defComponentDefs from './default.component.ts';
import * as appComponentDefs from './app.component.ts';
import * as routeDefs from './config/Router.ts';
import * as httpProviderDefs from './config/HttpProvider.ts';
import * as compileProviderDefs from './config/CompileProvider.ts';
import * as mdThemingProviderDefs from './config/MdThemingProvider.ts';
import * as mdIconProviderDefs from './config/MdIconProvider.ts';

export namespace twoDudes.component.app {
    'use strict';
    angular.module('twoDudes.app', []);
    angular.module('twoDudes.app')
        .component('defaultApp', defComponentDefs.twoDudes.component.app.DefaultComponent())
        .component('appView', appComponentDefs.twoDudes.component.app.AppComponent())
        .config(routeDefs.twoDudes.Router.configureRoutes)
        .config(httpProviderDefs.twoDudes.HttpProvider.configureHttp)
        .config(compileProviderDefs.twoDudes.CompileProvider.configureCompile)
        .config(mdThemingProviderDefs.twoDudes.MdThemingProvider.configureMdTheme)
        .config(mdIconProviderDefs.twoDudes.MdIconProvider.configureMdIcons)
        .run(routeDefs.twoDudes.Router.registerRouteFailureHandler);
}
