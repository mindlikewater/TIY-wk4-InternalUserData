import $ from 'jquery';

//global constant holds the main url
var RANDOM_API = "https://randomuser.me/api/";

/*
//calls the server to get 12 random IDs
$.ajax({
  url: `${RANDOM_API}/?results=12`,
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

function printData (data) {
  console.log(data);
}; */

//gets the specified number of random IDs I want
function getUserData (users) {
  return $.ajax({
    url:  `${RANDOM_API}/?results=${users}`
  });
};

//function gets the data from ajax
function getUsers () {
  var req = getUserData(12);
  req.then(makeIDBoxes);
};

//$("#submit-button").click(getUsers);

//function creates an empty box in HTML for each user
function makeIDBoxes (user) {
  for (var i=0; i < user.results.length; i++) {
    var employee = user.results[i];
    var employeeHTML = `
      <div class="user-box">
        <img class="image" src="${employee.picture.large}"/>
        <div class="name">${employee.name.first} ${employee.name.last}</div>
        <div class="email">${employee.email}</div>
        <div class="address">${employee.location.street}</div>
        <div class="address">${employee.location.city} ${employee.location.state} ${employee.location.postcode}</div>
        <div class="phone">${employee.phone}</div>
        <div class="ssn">${employee.cell}</div>
      </div>`;

      $(".container").append(employeeHTML);
    };
};

getUsers();


/*
//function pulls necessary parts of user data from ajax array
function userResults (user) {
  for (var i=0; i < user.results.length; i++) {
    var employee = user.results[i];

    var photo = employee.picture.large;
    var firstName = employee.name.first;
    var lastName = employee.name.last;
    var email = employee.email;
    var street = employee.location.street;
    var city = employee.location.city;
    var state = employee.location.state;
    var zipcode = employee.location.postcode;
    var phone = employee.phone;
    var ssn = employee.cell;
  }
  return {
    photo: photo,
    firstName: firstName,
    lastName: lastName,
    email: email,
    street: street,
    city: city,
    state: state,
    zipcode: zipcode,
    phone: phone,
    ssn: ssn
  };
};
*/
