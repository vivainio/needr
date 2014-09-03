/// <reference path="../../types/types.ts"/>


class HomeController implements core.IHomeController {
  greeting: string;
  http: any;
  topics: Array<String>;

  /* @ngInject */
  constructor(private $rootScope: core.IRootScope, $http, dataParserService) {
    $rootScope.pageTitle = "Hello";
    this.greeting = "hello there";
    this.http = $http;

  }

  fetch() {
    console.log("Fetching");
    var url = "https://query.yahooapis.com/v1/public/yql/muro_components/components1?format=json&diagnostics=true&callback=";
    var p = this.http.get(url);
    p.then((r) => console.log(r));
  }
}

angular
  .module("ngBoilerplate.home")
  .controller("HomeController", HomeController);
