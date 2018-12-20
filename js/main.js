function unlock() {
    document.getElementById('main-div').classList = 'visible';
    document.getElementById('decoy-div').classList = 'hidden';
    document.getElementById("blank").click();
}

function lock() {
    document.getElementById('main-div').classList = 'hidden';
    document.getElementById('decoy-div').classList = 'visible';
    document.getElementById("blank").click();
}

function openSite(evt, siteName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(siteName).style.display = "block";
  evt.currentTarget.className += " active";
}

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
        
        document.getElementById('decoy-div').classList = 'visible';
        document.getElementById('main-div').classList = 'hidden';
      }
