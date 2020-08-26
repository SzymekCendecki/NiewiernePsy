
document.querySelector("#aboutBtn").addEventListener("click", ()=>{

      
});

document.querySelector("#gamesBtn").addEventListener("click", ()=>{

});

document.querySelector("#programsBtn").addEventListener("click", ()=>{

});

document.querySelector("#streamBtn").addEventListener("click", ()=>{

});

document.querySelector("#contactBtn").addEventListener("click", ()=>{

});

let attr = document.querySelector("#about").getAttribute('id');
console.log(attr);

let attr2 = document.querySelector("#about").getAttribute('class');
console.log(attr2);



let allP = document.querySelectorAll("p");

var polishBTN = ["o nas", "gry","programy", "stream", "kontakt"];

var polishTXT =["Nazwa studia wzięła się od pewnej historii, z próbą wynajęcia pokoju w Warszawie. Krótko rzecz ujmując, założycielowi studia pokój nie został wynajęty, gdyż... problemem był ateizm owego założyciela, a to było problematyczne dla osoby chcącej wynająć pokój (historia jak najbardziej autentyczna). Data założenia tego nieoficjalnego studia to... No właśnie, z tym jest drobny kłopot, gdyż delikatnie zaginęła ta data w mrokach historii. Dla uproszczenia trzeba będzie założyć, iż oficjalnie powstało tego samego co utworzenie fanpage na fejsie (13 czerwca 2016). A nieoficjalnie to musiało być to trochę wcześniej (tak się domyślam po pierwszych postach). Od początku w planach studia było tworzenie gier pod przeglądarkę oraz nauka programowania (html, js, css). 25 stycznia studio rozpoczęło także streamowanie gier. Na pierwszy ogień poszły trzy gry: Eve Online, Neverwinter Nights oraz World of Tanks. Grafik streamów w zakładce GRAFIK.", "Piekło z gwiazd", "Piracki rejs", "Uwzględniono tylko grywalne wersje gier.", "Biblioteka SCSS", "Polityczny Atlas Świata 1985", "Gry streamowane są na twitch.tv, pod nickiem Krupik Hopsas. Na tym kanale znajduje się również aktualny harmonogram streamów."];

for(let i=0; i<polishTXT.length; i++){
    allP[i].innerHTML = polishTXT[i];
    console.log(polishTXT[i]);
}


var englishBTN = ["about us", "games", "programs", "stream", "contact"];

var englishTXT= ["The name of the studio comes from a story about an attempt to rent a room in Warsaw. In short, the room was not rented to the founder of the studio because ... the atheism of that founder was a problem, and it was problematic for a person who wanted to rent a room (the most authentic story). The date of establishing this unofficial studio is ... Exactly, there is a slight problem with that, as this date has been slightly lost in the darkness of history. For the sake of simplicity, it will be necessary to assume that 'officially' was the same as the creation of the fanpage on Facebook (June 13, 2016). And unofficially, it had to be a little earlier (I guess after the first posts). From the beginning, the studio's plans were to create browser games and learn programming (html, js, css). On January 25, the studio also began streaming games. Three games went first: Eve Online, Neverwinter Nights and World of Tanks. The stream schedule in the 'GRAFIK' tab.", "Hell of the stars", "Pirate cruise", "Only playable versions of the games are included.", "SCSS library.", "Political World Atlas '85", "Current stream schedule:", "friday: Eve Online: start 7pm", "saturday: Civilisation V: start 7pm", "sundy: Eve Online 5pm - 8pm", "The games are streamed on twitch.tv under the nickname Krupik Hopsas. This channel also has the current stream schedule."];