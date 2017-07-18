require('./components/app/component.ts');
require('./components/header/component.ts');

export namespace twoDudes {
    'use strict';
    const dependecies: Array<string> =
        [
            // *************************** //
            //  app constants dependecies  //
            // *************************** //

            // ********************** //
            //  angular dependecies   //
            // ********************** //

            'ngAnimate',
            'ngMaterial',
            'ui.router',

            // ************************ //
            //  app core dependecies    //
            // ************************ //

            'twoDudes.app',
            'twoDudes.header',

            // **************************** //
            //  app component dependecies   //
            // **************************** //

            // ************************* //
            //  app service dependecies  //
            // ************************* //

        ];

    // ***************************** //
    //  angular module intilization  //
    // ***************************** //
    angular.module('twoDudes', dependecies);

    // ***************************** //
    //  angular module bootstrapper  //
    // ***************************** //
    angular.element(document).ready(() => {
        angular.bootstrap(document, ['twoDudes'], {
            strictDi: true
        });
    });
}
