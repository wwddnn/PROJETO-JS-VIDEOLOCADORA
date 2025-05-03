
// funcao principal que sera invocada mais a frente
function converterDuracao() {
    // cria referências para os elementos da página
    const inTitulo = document.getElementById("inTitulo");
    const inDuracao = document.getElementById("inDuracao");
    
    const outTitulo = document.getElementById("outTitulo");
    const outResposta = document.getElementById("outResposta");

    // obtém dados dos campos de entrada
    const titulo = inTitulo.value;
    const duracao = Number(inDuracao.value);

    // arredonda hora para baixo, ex: 1,8 para 1
    const hora = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    // colocando o valor to titulo para ser exibido no outTitulo. Idem para outResposta
    outTitulo.textContent = titulo;
    outResposta.textContent = `${hora} hora(s) e ${minutos} minuto(s)`;
}

// cria referência para o botão btConverter
const btConverter = document.getElementById("btConverter");

// adiciona addEventListener com evento click e funcao converterDuracao
btConverter.addEventListener("click", converterDuracao);