
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



let allP = document.querySelectorAll("p");

var polish =["Nazwa studia wzięła się od pewnej historii, z próbą wynajęcia pokoju w Warszawie. Krótko rzecz ujmując, założycielowi studia pokój nie został wynajęty, gdyż... problemem był ateizm owego założyciela, a to było problematyczne dla osoby chcącej wynająć pokój (historia jak najbardziej autentyczna). Data założenia tego nieoficjalnego studia to... No właśnie, z tym jest drobny kłopot, gdyż delikatnie zaginęła ta data w mrokach historii. Dla uproszczenia trzeba będzie założyć, iż oficjalnie powstało tego samego co utworzenie fanpage na fejsie (13 czerwca 2016). A nieoficjalnie to musiało być to trochę wcześniej (tak się domyślam po pierwszych postach). Od początku w planach studia było tworzenie gier pod przeglądarkę oraz nauka programowania (html, js, css). 25 stycznia studio rozpoczęło także streamowanie gier. Na pierwszy ogień poszły trzy gry: Eve Online, Neverwinter Nights oraz World of Tanks. Grafik streamów w zakładce GRAFIK.", "Piekło z gwiazd", "Piracki rejs", "Uwzględniono tylko grywalne wersje gier.", "Biblioteka SCSS", "Polityczny Atlas Świata 1985", "Gry streamowane są na twitch.tv, pod nickiem Krupik Hopsas. Na tym kanale znajduje się również aktualny harmonogram streamów."];

for(let i=0; i<polish.length; i++){
    allP[i].innerHTML = polish[i];
    console.log(polish[i]);
}


console.log(allP);