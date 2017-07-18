import * as headerDefs from "./header.component.ts";

export namespace twoDudes.component.header {
    'use strict';
    angular.module('twoDudes.header', []);
    angular.module('twoDudes.header')
        .component('twoDudesHeader', headerDefs.twoDudes.component.header.HeaderComponent());
}
