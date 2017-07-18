export namespace twoDudes {
    'use strict';
    export class Router {
        public static configureRoutes($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider): void {
            $stateProvider.state("app", {
                url: '/',
                template: '<app-view></app-view>'
            });
            $urlRouterProvider.otherwise('/');
        }

        public static registerRouteFailureHandler($rootScope: ng.IRootScopeService, $state: ng.ui.IStateService): void {
            $rootScope.$on('$stateChangeError', ($event: ng.IAngularEvent, toState: ng.ui.IStateService, toParam: ng.ui.IStateParamsService, fromState: ng.ui.IStateService, fromParam: ng.ui.IStateParamsService, error: any) => {
                console.log(fromParam, toParam, error);
            });
        }
    }

    Router.configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    Router.registerRouteFailureHandler.$inject = ['$rootScope', '$state'];
}
