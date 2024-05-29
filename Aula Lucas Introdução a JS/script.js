/*



*/
document.addEventListener('DOMContentLoaded', function (){
    const baseImage = {
        Todas: [ 'animal.jpeg','natureza.webp', 'cidade.jpeg'],
        Natureza: ['natureza.webp'],
        Cidades: ['cidade.jpeg'],
        Animais: ['animal.jpeg'],
    }

    function carregaImagens () {
        // selecionar elementos HTML com base em um seletor //
        const galeria = document.querySelector("#galeria-imagens");
        galeria.innerHTML = " ";
        const imagens = baseImage['Todas'];
        imagens.forEach(img => {
            console.log(img);
            galeria.innerHTML += '<div class="imagem-item"> <img src="imagens/'+ img + ' "/>  </div>';
        })
    }
        carregaImagens('Todas');

    function ordenaImagens (ordem) {
        const imagens = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item"));
        
        imagens.sort((a, b)=> {
            console.log(a);
        })
    }




    document.body.addEventListener('click', function(event){ //evento de clique
        
        if(event.target.classList.contains('botone-categoria')){
            //acessa a lista de classe de onde clicou e procura pela classe botone
            
        }
        if (event.target.classList.contains('botone-ordenar')) {
            const ordem = event.target.dataset.ordem;
            ordenaImagens(ordem);

        }

    })
})