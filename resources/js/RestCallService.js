var RestCallService = angular.module('TaskManager.RestCallService', []);

RestCallService.service('RestCallService', restCallService);

function restCallService($http) {
    return {
        makeRestCall: makeRestCall
    };

    function makeRestCall(url, params) {
        return $http.post(url, params).then(function (response) {
            return response.data;
        }, function (response) {
            return response;
        });

    }
}