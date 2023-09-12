


/*
function openMenu(evt, menu) {
    let i, contentmenu, menulinks;
    
    contentmenu = document.querySelectorAll(".contentmenu");

    for (i = 0; i < contentmenu.length; i++) {
        contentmenu[i].style.display = "none";
    }


    menulinks = document.querySelectorAll(".menulinks");
    for (i = 0; i < menulinks.length; i++) {
        menulinks[i].clasName = menulinks[i].clasName.replace(" active", "");
    }

    document.document.getElementById(menu).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
*/

/*
function openMenu(evt, cityName) {
    //let i, contentmenu, menulinks;
    
    let containerMenu = document.getElementsByClassName("containerMenu");

    for (let i = 0; i < contentmenu.length; i++) {
        containerMenu[i].style.display = "none";
    }

    let menulinks = document.getElementsByClassName("menulinks");

    for (let i = 0; i < menulinks.length; i++) {
        menulinks[i].className = menulinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
*/

/*
function openTools(evt, cityName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
   
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();
*/

/*
function openTools(evt, tabelas) {


    let tabcontent = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let menulink = document.getElementsByClassName("menulink");
    
    for (let i = 0; i < menulink.length; i++) {
        menulink[i].className = menulink[i].className.replace(" active", "");
    }

    document.getElementById(tabelas).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("openDefault").click();
*/

/*
const openTab = (evt, openCyt) => {

   let tabconteiner = document.getElementsByClassName("tabconteiner");
    for (i = 0; i < tabconteiner.length; i++) {
        tabconteiner[i].style.display = 'none';
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(openCyt).style.display = "block";
    evt.currentTarget.className += " active";



}

document.getElementById("openDefault").click();


function mostrarMensagem() {
    alert("Botão clicado!");
}

// Agora, acionaremos o clique programaticamente
document.getElementById("openDefault").click();




function compressCode() {
    let compactar = document.getElementById('compactar').value;
    let textoCompactado = compactar.replace(/\s+/g, '');
    document.getElementById('outputCompact').textContent = textoCompactado; 
}

function cleaCompressCode() {
    document.getElementById('compactar').value = '';
    document.getElementById('outputCompact').textContent = '';
}
*/


/*

function tablinks(evt, openCity) {
    let tabCity = document.getElementsByClassName('tabCity');
    for (let i = 0; i < tabCity.length; i++) {
        tabCity[i].style.display = "none"
    }

    let tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", " ");
    }

    document.getElementById(openCity).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


let image = document.querySelector("#image");
let imageLink = image.getAttribute('src');


alert(imageLink)
*/

/*
// Função para lidar com o clique em tablinks
function handleTabClick(evt) {
    const openCity = evt.target.getAttribute('data-city');

    // Esconde todas as tabCity
    let tabCity = document.querySelectorAll('.tabCity');
    tabCity.forEach(city => city.style.display = "none");

    // Remove a classe 'active' de todos os tablinks
    let tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(link => link.classList.remove("active"));

    // Exibe a cidade selecionada e ativa o link
    document.getElementById(openCity).style.display = "block";
    evt.target.classList.add("active");
}

// Adiciona event listeners a todos os tablinks
let tablinks = document.querySelectorAll('.tablinks');
tablinks.forEach(link => link.addEventListener('click', handleTabClick));

// Ativa o padrão
document.getElementById("defaultOpen").click();
*/








const tabClick = (evt) => {

    //                   _ (evt.target) Esperar um evento, e pegar o atributo (getAttribut("data-city"))
    //                  |
    const openCity = evt.target.getAttribute("data-city");
    //Esperando quando clicado irá pegar o atributo (data-city="Brasil")

    //Escondendo todas as tabs
    let tabs = document.querySelectorAll(".tabs");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    // removendo todas as classes "active"
    let tablinks = document.querySelectorAll(".tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    document.getElementById(openCity).style.display = "block";
    evt.target.classList.add("active");
}


// Adicionar a função de click
let tablinks = document.querySelectorAll(".tablinks");
for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", tabClick);
}

document.getElementById("openDefault").click();



