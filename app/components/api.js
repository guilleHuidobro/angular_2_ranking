System.register(['./api.service', './api-elastic.service', './api-firebase.service'], function(exports_1) {
    var api_service_1, api_elastic_service_1, api_firebase_service_1;
    var API_PROVIDERS;
    return {
        setters:[
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (api_elastic_service_1_1) {
                api_elastic_service_1 = api_elastic_service_1_1;
            },
            function (api_firebase_service_1_1) {
                api_firebase_service_1 = api_firebase_service_1_1;
            }],
        execute: function() {
            /**
             * Provides a basic set of injectables to use the {@link API} service in any application.
             *
             * The `API_PROVIDERS` should be included either in a component's injector,
             * or in the root injector when bootstrapping an application.
             */
            exports_1("API_PROVIDERS", API_PROVIDERS = [
                api_service_1.ApiService,
                api_elastic_service_1.ApiElasticService,
                api_firebase_service_1.ApiFirebaseService
            ]);
        }
    }
});
//# sourceMappingURL=api.js.map