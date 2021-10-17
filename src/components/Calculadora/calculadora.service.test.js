import { CalculadoraService } from './CalculadoraService';

describe('Teste da CalculadoraService', () => {
       
        const [calcular, concatnarNumero, SOMA, SUBTRAC, DIVIDIR, MULTIPLICAR] =  CalculadoraService(); 
        
        it('deve garantir que  1 + 4  = 5', () => {
                let soma = calcular(1,4, SOMA);
                expect(soma).toEqual(5)                     
        });

        it('deve garantir que 1 - 4  = -3', () => {
        
                let subtracao =  calcular(1,4, SUBTRAC)
                expect(subtracao).toEqual(-3)
        })
        
        it('deve garantir que 1 / 4  = 0.25', () => {
        
                let divisao =  calcular(1,4, DIVIDIR)
                expect(divisao).toEqual(0.25)
        })

        it('deve garantir que 1 * 4  = 4', () => {
        
                let multiplicacao =  calcular(1,4, MULTIPLICAR)
                expect(multiplicacao).toEqual(4)
        })
        it('deve retornar 0 para operaçao invalida', () => {
        
                let opecaoInvalida =  calcular(1,4, '%')
                expect(opecaoInvalida).toEqual(0)
        })
})