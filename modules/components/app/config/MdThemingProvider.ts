export namespace twoDudes {
    'use strict';
    export class MdThemingProvider {
        public static configureMdTheme($mdThemingProvider: ng.material.IThemingProvider): void {
            $mdThemingProvider.theme('default')
                .primaryPalette('yellow')
                .accentPalette('pink');
        }
    }
    MdThemingProvider.configureMdTheme.$inject = ["$mdThemingProvider"];
}
