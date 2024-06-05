/*



*/
document.addEventListener('DOMContentLoaded', function (){
    const baseImagens = {
        Todas: [ 'animal.jpg','cidade.jpg', 'natureza.jpg'],
        Natureza: ['natureza.jpg'],
        Cidades: ['cidade.jpg'],
        Animais: ['animal.jpg'],
    }

    function carregaImagens (categoria) {
        // selecionar elementos HTML com base em um seletor //
        const galeria = document.querySelector("#galeria-imagens");
        galeria.innerHTML = " ";
        const imagens = baseImagens['Todas'];
        imagens.forEach(img => {
            console.log(img);
            galeria.innerHTML += '<div class="imagem-item"> <img src="imagens/'+ img + ' " alt="'+ img + '"/>  </div>';
        })
    }
        carregaImagens('Todas');

    function ordenaImagens (ordem) {
        console.log(ordem)
        const imagens = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item"));
        
        imagens.sort((a, b) => {
            const nameA = a.querySelector('img').getAttribute('alt');
            const nameB = b.querySelector('img').getAttribute('alt');

            // operador ternário - se for true ? se nao : 
            return ordem == 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        })
        const galeria = document.getElementById('galeria-imagens');
        galeria.innerHTML = ''; // esvazia box img
        imagens.forEach(imagem => {
            galeria.appendChild(imagem);
        })

    }




    document.body.addEventListener('click', function(event){ //evento de clique
        
        if(event.target.classList.contains('botone-categoria')){
            const categoria = event.target.dataset.categoria;
            carregaImagens(categoria);
            //acessa a lista de classe de onde clicou e procura pela classe botone   
        }
        if (event.target.classList.contains('botone-ordenar')) {
            const ordem = event.target.dataset.ordem;
            ordenaImagens(ordem);

        }

    })
})