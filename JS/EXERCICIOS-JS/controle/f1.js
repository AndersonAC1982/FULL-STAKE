function soBoaNoticia(nota) {

    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeiro(valor) {
    if (valor) {
        console.log('É verdade... ' + valor);
    }
}   

seForVerdadeiro();
soBoaNoticia(null);
soBoaNoticia(undefined);
soBoaNoticia(NaN);
soBoaNoticia('');
soBoaNoticia(0);
soBoaNoticia(-1);
soBoaNoticia('');
soBoaNoticia('?');
soBoaNoticia([]);
soBoaNoticia([1, 2, 3]);
soBoaNoticia({});
