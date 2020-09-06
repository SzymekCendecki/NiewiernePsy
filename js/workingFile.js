let polishTXT = {
    "languageBtn":"en", 
    "aboutTxt":"Nazwa studia wzięła się od pewnej historii, z próbą wynajęcia pokoju w Warszawie. Krótko rzecz ujmując, założycielowi studia pokój nie został wynajęty, gdyż... problemem był ateizm owego założyciela, a to było problematyczne dla osoby chcącej wynająć pokój (historia jak najbardziej autentyczna). Data założenia tego nieoficjalnego studia to... No właśnie, z tym jest drobny kłopot, gdyż delikatnie zaginęła ta data w mrokach historii. Dla uproszczenia trzeba będzie założyć, iż oficjalnie powstało tego samego co utworzenie fanpage na fejsie (13 czerwca 2016). A nieoficjalnie to musiało być to trochę wcześniej (tak się domyślam po pierwszych postach). Od początku w planach studia było tworzenie gier pod przeglądarkę oraz nauka programowania (html, js, css). 25 stycznia studio rozpoczęło także streamowanie gier. Na pierwszy ogień poszły trzy gry: Eve Online, Neverwinter Nights oraz World of Tanks. Grafik streamów w zakładce GRAFIK.",
    "hellP":"Piekło z Gwiazd",
    "cruiseP":"Piracki Rejs",
    "gamesDescription":"Uwzględniono tylko grywalne wersje gier.",
    "converterP":"Konwerter",
    "converter2P":"Konwerter 2",
    "scssLibraryP":"SCSS lib.",
    "atlasP":"Atlas '85", 
    "programsDescription":"Programy do konwersji pikseli na procenty, biblioteka SCSS oraz Polityczny Atlas Świata '85.",
    "streamTxt":"Gry streamowane są na twitch.tv, pod nickiem Krupik Hopsas. Na tym kanale znajduje się również aktualny harmonogram streamów.",
    "contact":"kontakt: krupik@autograf.pl"
}

let englishTXT = {
    "languageBtn":"pl", 
    "aboutTxt":"The name of the studio comes from a story about an attempt to rent a room in Warsaw. In short, the room was not rented to the founder of the studio because ... the atheism of that founder was a problem, and it was problematic for a person who wanted to rent a room (the most authentic story). The date of establishing this unofficial studio is ... Exactly, there is a slight problem with that, as this date has been slightly lost in the darkness of history. For the sake of simplicity, it will be necessary to assume that 'officially' was the same as the creation of the fanpage on Facebook (June 13, 2016). And unofficially, it had to be a little earlier (I guess after the first posts). From the beginning, the studio's plans were to create browser games and learn programming (html, js, css). On January 25, the studio also began streaming games. Three games went first: Eve Online, Neverwinter Nights and World of Tanks.",
    "hellP":"Hell of the stars",
    "cruiseP":"Pirate Cruise",
    "gamesDescription":"Only playable versions of the games are included.",
    "converterP":"Converter",
    "converter2P":"Converter 2",
    "scssLibraryP":"SCSS library",
    "atlasP":"Atlas '85", 
    "programsDescription":"Pixel to percentage converters, SCSS library and Political World Atlas '85.",
    "streamTxt":"The games are streamed on twitch.tv under the nickname Krupik Hopsas. This channel also has the current stream schedule.",
    "contact":"contact: krupik@autograf.pl"
}

document.querySelector("#languageBtn").addEventListener("click", ()=>{
    let langTxt = document.querySelector("#languageBtn").textContent;
   
    switch (langTxt) {
        case 'en':

        document.querySelector("#languageBtn").innerHTML = "pl";
         
        for(let i = 0; i<Object.keys(englishTXT).length; i++){
            document.querySelector("#" + Object.keys(englishTXT)[i]).innerHTML = Object.values(englishTXT)[i];
        }
  
        break;

        case 'pl':

        document.querySelector("#languageBtn").innerHTML = "en";
              
        for(let i = 0; i<Object.keys(polishTXT).length; i++){
            document.querySelector("#" + Object.keys(polishTXT)[i]).innerHTML = Object.values(polishTXT)[i];
        }
   
        break;

    }
})


