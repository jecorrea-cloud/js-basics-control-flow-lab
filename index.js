function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return `This one is on me!`;
  } else if(distance > 400 && distance < 2500){
      return `I will gladly take your thirty bucks.`;
  } else if (distance >= 2500){
    return `No can do.`;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let statement;
  city == `NYC` ? statement  = `Ok, sounds good.` : statement = `No go.`;
  return statement;
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch(tip){
    case (`generous`):
      return `Thank you so much.`;
    case (`not as generous`):
      return `Thank you.`;
    default:
      return `Bye.`;  }

}