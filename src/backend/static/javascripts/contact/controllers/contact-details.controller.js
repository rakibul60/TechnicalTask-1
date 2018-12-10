app.controller('ContactDetailController',function($location,$state,$log,$stateParams,$scope, contactService){
    var vm = this;

    vm.contacts = contactService;
    // vm.name=vm.name;
    // vm.phone_number=vm.phone_number;
    vm.button=false;
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

      updateContact();

    function updateContact(){

        contactService.updateSingleContact(vm.name,vm.phone_number).then(updateSuccessFn,updateErrorFn);
        vm.button=true;
        vm.name=vm.name;
        vm.phone_number=vm.phone_number;
    }

    function updateSuccessFn(data){
        
  
  
        vm.updatecontacts=data.data.name;
        if(data.status =='200'){
            $state.go('list');
           
        }else if(data.status=='201'){
            $state.go('list');
        }
        
    }
    function updateErrorFn(data){
        $log.info(data.error);
       
    }
    vm.deleteContact=deleteContact;
    function deleteContact(){
        vm.button=true;
        var txt='';
        if (confirm("Are yor confirm then pressed OK!!")) {
            txt = "Are yor confirm then pressed OK!";
            contactService.deleteSingleContact().then(deleteSuccessFn,deleteErrorFn);
          } else {
            txt = "You pressed Cancel!";
          }
       
    }

    function deleteSuccessFn(data){
 
        $log.info(data);
  
       
 
        $state.go('list');
    }
    function deleteErrorFn(data){
        $log.info(data.error);
        //$state.go('list');
    }


  
});




