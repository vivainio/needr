/// <reference path="../../types/types.ts"/>


class DataParserService {

  /* @ngInject */
  constructor($http) {
    console.log("ParseService constructed");
  }

};

angular
  .module("ngBoilerplate.home")
  .factory("dataParserService", DataParserService);
