import React, {useState} from 'react'
import * as S from './style'
import {CalculadoraService} from './CalculadoraService'
export const Calculadora = () => {

    const [calcular, concatnarNumero, SOMA, SUBTRAC, DIVIDIR, MULTIPLICAR] =  CalculadoraService(); 

    const [txtNumeros , setTxtNumeros] = useState('0');
    const [numero1, setNumero1] = useState('0');
    const [numero2, setNumero2] = useState(null);
    const [operacao, setOperacao] = useState(null);


    const btnMais = (n) =>{
        let resultado;
      if(operacao === null){
         resultado = concatnarNumero(numero1, n)
         setNumero1(resultado)
      }else{
        resultado = concatnarNumero(numero2, n);
        setNumero2(resultado)
      }
      setTxtNumeros(resultado);
    }

    // Define a Operação
    const definirOperacao = (n) =>{
        //definir operacao caso nao exista
        if(operacao === null){
            setOperacao(n)
            return
        }
        //caso operacao for definida e numero 2 selecionado, realizar o calculo
        if(numero2 !== null){
            const resultado  = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
            setOperacao(n);
            setNumero1(resultado.toString());
            setNumero2(null);
            setTxtNumeros(resultado.toString());

        }

    }

    function acaoCalcular(){
        if(numero2 === null){
            return;
        }
        const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
        setTxtNumeros(resultado.toString());
    }

    // Limpar a Tela
    const btnLimparTela = () =>{
        setTxtNumeros('0')
        setNumero1('0')
        setNumero2(null)
        setOperacao(null)
      }
    return (
        <S.Container>
                <div className="jumbotron">
                    <div className="colum">
                        <button className="btn C" onClick={btnLimparTela}>c</button>
                        <div className="display">
                            <input type="text" 
                                   readOnly="readonly" 
                                   value={txtNumeros}
                                   data-testid="txtNumeros"/>
                        </div>
                    </div>
                    <div className="colum">
                    <button className="btn" onClick={() => btnMais('7')}>7</button>
                    <button className="btn" onClick={() => btnMais('8')}>8</button>
                    <button className="btn" onClick={() => btnMais('9')}>9</button>
                    <button className="btn Azul" onClick={() => definirOperacao(DIVIDIR)}>/</button>
                    </div>
                    <div className="colum">
                    <button className="btn" onClick={() => btnMais('4')}>4</button>
                    <button className="btn" onClick={() => btnMais('5')}>5</button>
                    <button className="btn" onClick={() => btnMais('6')}>6</button>
                    <button className="btn Azul" onClick={() => definirOperacao(MULTIPLICAR)}>*</button>
                    </div>
                    <div className="colum">
                    <button className="btn" onClick={() => btnMais('1')}>1</button>
                    <button className="btn" onClick={() => btnMais('2')}>2</button>
                    <button className="btn" onClick={() => btnMais('3')}>3</button>
                    <button className="btn Azul" onClick={() => definirOperacao(SUBTRAC)}>-</button>
                    </div>
                    <div className="colum">
                    <button className="btn" onClick={() => btnMais('0')}>0</button>
                    <button className="btn Azul" onClick={() => btnMais('.')}>.</button>
                    <button className="btn Azul" onClick={acaoCalcular}>=</button>
                    <button className="btn Azul" onClick={() => definirOperacao(SOMA)}>+</button>
                    </div>
                </div>
        </S.Container>
    )
}
