copy = function(r) {
	d.style.width="450px"
	R=d.innerHTML
	d.innerHTML="<button id='backbutton'>Back</button><textarea>"+r+"</textarea>"
}
aa=["annoyingDog","attackHelicopter","ayyLmao","banHammer","beeMovie","bigSmoke","bob","dealWithIt",
	"doge","pacertest","hammerAndSickle","leToucan","mario",
	"marioJumping","marioPooping","megaman","minion","navySeals",'obamaNotBadBig',
	"obamaNotBadSmall","patrickStar","pepe","ratatouille","sanicHegehog",
	"seagull","shrek2","shrek","shrek3","skeleton","suprisedBird","theLegend27",
	"trollFace","yee","yoshi"];
stuff={
	"annoyingDog":				["Annoying Dog",					annoyingdog.innerHTML],
	"attackHelicopter":			["Attack Helicopter",				helicopter],
	"ayyLmao":					["Ayy Lmao",						ayylmao.innerHTML],
	"banHammer":				["Ban Hammmer",						banhammer.innerHTML],
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
	"megaman":					["Megaman",							megaman.innerHTML],
	"minion":					["Minion",							minion.innerHTML],
	"navySeals":				["Navy Seals Copypasta",			navyseal],
	'obamaNotBadBig':			["Obama Not Bad (Big)",				obamalarge.innerHTML],
	"obamaNotBadSmall":			["Obama Not Bad (Small)",			obamasmall.innerHTML],
	"pepe":						["Pepe The Frog",					pepe.innerHTML],
	"patrickStar":				["Patrick Star",					patrick.innerHTML],
	"ratatouille":				["Ratatouille Script",				rat],
	"sanicHegehog":				["Sanic Hegehog",					sanic.innerHTML],			
	"seagull":					["Seagull",							seagull.innerHTML],	
	"shrek2":					["Shrek 2 Script",					shrek2script],
	"shrek":					["Shrek Script",					shrek],
	"shrek3":					["Shrek The Third Script",			shrek3],
	"skeleton":					["Spooky Skeleton",					skeleton.innerHTML],
	"suprisedBird":				["Suprised Bird",					bird.innerHTML],
	"theLegend27":				["TheLegend27 Script",				thelegend27],
	"trollFace":				["Troll Face",						trollface.innerHTML],
	"yee":						["Yee",								yee.innerHTML],
	"yoshi":					["Yoshi",							yoshi.innerHTML]
}
for (i=0;i<aa.length;i++) {
	buttons.innerHTML+=`<button id="b_`+aa[i]+`">`+stuff[aa[i]][0]+`</button>`
}
window.onclick = function(event) {
	r=event.target.id.replace("b_","");
	console.log(r)
	if (r!="" && r!="backbutton") {
		copy(stuff[r][1])
	}
	if (r=="backbutton") {
		d.innerHTML=R
		d.style.width="350px"
	}
}
