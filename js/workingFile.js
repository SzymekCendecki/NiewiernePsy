import { Element, ElementId, ElementIdTxt } from './classes/classes.js';

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

let graphic = new ElementIdTxt("div", "nav", "graphic", "GRAFIK");
graphic.createElement();

document.querySelector("#about").addEventListener("click", ()=>{
    console.log("działa");
});

document.querySelector("#games").addEventListener("click", ()=>{
    console.log("działa");
});

document.querySelector("#graphic").addEventListener("click", ()=>{
    console.log("działa");
});

let mainContainer = new ElementId("div", "body", "mainContainer");
mainContainer.createElement();