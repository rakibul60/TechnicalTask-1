app.controller('ContactListController',function($location,$state,$scope,$log,contactService){

    // contactList controller

    var vm = this;
    

    vm.contacts = contacts;
    vm.contactss=[];
    
    
   
    function contacts() {
        contactService.contactCreate(vm.name,vm.phone_number);
        $state.go('list');
      
    }

    getContacts();
    
    function getContacts(){
        contactService.getContact().then(contactSuccessFn,contactErrorFn);
    }

    function contactSuccessFn(data){
      
        
        vm.contactss=data.data.results;
    }
    function contactErrorFn(data){
        $log.info(data.error);
        $state.go('list');
    }
});