var Message;
var holder;
var contactPeoples = [];
var ContactFindOptions;

document.addEventListener("DOMContentLoaded", function () {

    alert("it worked");
    var options = new ContactFindOptions();
        options.filter = ""; 
        options.multiple = true;
        var filter = ["id", "displayName", "phoneNumbers"];
        navigator.contacts.find(filter, onSuccess, onError, options);
}

  function onSuccess(contacts){

      console.log("contacts?");


        for(var i=0; i < 12; i++){
                    
            var peoples = {};
                peoples.id = contacts[i].id;
                peoples.name = contacts[i].displayName;
                peoples.numbers = [];
                    
                    for (var c=0; c<2; c++) {
                        if (contacts[i].phoneNumbers[c]) {
                            var theNumber = {};                                                 theNumber[contacts[i].phoneNumbers[c].type] = contacts[i].phoneNumbers[c].value;
                            peoples.numbers.push(theNumber);
                    
                            }
                        }
                peoples.long = null;
                peoples.lat = null;
            
                console.log (peoples);
                contactPeoples.push(peoples);
            
            
        }
        var myJson = JSON.stringify(contactPeoples);
       localStorage.setItem('contacts', myJson);
      
        var contactsList = document.querySelector("#contactsList");
      
        for (var j=0; j < contactPeoples.length; j++) {
            var li = document.createElement('li');
            li.className = "contactsList";
            li.dataset.id = j;
            li.innerHTML = contactPeoples[j].name;
            contactsList.appendChild(li);
        }
        
        var eachContact = document.querySelectorAll(".contactsList");
        for (var h=0; h < eachContact.length; h++) {
            console.log (h);
            eachContact[h].addEventListener('click', contactClick, false);
        }
            
    }
    
/*function contactClick (ev) {
    
    var peopleObject = JSON.parse(localStorage.getItem('contacts'));
    
   
    
  
 var contactId = ev.target.dataset.id;
alert(peopleObject[contactId].numbers[0].home);
    
    console.log (peopleObject[contactId].numbers[0].home);
    
}*/
    function onError(contactError) {
        alert('Error: ' + contactError);
        
    }



