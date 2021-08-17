   /*quando um algoritmo de busca precisa atuar sobre um vetor 
   de objetos, a comparação não deve ser feito dentro da função
   que implementa o algoritmo. Em  vez disso, recebemos um outra função
   (externa) como parâmetro que resolverá a comparação.
   essa função externa será chamada passando o objeto atual do vetor
   e esperará um retorno true, caso a função externa determine que o objeto atual contêm o valor de busca, ou false, caso contrário.
   */
   
   
   function buscaSequencial(vetor, fnComp) {
        for(let i = 0; i < vetor.length; i++){
            //a comparação será feita pela função externa fncomp
            //console.log("Primeiro elemento do vetor:", vetor[i])
            if(fnComp(vetor[i])) return i 
        }
        return -1
    }

    function comparaNome(obj) {
        return obj.first_name === 'AABRAO'
    }

    import { objNomes } from './data/vetor-obj-nomes.mjs'

    console.time('Buscando AABRAO...')
    console.log('Posição de AABRAO:', buscaSequencial(objNomes,comparaNome))
    console.timeEnd('Buscando AABRAO...')

    //termina o programa
    

    console.time('Buscando MOACIR...')
    console.log('Posição de MOACIR:', buscaSequencial(objNomes,function(obj){
        return obj.first_name === "MOACIR"
    }))
    console.timeEnd('Buscando MOACIR...')

    console.time('Buscando GERCINA...')
    console.log('Posição de GERCINA:', buscaSequencial(objNomes, obj => obj.first_name ==="GERCINA"))
    console.timeEnd('Buscando GERCINA...')