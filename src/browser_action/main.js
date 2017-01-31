copy = function(r) {
	d.innerHTML="Ctrl+C or Command+C<br><textarea>"+r+"</textarea>"
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
	if (event.target == yeebutton) {copy(yee.innerHTML);}
	if (event.target == birdbutton) {copy(bird.innerHTML);}
	if (event.target == adogbutton) {copy(annoyingdog.innerHTML);}
	if (event.target == seagullbutton) {copy(seagull.innerHTML);}
	if (event.target == bobbutton) {copy(bob.innerHTML);}
}
