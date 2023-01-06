 var Verb = function(name,root,auxiliary,strength,presentStyle,imperfektStyle,presentStrong,imperfektStrong,presentPerfektStyle){
	 this.name = name;
	 this.root = root;
	 this.auxiliary  = auxiliary ;
	 this.strength  = strength ;
	 this.presentStyle  = presentStyle ;
	 this.imperfektStyle  = imperfektStyle ;
	 this.presentStrong = presentStrong ;
	 this.imperfektStrong  = imperfektStrong ;
 	 this.presentPerfektStyle  = presentPerfektStyle ;
   }

var explanation = "" 
var explanation2 = "" 

// Auziliary: Sein or Haben. 

var AuxiliaryRules = "- 'Sein' is the Auxiliary Verb for instransitive verbs (no direct object) that express movement and a change of place, or a change of state. Bleiben, sein, werden and a few more verbs also use it."

// --- Tenses
// Present

var presentGehen = [["e","st","t","en","t","en"],"- Gehen: Regular ending"]
var presentSitzen = [["e","t","t","en","t","en"],"- Sitzen: If the infinitive stem ends in –s, –ß, –x, or –z, the  s of the du-ending is omitted"]
var presentFinden = [["e","est","et","en","et","en"],"- Finden: If the infinitive stem ends in –d or –t, or if it ends in -m or –n preceded by a consonant other than l or r, to facilitate pronunciation an e is inserted between the infinitive stem and personal ending in the du, er/sie/es, and ihr forms."]
var presentHandeln = [["e","t","t","n","t","n"],"- Handeln: If the infinitive ends in just –n rather than –en, then the personal ending of the wir and Sie/sie forms is simply –n. In speech, sometimes the e in the ich-form is omitted."]
var presentReden = [["","st","t","n","t","n"],"- Reden: If the infinitive stem ends in -e, then the first 'e' in the ending is not repeated"]

//Imperfekt
var imperfektWeak = [["te","test","te","ten","tet","ten"],""]
var imperfektStrong = [["ete","etest","ete","eten","etet","eten"],"- Verbs whose stem ends in -d, -t, or -m or -n following another consonant add an additional -e- before an -te, -test, or -tet ending"]
var imperfektGehen = [["","st","","en","t","en"],"- Verbs with a modified stem in Imperfekt often remove the -te from the ending"]
var imperfektEszett = [["","est","","en","t","en"],"- Strong Verbs with roots that end in 'ß' add an 'e' between the root and the -du 'est' "]
var imperfektFinden = [["","st","","en","et","en"],"- ??"]


//UNSTABLE - CHECK IF EVERYTHING BREAKS
var haben = new Verb("haben","hab","","strong",presentGehen,imperfektWeak,["habe","hast","hat","haben","habt","haben"],"","gehabt")
var sein = new Verb("sein","hab","","strong",presentGehen,imperfektGehen,["bin","bist","ist","sind","seid","sind"],"","gewesen")




