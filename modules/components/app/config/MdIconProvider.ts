export namespace twoDudes {
    'use strict';

    export class MdIconProvider {
        public static configureMdIcons($mdIconProvider: ng.material.IIconProvider): void {
            const basePath: string = "images/svg/";
            $mdIconProvider.icon("ic_menu", basePath + "ic_menu_black_24px.svg", 24);
            $mdIconProvider.icon("ic_location_on", basePath + "ic_location_on_black_24px.svg", 24);
            $mdIconProvider.icon("ic_directions", basePath + "ic_directions_black_24px.svg", 24);
            $mdIconProvider.icon("ic_directions_bus", basePath + "ic_directions_bus_black_24px.svg", 24);
            $mdIconProvider.icon("ic_directions_transit", basePath + "ic_directions_transit_black_24px.svg", 24);
            $mdIconProvider.icon("ic_favorite_border", basePath + "ic_favorite_border_black_24px.svg", 24);
            $mdIconProvider.icon("ic_access_time", basePath + "ic_access_time_black_24px.svg", 24);
            $mdIconProvider.icon("ic_phone", basePath + "ic_phone_black_24px.svg", 24);
        }
    }
    MdIconProvider.configureMdIcons.$inject = ["$mdIconProvider"];
}
