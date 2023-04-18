function Next_login(){
    window.location.href="login.html"
}

function alterarFundo() {
  // Obter o elemento HTML do input de imagem
  const inputImagem = document.getElementById("imagem");

  // Verificar se um arquivo de imagem foi selecionado
  if (inputImagem.files && inputImagem.files[0]) {
    // Ler o arquivo de imagem como dados codificados em base64
    const reader = new FileReader();
    reader.onload = function() {
      const imageDataUrl = reader.result;

      // Alterar o fundo de tela do corpo
      document.body.style.backgroundImage = `url(${imageDataUrl})`;

      // Salvar a imagem no Local Storage como dados codificados em base64
      localStorage.setItem('wallpaper', imageDataUrl);
    }
    reader.readAsDataURL(inputImagem.files[0]);
  }
}

function setWallpaper() {
  // Verifica se há um link de imagem armazenado no Local Storage
  const savedWallpaper = localStorage.getItem('wallpaper');
  if (savedWallpaper) {
    // Define a imagem como wallpaper
    document.body.style.backgroundImage = `url(${savedWallpaper})`;
    console.log("set wallpaper");
  }
}
var links_arr = [];

function addLink() {
  const linkContainer = document.getElementById("linkContainer");

  // Cria um elemento <div> editável
  const linkDiv = document.createElement("div");
  linkDiv.setAttribute("contenteditable", "true");

  // Adiciona o elemento <div> ao container
  linkContainer.appendChild(linkDiv);

  // Adiciona um evento para converter o texto do link em um elemento <a>
  linkDiv.addEventListener("blur", () => {
    // Obtém o texto do link
    const linkText = linkDiv.innerText;

    // Cria um elemento <a> e define o atributo href
    const link = document.createElement("a");
    link.setAttribute("href", linkText);

    // Substitui o elemento <div> pelo elemento <a>
    linkContainer.replaceChild(link, linkDiv);

    // Define o texto do link como o conteúdo do elemento <a>
    link.innerText = linkText;

    // Adiciona o link ao array
    links_arr.push(linkText);

    // Salva o array de links no Local Storage
    localStorage.setItem("links_arr", JSON.stringify(links_arr));
  });
}


/*NAO FUNCIONA
//ola {nome}
const meuArr = JSON.parse(localStorage.getItem('meuArr'));

// Cria um elemento <ul> para armazenar os itens do array
const ul = document.createElement('ul');

// Percorre o array e cria um elemento <li> para cada item
meuArr.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

// Insere a lista no elemento <div> com o ID "lista-de-itens"
const divListaDeItens = document.getElementById('lista-de-itens');
divListaDeItens.appendChild(ul);

// Recupera o nome do primeiro item do array
const nome = meuArr[0];

// Cria um elemento <h1> com a mensagem de boas-vindas
const h1 = document.createElement('h1');
h1.textContent = `Bem-vindo, ${nome}!`;

// Insere a mensagem no elemento <div> com o ID "boas-vindas"
const divBoasVindas = document.getElementById('boas-vindas');
divBoasVindas.appendChild(h1);

*/
//Adicoes e correcoes

//inicar pagina
function onPageLoad() {
  setWallpaper()
  displayLinks()
  console.log("A página foi carregada.");
}

window.addEventListener("load", onPageLoad);


//exibe os links digtados pelo usuario

function displayLinks() {
  console.log("displaylinks.");
  // Verifica se há links armazenados no Local Storage
  const savedLinks = JSON.parse(localStorage.getItem('links')) || [];
  if (savedLinks.length > 0) {
    const linkContainer = document.getElementById("linkContainer");
    // Cria um elemento <div> para cada link no array
    for (let i = 0; i < savedLinks.length; i++) {
      console.log("for_display");
        const linkDiv = document.createElement("div");
        linkDiv.setAttribute("contenteditable", "true");
        linkDiv.innerText = savedLinks[i];

        // Adiciona o elemento <div> ao container
        linkContainer.appendChild(linkDiv);
    }
  }
}
