app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    console.log('statepro',$stateProvider);
    console.log('urlRouter',$urlRouterProvider);
    $stateProvider
        .state('list', {
            url: '/',
            templateUrl: '/static/templates/contact/contact-list.html',
            controller: 'ContactListController',
            controllerAs: 'vm'
  
  
        })
        .state('edit', {
            url: '/edit/:id',
            templateUrl: '/static/templates/contact/contact-edit.html',
            controller: 'ContactDetailController',
            controllerAs: 'vm'
  
  
        })
        .state('create', {
            url: '/create',
            templateUrl: '/static/templates/contact/contact-create.html',
            controller: 'ContactListController',
            controllerAs: 'vm'
  
        }); 
  
    $urlRouterProvider.otherwise('/');
  
}]);

app.config(['$locationProvider',function($locationProvider){
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

}]);


app.config(['$httpProvider',function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);
  