function ConjugationTest(){
	
	verbRootArray = [
 backen = new Verb("backen","back",haben,"strong",presentGehen,imperfektGehen,[],"buk"),
 beginnen = new Verb("beginnen","beginn",haben,"strong",presentGehen,imperfektGehen,[],"begann","begonnen"),
 bleiben = new Verb("bleiben","bleib",sein,"strong",presentGehen,imperfektGehen,[],"blieb",""),
 essen = new Verb("essen","ess",haben,"strong",presentGehen,imperfektEszett,["esse","isst","iss"],"aß","gegessen"),
 fahren = new Verb("fahren","fahr",sein,"strong",presentGehen,imperfektGehen,["fahre","fährst","fährt"],"fuhr",""),
 fallen = new Verb("fallen","fall",sein,"strong",presentGehen,imperfektGehen,["fahre","fährst","fährt"],"fiel",""),
 fangen = new Verb("fangen","fang",haben,"strong",presentGehen,imperfektGehen,["fange","fängst","fängt"],"fing",""),
 finden = new Verb("finden","find",haben,"strong",presentFinden,imperfektFinden,[],"fand","gefunden"),
 geben = new Verb("geben","geb",haben,"strong",presentGehen,imperfektGehen,["gebe","gibst","gibt"],"gab",""),
 gehen = new Verb("gehen","geh",sein,"strong",presentGehen,imperfektGehen,[],"ging","gegangen"),
 haben = new Verb("haben","hab",haben,"strong",presentGehen,imperfektWeak,["habe","hast","hat","haben","habt","haben"],"hat","gehabt"),
 reiben = new Verb("reiben","reib",haben,"strong",presentGehen,imperfektGehen,[],"rieb",""),
 sein = new Verb("sein","hab",sein,"strong",presentGehen,imperfektGehen,["bin","bist","ist","sind","seid","sind"],"war","gewesen"), 
 singen = new Verb("singen","sing",haben,"strong",presentGehen,imperfektGehen,[],"sang","gesungen"),
 sitzen = new Verb("sitzen","sitz",haben,"strong",presentSitzen,imperfektEszett,[],"saß","gesessen"),
 sprechen = new Verb("sprechen","sprech",haben,"strong",presentGehen,imperfektGehen,["spreche","sprichst","spricht"],"sprach","gesprochen"),
 stoßen = new Verb("stoßen","stoß",sein,"strong",presentSitzen,imperfektEszett,[],"stieß",""),
 treffen = new Verb("treffen","treff",haben,"strong",presentGehen,imperfektGehen,[],"traf","getroffen"),
 vergessen = new Verb("vergessen","vergess",haben,"strong",presentGehen,imperfektEszett,["vergesse","vergisst","vergiss"],"vergaß"),
 denken = new Verb("denken","denk",haben,"strong",presentGehen,imperfektWeak,[],"dach","gedacht"),


//  = new Verb("","",haben,"strong",presentGehen,imperfektGehen,[],"",""),






 // Weak Verbs
 lernen = new Verb("lernen","lern",haben,"weak",presentGehen,imperfektWeak,[],""),
 reden = new Verb("reden","rede",haben,"weak",presentReden,imperfektWeak,[],""),
 spielen  = new Verb("spielen","spiel",haben,"weak",presentGehen,imperfektWeak,[],""),
 arbeiten = new Verb("arbeiten","arbeite",haben,"weak",presentReden,imperfektWeak,[],""),
 fragen = new Verb("fragen","frag",haben,"weak",presentGehen,imperfektWeak,[],""),
 machen = new Verb("machen","mach",haben,"weak",presentGehen,imperfektWeak,[],""),
 sagen = new Verb("sagen","sag",haben,"weak",presentGehen,imperfektWeak,[],""),
 kaufen = new Verb("kaufen","kauf",haben,"weak",presentGehen,imperfektWeak,[],""),
 wandern = new Verb("wandern","wander",sein,"weak",presentGehen,imperfektWeak,[],""),

 
 leben = new Verb("leben","leb",haben,"weak",presentGehen,imperfektWeak,[],"")
]

verbForm = ""

//generates a pronoun
var pronounList = [["First Person Singular","I","ich "],["Second Person Singular","You(sing)","du "],["Third Person Singular","He","er "],["First Person Plural","We","wir "],["Second Person Plural","You(pl)","ihr "],["Third Person Plural","They","sie "]]
var pronounNumber = Math.floor(Math.random()*pronounList.length)
var pronounChosen = pronounList[pronounNumber]

//generates a verb root
var chosenVerb = verbRootArray[Math.floor(Math.random()*verbRootArray.length)]
//var chosenVerb = sprechen


//generates a tense
var chosenTenseNumber = Math.floor(Math.random()*3) 
//var chosenTenseNumber = 0

// Present - adds forms for Du and Er when strong Verbs change the vowels
if (chosenTenseNumber === 0){ chosenTense = chosenVerb.presentStyle, tenseName = "Present"
console.log(chosenVerb)
	if(chosenVerb.presentStrong[pronounNumber]){verbForm = chosenVerb.presentStrong[pronounNumber], explanation = "- With the Pronoun '" + pronounChosen[2] + "', this Verb changes to '" + chosenVerb.presentStrong[pronounNumber] +"'" 	}
	else{explanation2 = chosenVerb.presentStyle[1]}
	}

// Imperfekt - changes the root for Strong Verbs	
if (chosenTenseNumber === 1){ chosenTense = chosenVerb.imperfektStyle, tenseName = "Imperfect"
explanation2 = chosenTense[1]
	if(chosenVerb.imperfektStrong){chosenVerb.root = chosenVerb.imperfektStrong; explanation += ("- This verb changes its root to '" + chosenVerb.imperfektStrong + "' in Imperfect")}
	else{explanation += "- This Verb uses its regular root, '" + chosenVerb.root + "', in Imperfect"}
		}

// Present Perfect - TBD
if (chosenTenseNumber === 2){ chosenTense = chosenVerb.imperfektStyle, tenseName = "Present Perfect"
console.log(chosenVerb.auxiliary)
 if(chosenVerb.auxiliary.name === "sein"){explanation += AuxiliaryRules}
	if(chosenVerb.strength === "strong" && chosenVerb.presentPerfektStyle){verbForm = chosenVerb.auxiliary.presentStrong[pronounNumber] + " " + chosenVerb.presentPerfektStyle; explanation2 = ("- This Verb has a special Participle - " + chosenVerb.presentPerfektStyle )}
	else if(chosenVerb.strength === "strong"){verbForm = chosenVerb.auxiliary.presentStrong[pronounNumber] + " ge" + chosenVerb.root + "en"; explanation2 = "- Strong Verbs in Present Perfect usually end in -en"}
	else if(chosenVerb.strength === "weak"){verbForm = chosenVerb.auxiliary.presentStrong[pronounNumber] + " ge" + chosenVerb.root + "t"; explanation2 =  "- Weak Verbs in Present Perfect end in -t"}
}



if(verbForm === ""){verbForm = chosenVerb.root + chosenTense[0][pronounNumber] }

/*
var answer = prompt(pronounChosen[0] + ", " + chosenVerb.name + " (" + chosenVerb.strength +  "), " + tenseName)

if (answer == pronounChosen[2] + verbForm){alert("Correct!")}

document.getElementById("sentenceBox").innerHTML = answer + "  ||  " + pronounChosen[2] + verbForm
*/
document.getElementById("testBox").innerHTML = pronounChosen[0] + ", " + chosenVerb.name + " (" + chosenVerb.strength +  "), " + tenseName 
document.getElementById("sentenceBox").innerHTML =  pronounChosen[2] + verbForm
document.getElementById("Box1").innerHTML = explanation
document.getElementById("Box2").innerHTML = explanation2
explanation = ""
explanation2 = ""
}


