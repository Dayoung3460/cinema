const viewMovie = document.getElementById('viewByMovie');
const viewDate = document.getElementById('viewByDate');
const sec1 = document.getElementById('sec1');
const sec2 = document.getElementById('sec2');
const home = document.getElementById('home');
const upcomingM = document.getElementById('upcomingM');
const upcomingDetail1 = document.getElementById('upcomingDetail1');
const announcement = document.getElementById('announcement');
const membership = document.getElementById('membership');

function logo(){
  sec1.style.display = 'block';
  sec2.style.display = 'contents';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  upcomingDetail1.style.display = 'none';
  upcomingM.style.display = 'none';
}

function openMovie(){
  sec2.style.display = 'block';
  sec2.style.marginTop = "100px";
  sec2.style.width = "100%";
  sec1.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  upcomingDetail1.style.display = 'none';
  upcomingM.style.display = 'none';
}

function viewByMovie(){
  viewMovie.style.display = 'block';
  viewDate.style.display = 'none';
}

function viewByDate(){
  viewMovie.style.display = 'none';
  viewDate.style.display = 'block';
}

function login(){
    sec1.style.display = 'none';
    sec2.style.display = 'none';
    signupCon.style.display = 'none';
    loginCon.style.display = 'block';
    membership.style.display = 'none';
  }

function signup(){
  sec1.style.display = 'none';
  sec2.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'block';
  membership.style.display = 'none';
}



function upcomingMovies(){
  upcomingM.style.display = 'block';
  sec1.style.display = 'none';
  sec2.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  upcomingDetail1.style.display = 'none';
}

function upcomingM1(){
  upcomingDetail1.style.display = 'block';
  upcomingM.style.display = 'none';
  announcement.style.display = 'none';
}

function openAnnouncement(){
  announcement.style.display = 'block'
  upcomingM.style.display = 'none';
  sec1.style.display = 'none';
  sec2.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  membership.style.display = 'none';
}

function OpenMembership(){
  membership.style.display = 'block';
  upcomingM.style.display = 'none';
  sec1.style.display = 'none';
  sec2.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  announcement.style.display = 'none'

}


