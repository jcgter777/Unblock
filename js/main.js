function unlockOne() {
    document.getElementById('main-div').classList = 'hidden';
    document.getElementById('decoy-div').classList = 'visible';
    document.getElementById('login-div').classList = 'hidden';
}

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
