System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './components/api', './app'], function(exports_1) {
    var browser_1, router_1, http_1, api_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, api_1.API_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map