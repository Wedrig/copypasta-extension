copy = function(r) {
	prompt("Copy this! Ctrl+C or Command+C on Macs",r);
}

window.onclick = function(event) {
    if (event.target == beemoviebutton) {copy(beemovie);}
	if (event.target == shrek2button) {copy(shrek2script);}
	if (event.target == shrek3button) {copy(shrek3);}
	if (event.target == thelegend27button) {copy(thelegend27);}
	if (event.target == ratatouillebutton) {copy(rat);}
	if (event.target == mariobutton) {copy(mario.innerHTML);}
	if (event.target == ruskibutton) {copy(ruski.innerHTML);}
	if (event.target == pepebutton) {copy(pepe.innerHTML);}
}