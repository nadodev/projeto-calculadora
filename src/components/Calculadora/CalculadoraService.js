export const  CalculadoraService = () => {
    const SOMA = '+'
    const SUBTRAC = '-'
    const DIVIDIR = '/'
    const MULTIPLICAR = '*'
    const calcular = (n1,n2, op) =>{
    let resultado;

        switch (op){
            case SOMA:
                resultado = n1 + n2;
            break;
            case SUBTRAC:
                resultado = n1 - n2;
            break;
            case DIVIDIR:
                resultado = n1 / n2;
            break;
            case MULTIPLICAR:
                resultado = n1 * n2;
            break;
            default:
                resultado = 0
        }
        return resultado
    }

    function concatnarNumero(numAtual, numConcat){

        // caso contenha apenas '0' ou null, reinicia o valor
        if(numAtual === '0' ||  numAtual === null){
            numAtual = ''
        } 
        //quando o primeiro digito for  '.' concatena  '0' antes do ponto
        if(numConcat === '.' && numAtual === ''){
            return '0.';
        }
        //caso '.' digitado já contenha um '.' , penas retorne
        if(numConcat === '.' && numAtual.indexOf('.') > -1 ){
            return numAtual;
        }

        return numAtual + numConcat;
    }

    return [
        calcular,
        concatnarNumero,
        SOMA,
        SUBTRAC,
        DIVIDIR,
        MULTIPLICAR
    ];

}
