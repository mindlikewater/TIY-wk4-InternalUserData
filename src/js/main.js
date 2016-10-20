import $ from 'jquery';

//global constant holds the main url
var RANDOM_API = "https://randomuser.me/api/";

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

//function creates an empty box in HTML for each employee
function makeIDBoxes (user) {
  //loop to create an HTML box for every employee
  for (var i=0; i < user.results.length; i++) {
    //variable holds the current employee
    var employee = user.results[i];
    //variable generates the data into HTML
    var employeeHTML = `
      <div class="emp-box">
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

//calls function that gets employee data
getUsers();
