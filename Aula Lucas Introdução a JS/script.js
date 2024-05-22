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

        const imagens = baseImage['Todas'];

        imagens.forEach(img => {
            console.log(img);
            galeria.innerHTML += '<div> <img src="imagens/'+ img + ' "/>  </div>';
        })

    }
        carregaImagens();






    document.body.addEventListener('click', function(event){ //evento de clique
        
        if(event.target.classList.contains('botone')){
            //acessa a lista de calsse de onde clicou e procura pela classe botone
            alert(823);
        }
    })
})