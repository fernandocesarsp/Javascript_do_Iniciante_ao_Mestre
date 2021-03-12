var nome = 'Fernando César Alves';

var nomeFormatado = formatarNome(nome);

function formatarNome(nome) {
    // return "Alves, Fernando César";
    var posicaoUltimoEspaco = nome.lastIndexOf(' ');
    if(posicaoUltimoEspaco <= 0) {
        return nome;
    }

    var ultimoNome = nome.slice(posicaoUltimoEspaco +1);
    console.log('ultimo nome', ultimoNome);

    var primeiroNome = nome.slice(0, posicaoUltimoEspaco);
    console.log('posição ultimo espaço', posicaoUltimoEspaco);

    return ultimoNome + ', ' + primeiroNome;
}

console.log(nomeFormatado);