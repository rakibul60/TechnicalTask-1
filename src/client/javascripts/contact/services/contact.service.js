app.factory('contactService', function contactfun ($http,$stateParams) {

    //CURD method implementation

    var contactfun={
        contactCreate:contactCreate,
        getContact:getContact,
        getSingleContact:getSingleContact,
        updateSingleContact:updateSingleContact,
        deleteSingleContact:deleteSingleContact

    };
    return contactfun;
    
    function contactCreate(name,phone_number){
        return $http.post('/api/v1/contact/create/',{
            name:name,
            phone_number:phone_number
        });
    }

    function getContact(){
        return $http.get('/api/v1/contact/create/');
        
    }
    
    function getSingleContact(){
        var id=$stateParams.id;
     

        return $http.get('api/v1/contact/'+ id+'/');
    }


    function updateSingleContact(name,phone_number){
        var id=$stateParams.id;
     

        return $http.put('api/v1/contact/'+ id+'/',{
            name:name,
            phone_number:phone_number
        });
    }

    function deleteSingleContact(){
        var id=$stateParams.id;
     

        return $http.delete('api/v1/contact/'+ id+'/');
    }

    

    
});
    
