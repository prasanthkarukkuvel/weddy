import { IDefaultType } from './IDefaultType.ts';

export namespace appName.constants.filter {
    'use strict';

    class DefaultType {
        public static get constant(): IDefaultType {
            return {
                appName: "My App Name"
            };
        }
    }

    angular.module("appName.constants.defaultType", []);
    angular.module("appName.constants.defaultType")
        .constant("DefaultType", DefaultType.constant);
}
