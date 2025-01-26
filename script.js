const message=document.getElementById("message");
const password = document.getElementById("password");
const strength= document.getElementById("strength");
const submitButton=  document.querySelector("button");

password.addEventListener("input",function(){
  const passwordValue=password.value;
  const len=passwordValue.length;
  let strengthValue='';
  if(password===0){
    strengthValue='';
  } else if(len<6){
    strengthValue='weak';
  } else if (len<10) {
    strengthValue='medium'
  } else {
    strengthValue='strong';
  }
  
 strength.textContent= strengthValue;
 message.style.display='block';
});

submitButton.addEventListener("click",function(){
  const passType = password.getAttribute('type');
  if(passType==='password'){
    password.setAttribute('type','text');
  }else{
    password.setAttribute('type','password');
  }
});
