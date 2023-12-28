const data = new Date() // pega a data

const primeiroDia = new Date(data.getFullYear(), data.getMonth(), 1).getDay() // pega o dia da semana do primeiro dia do mês

const ultimoDia = new Date(data.getFullYear(), data.getMonth()+1, 0) // pega o utimo dia do mês

function atualizarData(ano, mes){ // atualiza as variáveis com o novos mês e ano e muda o conteúdo do span que contém o mês e ano atual
    data = new Date(ano, mes)

    const primeiroDia = new Date(data.getFullYear(), data.getMonth(), 1).getDay()

    const ultimoDia = new Date(data.getFullYear(), data.getMonth()+1, 0)

}

console.table(createArray())

function createArray(){ // function para criar a matriz do mês
    let array = [] // matriz do mês
    let row = [] // cada linha da matriz que representa as semanas do mês
    let i = 1

    if(primeiroDia !=0){ // caso o mês não comece no domingo

        for (let i = 0; i < primeiroDia; i++) { // loop que adicionará espaços vazios até começar a contagem do mês
            row.push(undefined)   
        }

        while(i <= ultimoDia.getDate()){ // loop que percorrerá todos os dias do mês
            if(row.length < 7){ // caso a semana não tenha completado os 7 dias
                row.push(i)
            } else{ // caso a semana tenha completado os 7 dias
                array.push(row)
                row = []
                row.push(i)
            }
            i++
        }

        if(row.length > 0){ // caso o mês não tenha terminado no domingo, acrescenta os espaçõs vazios da semana e adiciona a semana a matriz
            for (let i = row.length; i <= 6; i++) {
                row.push(undefined)
            }

            array.push(row)
        }
    
    } else{
        while(i <= ultimoDia.getDate()){ // loop que percorrerá todos os dias do mês
            if(row.length < 7){ // caso a semana não tenha completado os 7 dias
                row.push(i)
            } else{ // caso a semana tenha completado os 7 dias
                array.push(row)
                row = []
                row.push(i)
            }
            i++
        }

        if(row.length > 0){ // caso o mês não tenha terminado no domingo, acrescenta os espaçõs vazios da semana e adiciona a semana a matriz
            for (let i = row.length; i <= 6; i++) {
                row.push(undefined)
            }

            array.push(row)
        }

    }

    return array
}

