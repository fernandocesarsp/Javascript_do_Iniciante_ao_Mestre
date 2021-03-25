(function() {
    var dataAtual = new Date();
    dataAtual.setHours(0);
    dataAtual.setMinutes(0);
    dataAtual.setSeconds(0);
    dataAtual.setUTCMilliseconds(0);
    anoAtual = dataAtual.getFullYear();

    
    var dataNiver = new Date(anoAtual, 10, 16);
    
    var dataAtualTS = dataAtual.getTime();
    var dataNiverTS = dataNiver.getTime();

    if(dataNiverTS === dataAtualTS) {
        alert('Parabéns pelo seu aniversário!');
        return
    }
    if(dataNiverTS < dataAtualTS) {
        dataNiver.setFullYear(++anoAtual);
    }

    const UM_DIA_TS = 24 * 60 * 60 * 1000;
        var diferenca = dataNiverTS - dataAtualTS;
        console.log(diferenca /UM_DIA_TS);

}) ();