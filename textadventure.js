var rl = require("readline-sync");

const question = rl.question("wil je de game spelen: [ja/nee]")

if (question == "ja"){
   console.log("het is jaar 2077, en je wilt de beste pokemon master worden")
} else if(question == "nee"){
  return;
}else{
  return;
}

const question2 = rl.question("je kunt een pokemon kiezen: pikachu of Pikachu ")

if (question2 == "pikachu"){
   console.log("je heb een pikachu nu!")
} else if(question2 == "Pikachu"){
    console.log("je krijgt een Pikachu gekrijgen!")
} else{
    return;
}

const question3 = rl.question("wat wil je doen: [teamrocket worden(type teamrocket)/treug naar school gaan(type school)/pokemon leugue trainer worden(type leugue)] ")

if (question3 == "teamrocket"){
    console.log("je wordt een nieuwe teamrocket member, je gaat nu een pokemon center robben in je eentje")
} else if (question3 == "leugue"){
    console.log("doordat je geld moet betalen om een afspraak te maken voor gym gevecht moet je geld verdienen")
} else if (question3 == "school"){
   console.log("je gaat naar huis en je leeft lang en nog geluukig, end1")
   return;
}


if (question3 == "teamrocket"){
    const teamrocket1 = rl.question("je heb alleen een lv5 pokemon, de bewaker heeft een lv30 nidoqueen[vechten of vluchten?]")
    if(teamrocket1 == "vechten") {
        console.log("de bewaker nidoqueen was sterk, in de begin van de gevecht heert nidoqueen geanvalt maar je pikachu is sneller en heeft de bewaker uitgeschakelt in een bliksemflits. missie voltooit")
    }else if(teamrocket1 == "vluchten"){
        console.log("je wilt gaan vluchten, maar dat was een foute keuze, de nidoqueen heeft een zwaard gemmakt uit de ground, je en je pikachu wordt allemaal gevangen, en dat was het verhaal. end2")
    }

}else if (question3 == "leugue"){
    const leugue1 = rl.question("na lange pokemon battles heb je genoeg geld verdient om een gymbattle te biginnen, maar doordat de pokemon center aangevallen wordt door team rocket is het gesloten: kies[wachten/vechten]")
    if(leugue1 == "vechten"){
        console.log("doodat je pikachu te zwak door pijn, verlies je tegen brock niet veel later ging je pikachu dood doordat de pokemon center dicht is en je geen geld hebt om items te kopen")
        console.log("end3")
        return;
    }else if (leugue1 == "wachten"){
        console.log("na een week wachten was je pikachu volletig goed, na een lange gevecht win je van brock. je krijg je eerste badge")
    }
}

if (question3 == "teamrocket"){
    const teamrocket2 = rl.question("na de gevecht krijg je meer beloning, na wat maanden is teamrocketbaas giovanni spoorloos. wat ben je van plan[(de belangrijke item stelen en weg rennen)run/(gaan nog steeds werken)werk]")
    if(teamrocket2 == "run") {
        console.log("je probeert de meest belangrijke dingen te stelen nadat je de base locatie heb gestuurtt online.maar teamrocket wist al dat dit kan gebeuren dus kon je bijna niet ontsnappen ")
        console.log("de belangrijkste item was een volledige witte steen uit een plek ver weg, het is gevonden in een oude gebouw en blijkt onverwoestbaar. je gaat naar unova om het uit te zoeken")
    }else if(teamrocket2 == "werk"){
        console.log("uiteindelijk besloot je toch niets te doen, en je werk veel harder.")
        console.log("maar team rocket is nog groter geworden, je gaat naar johoto en wordt een baas van een geheime base, waar je een gymleader wordt om als spion de rigion gaat overnemen. maar na een dag werk als gymleader vond je dat enn mystriouse man met ijs type pokemon teamrocket in paar dagen heeft verslagen en de nieuwe baas wordt. wat nu(gaan werken okal is er een nieuwe baas)werk/(ga teamrocket treugnemen)vecht ")
    }

}

if (question3 == "leugue"){
    const leugue3 = rl.question("na een lenge reis heb je uiteindelijk alle 8 badges, en 6 sterke pokemon. maar er is een nieuws over dat ssichien een legendary in een berg is door de bijzonder climaat[(tornament)battle/(legendary)zoeken")
    if(leugue3 == "battle") {
        console.log("je bent uiteindelijk campion geworden, maar blijkbaar heeft pokemons in opstand gekomen tegen mensen en je pokemon heeft je veraden en jou als pokemon gevangen in een human ball")
        console.log("einde4")
        return;
    }else if(leugue3 == "zoeken"){
        console.log("na onderzoek blijkt dat er een pokemon die mewtoe heet en alle mensen wilt vangen met een human ball, dus heb je mewtoe gevangen met een pokebal toen die niet oplet")
    }
}

if (question3 == "leugue"){
    const leugue3 = rl.question("nadat je mewtwo heb gevangen ben je de beste pokemon trainer geworden maar je hoorde dat andere pokemon wereld zijn en er is technology om daar te gaan(ga niet(niet/(ga wel)ga)")
        if(leugue3 == "ga") {
        console.log("je bent naarr andere wereld gegaan en er is nooit meer iets gegoord")
        console.log("einde5")
        return;
    }else if(leugue3 == "niet"){
        console.log("20 jaar later... op een van de andere dag was er een metor op aarde gevallen naar hoenn region. er leven geen organisme meer")
        console.log("einde6")
        return;
    }
}