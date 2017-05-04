'use strict';

/* Filters */

var AppFilters = angular.module('TaskManager.filters', []);

AppFilters.filter('interpolate', ['version', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
}]);
