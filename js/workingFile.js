var idBtn = ["aboutBtn", "gamesBtn", "programsBtn", "streamBtn"];

var id = ["about", "games", "programs", "stream"];

var polishBtn = ["o nas", "gry", "programy", "stream"];

var polishTXT =["Nazwa studia wzięła się od pewnej historii, z próbą wynajęcia pokoju w Warszawie. Krótko rzecz ujmując, założycielowi studia pokój nie został wynajęty, gdyż... problemem był ateizm owego założyciela, a to było problematyczne dla osoby chcącej wynająć pokój (historia jak najbardziej autentyczna). Data założenia tego nieoficjalnego studia to... No właśnie, z tym jest drobny kłopot, gdyż delikatnie zaginęła ta data w mrokach historii. Dla uproszczenia trzeba będzie założyć, iż oficjalnie powstało tego samego co utworzenie fanpage na fejsie (13 czerwca 2016). A nieoficjalnie to musiało być to trochę wcześniej (tak się domyślam po pierwszych postach). Od początku w planach studia było tworzenie gier pod przeglądarkę oraz nauka programowania (html, js, css). 25 stycznia studio rozpoczęło także streamowanie gier. Na pierwszy ogień poszły trzy gry: Eve Online, Neverwinter Nights oraz World of Tanks. Grafik streamów w zakładce GRAFIK.", "Audaces Remastered", "Audaces Powerfull", "Piekło z gwiazd", "Piracki rejs", "Simple Game", "Simple Simple Game 2", "Uwzględniono tylko grywalne wersje gier.", "converter", "converter 2", "Biblioteka SCSS", "Polityczny Atlas Świata 1985", "Gry streamowane są na twitch.tv, pod nickiem Krupik Hopsas. Na tym kanale znajduje się również aktualny harmonogram streamów.", "footer"];

var englishBtn = ["about us", "games", "programs", "stream"];

// 0 - about, 1 - remastered, 2 - powerfull, 3 - hell, 4 - pirate, 5 - simple, 6-simple2, 7 game Desc, 8 - cinverter, 9 - conveeter 2 , 10 - scss, 11 - atlas, 12 stream, 13 - footer

var englishTXT= ["The name of the studio comes from a story about an attempt to rent a room in Warsaw. In short, the room was not rented to the founder of the studio because ... the atheism of that founder was a problem, and it was problematic for a person who wanted to rent a room (the most authentic story). The date of establishing this unofficial studio is ... Exactly, there is a slight problem with that, as this date has been slightly lost in the darkness of history. For the sake of simplicity, it will be necessary to assume that 'officially' was the same as the creation of the fanpage on Facebook (June 13, 2016). And unofficially, it had to be a little earlier (I guess after the first posts). From the beginning, the studio's plans were to create browser games and learn programming (html, js, css). On January 25, the studio also began streaming games. Three games went first: Eve Online, Neverwinter Nights and World of Tanks. The stream schedule in the 'GRAFIK' tab.", "Audaces Remastered", "Audaces Powerfull", "Hell of the stars", "Pirate cruise", "Simple Game", "Simple Game 2", "Only playable versions of the games are included.", "converter", "converter 2", "SCSS library.", "Political World Atlas '85", "The games are streamed on twitch.tv under the nickname Krupik Hopsas. This channel also has the current stream schedule.", "footer"];

let allP = document.querySelectorAll('p');
let langTxt = document.querySelector("#languageBtn").textContent;
   
switch (langTxt) {
 case 'english':

     document.querySelector("#languageBtn").innerHTML = "polski";
   
     for(let i = 0; i<idBtn.length; i++){
         document.querySelector("#" + idBtn[i]).innerHTML = englishBtn[i];
     }

     for(let i = 0; i<allP.length; i++){
         allP[i].innerHTML = englishTXT[i];
     }
   
     break;

 case 'polski':

     document.querySelector("#languageBtn").innerHTML = "english";

     for(let i = 0; i<idBtn.length; i++){
         document.querySelector("#" + idBtn[i]).innerHTML = polishBtn[i];
     }

     for(let i = 0; i<allP.length; i++){
         allP[i].innerHTML = polishTXT[i];
     }
    
     break;

}



document.querySelector("#aboutBtn").addEventListener("click", ()=>{   
    
    for(let i = 0; i <id.length; i++){
        if (document.querySelector("#" + id[i]).getAttribute('class') === "displayBlock"){
            document.querySelector("#" + id[i]).classList.remove('displayBlock');
            document.querySelector("#" + id[i]).classList.add('displayNone');
        }
    }
   
    document.querySelector("#about").classList.remove("displayNone");
    document.querySelector("#about").classList.add("displayBlock");
         
});

document.querySelector("#gamesBtn").addEventListener("click", ()=>{
    let langTxt = document.querySelector("#languageBtn").textContent;

    for(let i = 0; i <id.length; i++){
        if (document.querySelector("#" + id[i]).getAttribute('class') === "displayBlock"){
            document.querySelector("#" + id[i]).classList.remove('displayBlock');
            document.querySelector("#" + id[i]).classList.add('displayNone');
        }
    }
   
    document.querySelector("#games").classList.remove("displayNone");
    document.querySelector("#games").classList.add("displayBlock");

});

document.querySelector("#programsBtn").addEventListener("click", ()=>{
    for(let i = 0; i <id.length; i++){

        if (document.querySelector("#" + id[i]).getAttribute('class') === "displayBlock"){
            document.querySelector("#" + id[i]).classList.remove('displayBlock');
            document.querySelector("#" + id[i]).classList.add('displayNone');
        }
     
    }
   
    document.querySelector("#programs").classList.remove("displayNone");
    document.querySelector("#programs").classList.add("displayBlock");


});

document.querySelector("#streamBtn").addEventListener("click", ()=>{
    for(let i = 0; i <id.length; i++){

        if (document.querySelector("#" + id[i]).getAttribute('class') === "displayBlock"){
            document.querySelector("#" + id[i]).classList.remove('displayBlock');
            document.querySelector("#" + id[i]).classList.add('displayNone');
        }
     
    }
   
    document.querySelector("#stream").classList.remove("displayNone");
    document.querySelector("#stream").classList.add("displayBlock");
});




document.querySelector("#languageBtn").addEventListener("click", ()=>{

    let langTxt = document.querySelector("#languageBtn").textContent;

    
   switch (langTxt) {
    case 'english':
   
        document.querySelector("#languageBtn").innerHTML = "polski";
      
        for(let i = 0; i<idBtn.length; i++){
            document.querySelector("#" + idBtn[i]).innerHTML = englishBtn[i];
        }

        for(let i = 0; i<allP.length; i++){
            allP[i].innerHTML = englishTXT[i];
        }
      
        break;

    case 'polski':
 
        document.querySelector("#languageBtn").innerHTML = "english";

        for(let i = 0; i<idBtn.length; i++){
            document.querySelector("#" + idBtn[i]).innerHTML = polishBtn[i];
        }

        for(let i = 0; i<allP.length; i++){
            allP[i].innerHTML = polishTXT[i];
        }
       
        break;

}
})





