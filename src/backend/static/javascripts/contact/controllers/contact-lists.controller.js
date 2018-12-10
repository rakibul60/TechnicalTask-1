app.controller('ContactListController',function($location,$state,$scope,$log,contactService){

    // contactList controller

    var vm = this;
    

<<<<<<< HEAD
    vm.contacts = contacts;//function assign
    vm.contactss=[];
    vm.name=vm.name;
    vm.phone_number=vm.phone_number;
    
    
     contacts();
    
    
    function contacts() {
        
        vm.disabled=true;
        contactService.contactCreate(vm.name,vm.phone_number).then(createSuccessFn,createErrorFn);
        
            
        
        }
        
        
      
   
    function createSuccessFn(data){
     
      if(data.status =='201'){
        $state.go('list');
    }
    }
    function createErrorFn(data){
        $log.info(data.error)
=======
    vm.contacts = contacts;
    vm.contactss=[];
    
    
   
    function contacts() {
        contactService.contactCreate(vm.name,vm.phone_number);
        $state.go('list');
      
>>>>>>> 1769b9a223e965daee321210593dd45cfd227a71
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