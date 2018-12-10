<<<<<<< HEAD
app.controller('ContactDetailController',function($location,$state,$log,$stateParams,$scope, contactService){
    var vm = this;

    vm.contacts = contactService;
    // vm.name=vm.name;
    // vm.phone_number=vm.phone_number;
    vm.button=false;
=======
app.controller('ContactDetailController',function($location,$state ,$log,$stateParams,$scope, contactService){
    var vm = this;

    vm.contacts = contactService;
  
>>>>>>> 1769b9a223e965daee321210593dd45cfd227a71
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
<<<<<<< HEAD
            
=======
>>>>>>> 1769b9a223e965daee321210593dd45cfd227a71
        }
       
    }

    
    


    vm.updateContact=updateContact;

<<<<<<< HEAD
      updateContact();

    function updateContact(){

        contactService.updateSingleContact(vm.name,vm.phone_number).then(updateSuccessFn,updateErrorFn);
        vm.button=true;
        vm.name=vm.name;
        vm.phone_number=vm.phone_number;
=======


    function updateContact(){
    
        contactService.updateSingleContact(vm.name,vm.phone_number).then(updateSuccessFn,updateErrorFn);
>>>>>>> 1769b9a223e965daee321210593dd45cfd227a71
    }

    function updateSuccessFn(data){
        
  
  
        vm.updatecontacts=data.data.name;
<<<<<<< HEAD
        if(data.status =='200'){
            $state.go('list');
           
        }else if(data.status=='201'){
            $state.go('list');
        }
        
=======
        
        $state.go('list');
>>>>>>> 1769b9a223e965daee321210593dd45cfd227a71
    }
    function updateErrorFn(data){
        $log.info(data.error);
       
    }
    vm.deleteContact=deleteContact;
    function deleteContact(){
<<<<<<< HEAD
        vm.button=true;
        var txt='';
        if (confirm("Are yor confirm then pressed OK!!")) {
            txt = "Are yor confirm then pressed OK!";
            contactService.deleteSingleContact().then(deleteSuccessFn,deleteErrorFn);
          } else {
            txt = "You pressed Cancel!";
          }
       
=======
    
        contactService.deleteSingleContact().then(deleteSuccessFn,deleteErrorFn);
>>>>>>> 1769b9a223e965daee321210593dd45cfd227a71
    }

    function deleteSuccessFn(data){
 
        $log.info(data);
  
<<<<<<< HEAD
       
=======
  
>>>>>>> 1769b9a223e965daee321210593dd45cfd227a71
 
        $state.go('list');
    }
    function deleteErrorFn(data){
        $log.info(data.error);
<<<<<<< HEAD
        //$state.go('list');
=======
        $state.go('list');
>>>>>>> 1769b9a223e965daee321210593dd45cfd227a71
    }


  
});




