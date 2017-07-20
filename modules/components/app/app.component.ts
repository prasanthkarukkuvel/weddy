export namespace twoDudes.component.app {
    'use strict';

    export interface IAppController {

    }

    export class AppController implements IAppController {
        public static $inject: string[] = ["$interval", "$window", "$mdMedia", "$timeout", "$mdSidenav"];
        public time: { [key: string]: number } = {};
        public onDay: Date = new Date(2017, 9, 4, 6, 30, 0);

        public slides: string[] = [
            "The Bride, Neela Arun Raj",
            "Taking this vows, for our family, for our love.",
            "Finally, let us take the seventh step and be true companions and remain lifelong partners by this wedlock.",
            "Let us take the sixth step for self-restraint and longevity.",
            "Let us take the fifth step so that we are blessed with strong, virtuous and heroic children.",
            "Let us take the fourth step to acquire knowledge, happiness and harmony by mutual love and trust.",
            "Let us take the third step to increase our wealth by righteous means and proper use.",
            "Let us take the second step to develop physical, mental and spiritual powers.",
            "Let us take the first step to provide for our household a nourishing and pure diet.",
            "The Groom, Prasanth Karukkuvel"
        ];

        private sidenavInstance: ng.material.ISidenavObject;

        constructor(public $interval: ng.IIntervalService, private $window: ng.IWindowService, private $mdMedia: ng.material.IMedia, public $timeout: ng.ITimeoutService, private $mdSidenav: ng.material.ISidenavService) {

        }

        public $onInit(): void {
            this.updateCountdown();
            this.$interval(this.updateCountdown.bind(this), 1000);

            this.$timeout(() => {
                ($('.my-slideshows') as any).cycle({
                    easing: "easeInOutExpo"
                });
                (this.$mdSidenav as any)('left', true).then((instance: ng.material.ISidenavObject) => {
                    this.sidenavInstance = instance;
                });
            });
        }

        public close(): void {
            if (this.sidenavInstance) {
                this.sidenavInstance.close();
            }
        }

        private updateCountdown(): void {
            const onDay: Date = new Date("Monday, 4 September 2017, 06:30:00");
            const now: Date = new Date();

            let seconds: number = Math.floor((+(onDay) - +(now)) / 1000);
            let minutes: number = Math.floor(seconds / 60);
            let hours: number = Math.floor(minutes / 60);
            const days: number = Math.floor(hours / 24);

            hours = hours - (days * 24);
            minutes = minutes - (days * 24 * 60) - (hours * 60);
            seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

            this.time["s"] = ((60 - seconds) / 60) * 100;
            this.time["m"] = ((60 - minutes) / 60) * 100;
            this.time["h"] = ((24 - hours) / 24) * 100;
            this.time["d"] = ((50 - days) / 50) * 100;

            this.time["ss"] = seconds;
            this.time["mm"] = minutes;
            this.time["hh"] = hours;
            this.time["dd"] = days;
        }
    }

    export function AppComponent(): ng.IComponentOptions {
        return {
            template: require('./app.html'),
            controller: AppController
        };
    }
}
