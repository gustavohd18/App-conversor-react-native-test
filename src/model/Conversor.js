// posso exportar um objeto que tem essas funcoes visto que são somente 2 funcoes

class conversor {
    conversorBinario = (numero) => {
        return numero.toString(2)
    }
    conversorHexadecimal = (numero) => {
        return numero.toString(16)
    }
}



export default new conversor
