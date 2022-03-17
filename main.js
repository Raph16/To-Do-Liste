const mainForm = document.querySelector("form");
const liste = document.querySelector("ul");
const input = document.querySelector("form input");
let alleAufgaben = [];


mainForm.addEventListener("submit", (e) => {
    e.preventDefault();


    
    const text = input.value.trim();
    if (text !== "") {
        aufgabeHinzufügen(text);
        input.value = "";
    }
})


function aufgabeHinzufügen(text) {
    const aufgabe = { 
        text,
        id: Date.now()
    }
    
    listeAufgabenZeigen(aufgabe);  
}
function listeAufgabenZeigen(aufgabe) {
    
    const item = document.createElement("li");
    item.setAttribute('data-key', aufgabe.id);

    const input = document.createElement("input");
    input.setAttribute('type', 'checkbox');
    input.addEventListener("click", aufgabeErledigt);
    item.appendChild(input);
                                            
    function aufgabeErledigt(e) {
       e.target.parentNode.classList.toggle("endeDerAufgabe")
    }


    const txt = document.createElement("span");
    txt.innerText = aufgabe.text;
    item.appendChild(txt);

    const btn = document.createElement("button");
    btn.addEventListener("click", aufgabeLoeschen);

    function aufgabeLoeschen(aufgabe) {
        alleAufgaben.forEach(el => {
            if (aufgabe.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')) {
                el.remove();
                alleAufgaben = alleAufgaben.filter(li => li.dataset.key !== el.dataset.key);
                
            }
      })  
    }

       const img = document.createElement("img");
    img.setAttribute("src", 'ressources/fermer.svg');
    btn.appendChild(img);
    item.appendChild(btn);

    liste.appendChild(item);
    alleAufgaben.push(item);
}