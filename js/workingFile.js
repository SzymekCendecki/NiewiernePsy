import { Element } from './classes/classes.js';

let header = new Element("header", "body");
header.createElement();
let h1 = new Element("h1", "header");
h1.createElement();
document.querySelector("h1").innerHTML = "NIEWIERNE PSY";


let nav = new Element("nav", "body");
nav.createElement();


let about = new Element("div", "nav");
about.createElement();
document.querySelector("nav > div:nth-child(1)").innerHTML = "O NAS";

document.querySelector("nav > div:nth-child(1)").addEventListener("click", ()=>{
    console.log("działa");
});

let games = new Element("div", "nav");
games.createElement();
document.querySelector("nav > div:nth-child(2)").innerHTML = "GRY";

let graphic = new Element("div", "nav");
graphic.createElement();
document.querySelector("nav > div:nth-child(3)").innerHTML = "GRAFIK";

