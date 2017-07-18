export namespace twoDudes.component.header {
    'use strict';

    export interface IHeaderController {
        openMenu(): void;
    }

    export class HeaderController implements IHeaderController {
        public static $inject: string[] = ["$mdSidenav"];
        private sidenavInstance: ng.material.ISidenavObject;
        constructor(private $mdSidenav: ng.material.ISidenavService) {

        }

        public openMenu(): void {
            if (this.sidenavInstance) {
                this.sidenavInstance.toggle();
            }
        }

        private $onInit(): void {
            (this.$mdSidenav as any)('left', true).then((instance: ng.material.ISidenavObject) => {
                this.sidenavInstance = instance;
            });
        }
    }

    export function HeaderComponent(): ng.IComponentOptions {
        return {
            template: require('./header.html'),
            controller: HeaderController
        };
    }
}
