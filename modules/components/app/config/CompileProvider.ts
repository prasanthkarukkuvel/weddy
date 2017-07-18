export namespace twoDudes {
    'use strict';
    export class CompileProvider {
        public static configureCompile($compileProvider: ng.ICompileProvider): void {
          $compileProvider.debugInfoEnabled(false);
        }
    }
    CompileProvider.configureCompile.$inject = ["$compileProvider"];
}
