function buscar() {
  //Obtendo a seção HTML onde os resultado serão exibidos, no caso, pelo ID
  let section = document.getElementById("resultados-pesquisa")
  
  //transformando o título em uma nova mensagem
  document.getElementById("titulo").textContent = "Resultados da sua pesquisa:";

// aqui utilizamos a nossa variável com padrão Camel Case(primeira letra da segunda palava maiúscula).
let campoPesquisa = document.getElementById ("campo-pesquisa").value

// se o campo pesquisa estiver vazio
if (campoPesquisa == "") {
  section.innerHTML = "<p style='color: white;'>Nenhum clube foi encontrado"
  return //com o return impedimos de o resto do código ser carregado em vão.
}

// caso o usuário digite com todas a letras minúsculas
campoPesquisa = campoPesquisa.toLowerCase()
 
// iniciando vazio, para armazenar os resultado 
let resultados = "" ;
let nome = "" ;
let regiao = "" ;
let artilheiro = "" ;
let tags = "" ;

// Itera sobre cada dado da lista de dados
for(let dado of times) {
  nome = dado.nome.toLowerCase()
  regiao = dado.descricao.toLowerCase()
  artilheiro = dado.artilheiro.toLowerCase()
  tags = dado.tags.toLowerCase()
  
  //se titutlo includes campoPesquisa, então faça...
  if (nome.includes(campoPesquisa) || regiao.includes(campoPesquisa) || artilheiro.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    // para cada item da lista de dados, cria um novo elemento
      resultados += `
      <div class= "item-resultado">
        <h2><a>${dado.nome}</a></h2>
        <img src="${dado.logo}" alt="Logo do ${dado.nome}" class="logo-clube"/>
        <p class= "descricao-meta"> ${dado.regiao} </p>
        <p class= "descricao-meta"> ${dado.descricao} </p>
        <p class= "descricao-meta"> ${dado.títulos} </p>
        <p class= "descricao-meta"> ${dado.artilheiro} </p>
        <a href=${dado.link} target= "_blank"> Clique aqui para mais informações do Clube <a> 
      </div>
      `;
  }
}

// se o resultados não existir e/ou não for encontrado...
if(!resultados)  {
  resultados == "<p>Clube não foi encontrado Procure digitar o nome do clube, sua localidade ou o campeonato que ele disputa</p>"
  alert('Clube não foi encontrado Procure digitar o nome do clube, sua localidade ou o campeonato que ele disputa')
}


// Transformando a barra de pesquisa em barra de navegação
let barraPesquisa = document.getElementById("barra-pesquisa");
barraPesquisa.classList.add("navegacao");

//atribuindo os resultados gerados à seção HTML
section.innerHTML = resultados
}