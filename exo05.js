function accesSalle(estMembre, aInvitation, estBanni) {
  return (estMembre == true && estBanni == false) || aInvitation == true;
}

accesSalle(true, false, false); // true
accesSalle(false, true, false); // true
accesSalle(true, true, true); // false
console.log(accesSalle(true, false, false));
