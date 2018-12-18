function unlock() {
    document.getElementById('main-div').classList = 'visible';
  }

function openSite(evt, siteName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(siteName).style.display = "block";
  evt.currentTarget.className += " active";
}


/* function passWord() {
  
  var testV = 1;
  var pass1 = prompt('Please Enter Your Password',' ');
  var body;
  area = document.getElementByClassName("area");
  area.style.display = "none"
  while (testV < 3) {
    if (!pass1) 
       history.go(-1); 
    if (pass1.toLowerCase() == "unblockme") {
      alert('You Got it Right!');
      window.open('/Unblock/');
      break;
    } 
    testV+=1;
    var pass1 = 
        prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
  }
  if (pass1.toLowerCase()!="password" & testV ==3) 
    alert('Access Denied - Please try again in 24 hours');
    history.go(-1);
    return " ";
} */
