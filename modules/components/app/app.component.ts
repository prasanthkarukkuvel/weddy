export namespace twoDudes.component.app {
  'use strict';

  export interface IAppController {

  }

  export class AppController implements IAppController {
    public static $inject: string[] = ["$interval", "$window", "$mdMedia"];
    public time: { [key: string]: number } = {};
    public onDay: Date = new Date(2017, 9, 4, 6, 30, 0);

    constructor(public $interval: ng.IIntervalService, private $window: ng.IWindowService, private $mdMedia: ng.material.IMedia) {

    }

    public $onInit(): void {
      this.updateCountdown();
      this.$interval(this.updateCountdown.bind(this), 1000);

      ($( '.my-slideshows' ) as any).cycle();
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