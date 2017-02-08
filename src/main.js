copy = function(r) {
	d.style.width="450px"
	d.innerHTML="<textarea>"+r+"</textarea>"
}
aa=["annoyingDog","beeMovie","bigSmoke","bob","dealWithIt",
	"doge","pacertest","hammerAndSickle","leToucan","mario",
	"marioJumping","marioPooping","navySeals",'obamaNotBadBig',
	"obamaNotBadSmall","pepe","ratatouille","sanicHegehog",
	"seagull","shrek2","shrek","shrek3","suprisedBird","theLegend27",
	"yee"];
stuff={
	"annoyingDog":				["Annoying Dog",					annoyingdog.innerHTML],
	"beeMovie":					["Bee Movie Script",				beemovie],
	"bigSmoke":					["Big Smoke's Order",				bigsmoke],
	"bob":                      ["Bob",								bob.innerHTML],
	"dealWithIt":				["Deal with it",					dealwithit.innerHTML],
	"doge":						["Doge",							doge.innerHTML],
	"pacertest":				["FitnessGram Pacer Test",			pacertest],
	"hammerAndSickle":			["Hammer and Sickle",				ruski.innerHTML],
	"leToucan":                 ["Le Toucan",						letoucan.innerHTML],
	"mario":					["Mario",							mario.innerHTML],
	"marioJumping":				["Mario Jumping",					mariojump.innerHTML],
	"marioPooping":				["Mario Pooping",					mariopoop.innerHTML],
	"navySeals":				["Navy Seals Copypasta",			navyseal],
	'obamaNotBadBig':			["Obama Not Bad (Big)",				obamalarge],
	"obamaNotBadSmall":			["Obama Not Bad (Small)",			obamasmall],
	"pepe":						["Pepe The Frog",					pepe.innerHTML],
	"ratatouille":				["Ratatouille Script",				rat.innerHTML],
	"sanicHegehog":				["Sanic Hegehog",					sanic.innerHTML],			
	"seagull":					["Seagull",							seagull.innerHTML],	
	"shrek2":					["Shrek 2 Script",					shrek2script],
	"shrek":					["Shrek Script",					shrek],
	"shrek3":					["Shrek The Third Script",			shrek3],
	"suprisedBird":				["Suprised Bird",					bird.innerHTML],
	"theLegend27":				["TheLegend27 Script",				thelegend27],
	"yee":						["Yee",								yee.innerHTML]
}
for (i=0;i<aa.length;i++) {
	buttons.innerHTML+=`<button id="b_`+aa[i]+`">`+stuff[aa[i]][0]+`</button>`
}
window.onclick = function(event) {
	r=event.target.id.replace("b_","");
	if (r!="") {
		copy(stuff[r][1])
	}
}
