import { Element, ElementId, ElementTxt, ElementIdTxt } from './classes/classes.js';

let header = new Element("header", "body");
header.createElement();

let h1 = new Element("h1", "header");
h1.createElement();
document.querySelector("h1").innerHTML = "NIEWIERNE PSY";

let h3 = new Element("h3", "header");
h3.createElement();
document.querySelector("h3").innerHTML = "nemo est dominus meus";


let nav = new Element("nav", "body");
nav.createElement();

let home = new ElementIdTxt("div", "nav", "home", "START");
home.createElement();

let about = new ElementIdTxt("div", "nav", "about", "O NAS");
about.createElement();

let games = new ElementIdTxt("div", "nav", "games", "GRY");
games.createElement();

let projects = new ElementIdTxt("div", "nav", "projects", "PROJEKTY");
projects.createElement();

let graphic = new ElementIdTxt("div", "nav", "graphic", "GRAFIK");
graphic.createElement();

let mainContainer = new ElementId("div", "body", "mainContainer");
mainContainer.createElement();

const path = 'https://szymekcendecki.github.io/NiewiernePsy/json/'

document.querySelector("#home").addEventListener("click", ()=>{
    fetch(path + 'home.json').then(response => response.json()).then(data => { 
        document.querySelector("#mainContainer").innerHTML = "";
        document.querySelector("#mainContainer").innerHTML = data.txt1;
     }).catch(error => console.error(error))
});

document.querySelector("#about").addEventListener("click", ()=>{
    fetch(path + 'about.json').then(response => response.json()).then(data => { 
        document.querySelector("#mainContainer").innerHTML = "";
        document.querySelector("#mainContainer").innerHTML = data.about;

    }).catch(error => console.error(error))
});

document.querySelector("#games").addEventListener("click", ()=>{
    fetch(path + 'games.json').then(response => response.json()).then(data => { 
        document.querySelector("#mainContainer").innerHTML = "";
               
        for(let i = 1; i<Object.values(data).length - 1; i++){
            const element = document.createElement('p');
            element.innerHTML = `<a href="${Object.values(data)[i]}" target="_blank">${Object.keys(data)[i]}</a>`;
            document.querySelector('#mainContainer').appendChild(element);
        }
    }).catch(error => console.error(error))
});

document.querySelector("#projects").addEventListener("click", ()=>{
    fetch(path + 'projects.json').then(response => response.json()).then(data => { 
        document.querySelector("#mainContainer").innerHTML = "";
               
        for(let i = 1; i<Object.values(data).length - 1; i++){
            const element = document.createElement('p');
            element.innerHTML = `<a href="${Object.values(data)[i]}" target="_blank">${Object.keys(data)[i]}</a>`;
            document.querySelector('#mainContainer').appendChild(element);
        }
    }).catch(error => console.error(error))
});

document.querySelector("#graphic").addEventListener("click", ()=>{
    fetch(path + 'graphic.json').then(response => response.json()).then(data => { 
        document.querySelector("#mainContainer").innerHTML = "";

        for(let i = 1; i<Object.values(data).length; i++){
            const element = document.createElement('p');
            element.innerHTML = `${Object.values(data)[i]}`;
            document.querySelector('#mainContainer').appendChild(element);
        }

        let p = document.createElement("p");
        p.innerHTML = "Stream z 23 maja 2020 z Neverwinter Nights został usunięty. Ponoć zostały naruszone czyjeś prawa autorskie. Niewierne Psy nie maja pojęcia w jaki sposób to się mogło stać. Życie. W miejsce Neverwiter Nights będzie teraz Total War - Napoleon. Zobaczym jak to wyjdzie.";
        document.querySelector('#mainContainer').appendChild(p);
        

    }).catch(error => console.error(error))
});

