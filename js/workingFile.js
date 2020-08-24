
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


fetch('./json/test.json').then(response => response.json()).then(data => { 

    console.log(data.test);

}).catch(error => console.error(error))


fetch('./json/polish.json').then(response => response.json()).then(data => { 

    console.log(data);

}).catch(error => console.error(error))

fetch('./json/english.json').then(response => response.json()).then(data => { 

    console.log(data);

}).catch(error => console.error(error))