function DeclinationsTest(){}
	
 var Preposition = function(name,translation,type){
	 this.name = name;
	 this.translation = translation;
	 this.type = type;
 }

function DeclinationsTest(){
	
 var Word = function(name,translation,gender){
	 this.name = name;
	 this.translation = translation;
	 this.gender = gender;
 }

prepositionsList = [
 aus = new Preposition("preposition","aus","dativ","from"),
// bei = new Preposition("preposition","bei","dativ","at"),
 mit = new Preposition("preposition","mit","dativ","with"),
 gegenüber = new Preposition("preposition","gegenüber","dativ","opposite to"),
// nach = new Preposition("preposition","nach","dativ","after"),
 seit = new Preposition("preposition","seit","dativ","since"),
 von = new Preposition("preposition","von","dativ","of"),
 zu = new Preposition("preposition","zu","dativ","to"),
// bis = new Preposition("preposition","bis","accusativ","until"),
 durch = new Preposition("preposition","durch","accusativ","across"),
// entlang = new Preposition("preposition","entlang","accusativ","along"),
 um = new Preposition("preposition","um","accusativ","at"),
// für = new Preposition("preposition","für","accusativ","for"),
// gegen = new Preposition("preposition","gegen","accusativ","against"),
// ohne = new Preposition("preposition","ohne","accusativ","without"),
// an = new Preposition("preposition","an","both","on"),
// auf = new Preposition("preposition","auf","both","upon"),
 hinter = new Preposition("preposition","hinter","both","behind"),
 unter = new Preposition("preposition","unter","both","under"),
 inn = new Preposition("preposition","in","both","in"),
// neben = new Preposition("preposition","neben","both","next to"),
 zwischen = new Preposition("preposition","zwischen","both","between")
	]
	
var wordList = [

hund = new Word("noun","hund","dog","masc"),
katze = new Word("noun","katze","cat","fem"),
bruder = new Word("noun","bruder","brother","masc"),
madchen = new Word("noun","madchen","girl","neuter"),


]	
	
	
	
	
} 
