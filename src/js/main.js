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
*/

function printData (data) {
  console.log(data);
};

//gets the specified number of random IDs I want
function getUserData (users) {
  return $.ajax({
    url:  `${RANDOM_API}/?results=${users}`
  });
};

//function gets the data from ajax
function getUsers (event) {
  var req = getUserData(12);
  req.then(printData);
  console.log("The request is away.");
};

$("#submit-button").click(getUsers);


//function pulls necessary parts of user data from ajax array
function userResults (user) {
  var photo = user.results.picture.large;
  var firstName = user.results.name.first;
  var lastName = user.results.name.last;
  var email = user.results.email;
  var street = user.results.location.street;
  var city = user.results.location.city;
  var state = user.results.location.state;
  var zipcode = user.results.location.postcode;
  var phone = user.results.phone;
  var ssn = user.results.cell;

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
