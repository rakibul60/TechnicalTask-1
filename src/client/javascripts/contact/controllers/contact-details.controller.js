app.controller('ContactDetailController',function($location,$state ,$log,$stateParams,$scope, contactService){
    var vm = this;

    vm.contacts = contactService;
  
    getSingleContact();
  

    function getSingleContact(){
    
        contactService.getSingleContact().then(contactSuccessFn,contactErrorFn);
  
    }

    function contactSuccessFn(data){
        
    
        vm.name=data.data.name;
        vm.phone_number=data.data.phone_number;
    
    }
    function contactErrorFn(data){
    
        $log.info();
        if(data.status =='404'){
            $state.go('list');
        }
       
    }

    
    


    vm.updateContact=updateContact;



    function updateContact(){
    
        contactService.updateSingleContact(vm.name,vm.phone_number).then(updateSuccessFn,updateErrorFn);
    }

    function updateSuccessFn(data){
        
  
  
        vm.updatecontacts=data.data.name;
        
        $state.go('list');
    }
    function updateErrorFn(data){
        $log.info(data.error);
       
    }
    vm.deleteContact=deleteContact;
    function deleteContact(){
    
        contactService.deleteSingleContact().then(deleteSuccessFn,deleteErrorFn);
    }

    function deleteSuccessFn(data){
 
        $log.info(data);
  
  
 
        $state.go('list');
    }
    function deleteErrorFn(data){
        $log.info(data.error);
        $state.go('list');
    }


  
});




