function scuberGreetingForFeet(x){
  let result
  if(x <= 400) {
  result = 'This one is on me!';
  }else if (x > 2500) {
  result = 'No can do.';
  } else if(x > 2000 && x <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if(x >= 400 && 2000) {
return 'That will be twenty bucks.';
  };
  return result
}  

function ternaryCheckCity(value){
return (value === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip) {
switch(tip){
  case "generous":
  return ('Thank you so much.')
  case "not as generous":
  return ('Thank you.')
  default : "Bye."
  case "anything else":
  return ('Bye.')
}
}

