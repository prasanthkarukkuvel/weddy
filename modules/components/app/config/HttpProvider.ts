export namespace twoDudes {
    'use strict';
    export class HttpProvider {
        public static configureHttp($httpProvider: ng.IHttpProvider): void {
            $httpProvider.useApplyAsync(true);
            $httpProvider.defaults.withCredentials = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
            $httpProvider.defaults.headers.common['Accept'] = 'application/json';
            $httpProvider.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
        }
    }
    HttpProvider.configureHttp.$inject = ["$httpProvider"];
}
