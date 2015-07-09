angular.module('starter.services', [])

    .factory('Systems', function ($http) {
        // Might use a resource here that returns a JSON array
        var systems;

        return {
            all: function () {
                var promise = $http.jsonp("http://115.171.74.156/ABCUCS/api/DescApp?callback=JSON_CALLBACK")
                    .success(function (data) {
                        console.log("jsonp succeed");
                        // 数据
                        systems = data;
                        return systems;

                    }).error(function (error) {
                        console.log("jsonp failed" + error);
                        return promise;
                    });
                return promise;
            },
            remove: function (system) {
                systems.splice(systems.indexOf(system), 1);
            },
            subscribe: function (system) {

            },
            get: function (id) {
                for (var i = 0; i < systems.length; i++) {

                    if (systems[i].ID === id) {
                        return systems[i];
                    }
                }
                return null;
            }
        };
    });
