function clearErrors(){

  errors = document.getElementsByClassName('formerror');
  for(let item of errors)
  {
      item.innerHTML = "";
  }


}
function seterror(id, error){
  //sets error inside tag of id 
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms['myForm']["fname"].value;
  if (name.length<5){
      seterror("name", "*Length of name is too short");
      returnval = false;
  }

  if (name.length == 0){
      seterror("name", "*Length of name cannot be zero!");
      returnval = false;
  }

  var email = document.forms['myForm']["femail"].value;
  if (email.length>30){
      seterror("email", "*Email length is too long");
      returnval = false;
  }

  var phone = document.forms['myForm']["fphone"].value;
  if (phone.length != 10){
      seterror("phone", "*Phone number should be of 10 digits!");
      returnval = false;
  }

  var DOB = document.forms['myForm']["fpass"].value;
  if (DOB==null||DOB==""){
      seterror("DOB", "*Invalid Date of Birth!");
      returnval = false;
  }

  var address=document.forms['myForm']["faddress"].value;
  if(address==" "){
    seterror("address","*Address cannot be blank!");
    returnval=false;
  }
  var countySel = document.forms['myForm']["countrySel"].value;
  if(countySel=="0"){
    seterror("countySel","*Select country name");
    returnval=false;
  }
  var stateSel = document.forms['myForm']["stateSel"].value;
  if(stateSel=="0"){
    seterror("stateSel","*Select state name");
    returnval=false;
  }
  var districtSel = document.forms['myForm']["districtSel"].value;
  if(districtSel=="0"){
    seterror("districtSel","*Select city name");
    returnval=false;
  }

  return returnval;
}


//Binding dropdown list

var stateObject = {
  "India": { "Delhi": ["New Delhi", "North Delhi"],
  "Karnataka": ["Bangalore", "Gulbarga"],
  "Goa": ["North Goa", "South Goa"],
  },
  "Australia": {
  "South Australia": ["Dunstan", "Mitchell"],
  "Victoria": ["Altona", "Euroa"]
  }, "Canada": {
  "Alberta": ["Acadia", "Bighorn"],
  "Columbia": ["Washington", ""]
  },
  }
  window.onload = function () {
  var countySel = document.getElementById("countrySel"),
  stateSel = document.getElementById("stateSel"),
  districtSel = document.getElementById("citySel");
  for (var country in stateObject) {
  countySel.options[countySel.options.length] = new Option(country, country);
  }
  countySel.onchange = function () {
  stateSel.length = 1; // remove all options bar first
  districtSel.length = 1; // remove all options bar first
  if (this.selectedIndex < 1) return; // done
  for (var state in stateObject[this.value]) {
  stateSel.options[stateSel.options.length] = new Option(state, state);
  }
  }
  countySel.onchange(); // reset in case page is reloaded
  stateSel.onchange = function () {
  districtSel.length = 1; // remove all options bar first
  if (this.selectedIndex < 1) return; // done
  var district = stateObject[countySel.value][this.value];
  for (var i = 0; i < district.length; i++) {
  districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
  }
  }
  }