window.onload = function() {
// creating variables for Buttons
    var quickAddBtn = document.getElementById("QuickAdd");
    var AddBtn = document.getElementById("Add");
    var cancelBtn = document.getElementById("Cancel");
    var quickAddFormDiv = document.querySelector('.quickaddForm'); //using querySelector as it's a class. We could also use: document.getElementsByClassName('quickaddForm')[0], it will return an Array and we need the first item of the Array.

//Form fields, using iDs
var fullname = document.getElementById("fullname");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var address = document.getElementById("address");
var city = document.getElementById("city");

//Address Book Display: looping through the entries of the address book, using divs
var addBookDiv = document.querySelector(".addbook");

//creating storage Array: an Array that will hold all the JSON objects for all the entries of the Address Book
var addressBook = [];


//Creating Event Listeners
quickAddBtn.addEventListener('click', function() {quickAddFormDiv.style.display = "block"; //displaying the quickaddForm panel
});

cancelBtn.addEventListener("click", function() {quickAddFormDiv.style.display = "none"; ////hiding the quickaddForm panel
});

AddBtn.addEventListener("click", addToBook); //invoking the function addToBook

addBookDiv.addEventListener("click", removeEntry); //invoking the function removeEntry

//creating constructor variables
function jsonStructure(fullname, phone, email, address, city) {
    this.fullname = fullname;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.city = city;
}

//Creating addToBook function
function addToBook() {
    var isNull = fullname.value !='' && phone.value != '' && email.value !='' && address.value != '' && city.value !=''; // checking if all input fields are filled, if yes, submit the form
    if(isNull) {
        //Add the contents of the form to the Array and localStorage (format the input into a valid JSON structure)
        var obj = new jsonStructure(fullname.value, phone.value, email.value, address.value, city.value); // construct the function
        addressBook.push(obj); //updating the array
        localStorage['addbook'] = JSON.stringify(addressBook); //converting an array into the valid string and storing in the localStorage
        quickAddFormDiv.style.display = 'none'; // hiding form panel
        clearForm(); //clear the form fields
        showAddressBook(); //updating and displaying all records in the addressbook
    }
}

//creating removeEntry function 
function removeEntry(e) {
    if(e.target.classList.contains('delbutton')) {
        var remID = e.target.getAttribute('data-id');
        addressBook.splice(remID,1); //remove the JSON entry from te array with the index num = remID
        localStorage['addbook'] = JSON.stringify(addressBook); // converts the updated contains of the array(after the removal) into string and will store it into the localStorage
        showAddressBook(); //updating the display
    }
}

//creating clearForm function that will clear all the form fields
function clearForm() {
    var frm = document.querySelectorAll(".formFields");
    for(var i in frm) {
        frm[i].value = '';
    }
}

//creating showAddressBook function that will display the content of Address Book
function showAddressBook () { //check if the key 'addbook' exists in localStorage or else create it. If it exists, load contents from localStorage and loop > display in on the page
    if(localStorage['addbook'] === undefined) {
        localStorage['addbook'] = "[]";
    } else {
        addressBook = JSON.parse(localStorage['addbook']); //if the localStorage contains something, update empty array with the contents of the localStorage
        addBookDiv.innerHTML = '';
        for(var n in addressBook) {
            var str = '<div class="entry">';
                str += '<div class="name"><p>' + addressBook[n].fullname + '</p></div>';
                str += '<div class="phone"><p>'+ addressBook[n].phone + '</p></div>';
                str += '<div class="email"><p>' + addressBook[n].email + '</p></div>';
                str += '<div class="address"><p>' + addressBook[n].address + '</div>';
                str += '<div class="city"><p>' + addressBook[n].city + '</p></div>';
                str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
                str += '</div>';
                addBookDiv.innerHTML += str;
        }
    }
}
    showAddressBook();
}
