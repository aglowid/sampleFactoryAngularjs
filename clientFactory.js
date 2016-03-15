'use strict';

angular.module('angularDemoApp')
.factory('clientFactory', ['$resource',
  function($resource){

      return {
        getPartners: function(){
          return [
            {
                "name": "Peter Borren",
                "sex": "M",
                "nationality": "Netherlands"
            },
            {
                "name": "Willaim Potterfield",
                "sex": "M",
                "nationality": "Ireland"
            },
            {
                "name": "Sarah Taylor",
                "sex": "F",
                "nationality": "England"
            }
          ]},
        getClients: $resource('clients.json', {}, {
          'query': { method: 'GET', params: {}, isArray: true }
        })
      };
  }]);