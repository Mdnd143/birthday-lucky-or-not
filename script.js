const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");
const outputBox=document.querySelector("#output-box");
function checkBirthdateIsLucky(){
  const dob= dateOfBirth.value;
  const sum=calculateSum(dob);
  compareValues(sum,luckyNumber.value)
}
function compareValues(sum,luckyNumber){
  if(sum>0 && luckyNumber>0){
 if(sum%luckyNumber===0){
   outputBox.innerText="Your Birthdate is lucky";
 }
 else{
   outputBox.innerText="Your Birthdate is not lucky";
 }
}
else{
  outputBox.innerText="either you entered invalid date/number or you have not entered any date/number.";
}
}
function calculateSum(dob){
 dob=dob.replaceAll("-","");
 let sum=0;
 for(let i=0;i<dob.length;i++){
   sum=sum+Number(dob.charAt(i));

 }
 return sum;
}
checkNumberButton.addEventListener('click',checkBirthdateIsLucky)