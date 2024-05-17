document.addEventListener('DOMContentLoaded', function (){
    const baseImage = {
        Todas: ['nome.formato', 'animal.jpg','natureza.jpg'],
        Natureza: [],
        Cidades: [],
        Animais: [],
    }

    document.body.addEventListener('click', function(event){ //evento de clique
        
        if(event.target.classList.contains('botone')){
            //acessa a lista de calsse de onde clicou e procura pela classe botone
            alert(823);
        }
    })
})