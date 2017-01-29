copy = function(r) {
	prompt("Copy this! Ctrl+C or Command+C on Macs",r);
}

window.onclick = function(event) {
    if (event.target == beemoviebutton) {
        copy(beemovie);
    }
	if (event.target == shrek2button) {
        copy(shrek2script);
    }
}