var descricao = 'Experimente o máximo em conforto e estilo com o Nike Air Max 270.'
const conteinerCard = document.querySelector('.conteinerCard')
var carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || []

const qtdProdsNoCarrinho = document.querySelector('.carrinho span')
qtdProdsNoCarrinho.innerText = carrinho.length

var produtos = JSON.parse(localStorage.getItem('produtos')) || [
    {
        name: 'Nike Air Max',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/OIP.jpeg',
    },

    {
        name: 'Adidas Ultraboost',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Adidas Ultraboost.jpeg',
    },

    {
        name: 'Puma RS-X',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Puma RS-X.jpg',
    },

    {
        name: 'Converse Chuck Taylor',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Converse Chuck Taylor.jpeg',
    },

    {
        name: 'New Balance 990',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/New Balance 990.jpeg',
    },

    {
        name: 'Reebok Classic Leather',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Reebok Classic Leather.jpeg',
    },

    {
        name: 'Vans Old Skool',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Vans Old Skool.jpeg',
    },

    {
        name: 'Asics Gel-Kayano',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Asics Gel-Kayano.jpeg',
    },

    {
        name: 'Saucony Kinvara',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Saucony Kinvara.jpeg',
    },

    {
        name: 'Brooks Ghost',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Brooks Ghost.avif',
    },

    {
        name: 'Nike Air Jordan 1',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Nike Air Jordan 1.jpeg',
    },

    {
        name: 'Adidas NMD_R1',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Adidas NMD_R1.jpeg',
    },

    {
        name: 'Asics Gel-Nimbus',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Asics Gel-Nimbus.jpeg',
    },

    {
        name: 'Saucony Triumph',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Saucony Triumph.jpeg',
    },

    {
        name: 'Hoka One One Clifton',
        preco: 20000,
        qtdEstoque: 20,
        genero: 'unissex', 
        src: '../imagens/Hoka One One Clifton.jpeg',
    },
]

var produtosRenderizados = produtos.filter(produto => produto.qtdEstoque > 0)

renderProdutos = () => {

    var produtosRenderizados = produtos.filter(produto => produto.qtdEstoque > 0)

    if(produtosRenderizados.length == 0){
        conteinerCard.innerHTML = `<h1>Estoque esgotado</h1>`
        return
    }
    produtosRenderizados.forEach((produto, pos) => {

        const cardProduto = document.createElement('div')
        cardProduto.classList.add('cardProduto')

        const nameProduto = document.createElement('p')
        nameProduto.innerText = produto.name

        const imgProduto = document.createElement('img')
        imgProduto.src = produto.src

        const pPrecoActual = document.createElement('p')
        pPrecoActual.innerText = produto.preco

        const pQtd =  document.createElement('p')
        pQtd.innerText = 'Qtd: '+produto.qtdEstoque

        const btnComprar = document.createElement('button')
        btnComprar.appendChild(document.createTextNode('Comprar'))
        btnComprar.setAttribute('onclick', 'togglefade('+pos+')')

        cardProduto.appendChild(imgProduto)
        cardProduto.appendChild(nameProduto)
        cardProduto.appendChild(pPrecoActual)
        cardProduto.appendChild(pQtd)
        cardProduto.appendChild(btnComprar)

        conteinerCard.appendChild(cardProduto)
    })
}

renderProdutos()

const fade = document.querySelector('#fade')
const imgProduto = document.querySelector('.modalComprar img')
const nameProduto = document.querySelector('h2.name')
const descricaoProduto = document.querySelector('.descricao')
const precoProduto = document.querySelector('.preco')
const qtd = document.querySelector('p.qtd')

togglefade = (pos) => {
    
    fade.classList.toggle('fade')
    fade.classList.toggle('none')

    qtd.innerText = '1'

    if(pos != undefined){

        imgProduto.src = produtosRenderizados[pos].src
        nameProduto.innerText =  produtosRenderizados[pos].name
        descricaoProduto.innerText = `Experimente o máximo em conforto e estilo com o/a ${produtosRenderizados[pos].name}.`
        precoProduto.innerText = produtosRenderizados[pos].preco

        const qtd = document.querySelector('.qtd')

diminuirQtdCompra = () => {

    var qtdCompra = Number(qtd.innerText)
    var precoActual = Number(precoProduto.innerText)

    if(qtdCompra == 1){
        return
    }

    qtdCompra--
    qtd.innerText = qtdCompra
    precoProduto.innerText = precoActual-produtosRenderizados[pos].preco

}

aumentarQtdCompra = () => {
    var qtdCompra = Number(qtd.innerText)
    var precoActual = Number(precoProduto.innerText)

    if(qtdCompra >= produtosRenderizados[pos].qtdEstoque){
        return
    }
    qtdCompra++
    qtd.innerText = qtdCompra
    precoProduto.innerText = precoActual+produtosRenderizados[pos].preco

}
    }

}

addAoCarrinho = () =>{

    const nameProduto = document.querySelector('.maisInformacoe .name').innerText
    const qtdCompra = document.querySelector('.maisInformacoe .item-preco .divQtd .qtd').innerText
    const preco = document.querySelector('.maisInformacoe .item-preco .preco').innerText 
    const srcImagemProduto = (produtos.find(produto => produto.name == nameProduto)).src

    jaExiste = () => {
        return carrinho.findIndex(produto => produto.nameProduto == nameProduto)
    }

    if(jaExiste() == -1){
        carrinho.push({
        nameProduto: nameProduto,
        qtdCompra: Number(qtdCompra),
        preco:preco,
        srcImagemProduto: srcImagemProduto
    })
} else {
    carrinho[jaExiste()].qtdCompra += Number(qtdCompra)
    carrinho[jaExiste()].preco = Number(preco)+Number(carrinho[jaExiste()].preco)
}

    salveCarrinhoInSessionStorage()
    openMenuLateral ()
    updateSubtotalTotalDesconto()
    renderProdutosCarrinho()
    qtdProdsNoCarrinho.innerText = carrinho.length
}

openMenuLateral = () => {
    const menuLateral = document.querySelector('.menu-lateral')

    menuLateral.style.width = '400px'
    menuLateral.style.padding = '10px'

    togglefade()
}

openMenuLateral1 = () => {
    const menuLateral = document.querySelector('.menu-lateral')

    menuLateral.style.width = '400px'
    menuLateral.style.padding = '10px'

    updateSubtotalTotalDesconto()

}

closeMenuLateral = () => {
    const menuLateral = document.querySelector('.menu-lateral')

    menuLateral.style.width = '0'
    menuLateral.style.padding = '0'
}

salveCarrinhoInSessionStorage = () => {
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
}

salveProdutosNoStorage = () => {
    localStorage.setItem('produtos', JSON.stringify(produtos))
}

const conteinerProdutosCarrinho = document.querySelector('.menu-lateral .conteinerProdutosCarrinho')

const renderProdutosCarrinho = () => {

    conteinerProdutosCarrinho.innerHTML = ''
    carrinho.forEach((produto,pos) => {

        const divProduto = document.createElement('div')
        divProduto.classList.add('divProduto')

        const imgProduto = document.createElement('img')
        imgProduto.src = produto.srcImagemProduto

        const nameProduto = document.createElement('p')
        nameProduto.classList.add('nameProduto')
        nameProduto.innerText = produto.nameProduto

        const divQtdNoCarrinho = document.createElement('div')
        divQtdNoCarrinho.classList.add('divQtdNoCarrinho')

        const diminuirQtdNoCarrinho = document.createElement('button')
        diminuirQtdNoCarrinho.classList.add('diminuirQtdNoCarrinho')
        diminuirQtdNoCarrinho.appendChild(document.createTextNode('-'))
        diminuirQtdNoCarrinho.setAttribute('onclick', 'diminuirQtdDeProdNoCarrinho('+pos+')')

        const qtdNoCarrinho = document.createElement('p')
        qtdNoCarrinho.classList.add('qtdNoCarrinho')
        qtdNoCarrinho.innerText = produto.qtdCompra

        const aumentarQtdNoCarrinho = document.createElement('button')
        aumentarQtdNoCarrinho.classList.add('aumentarQtdNoCarrinho')
        aumentarQtdNoCarrinho.appendChild(document.createTextNode('+'))
        aumentarQtdNoCarrinho.setAttribute('onclick', 'aumentarQtdDeProdNoCarrinho('+pos+')')

        divQtdNoCarrinho.appendChild(diminuirQtdNoCarrinho)
        divQtdNoCarrinho.appendChild(qtdNoCarrinho)
        divQtdNoCarrinho.appendChild(aumentarQtdNoCarrinho)

        divProduto.appendChild(imgProduto)
        divProduto.appendChild(nameProduto)
        divProduto.appendChild(divQtdNoCarrinho)

        conteinerProdutosCarrinho.appendChild(divProduto)
    })
    
}

renderProdutosCarrinho()

updateSubtotalTotalDesconto = () => {

    const subTotal = document.querySelector('.subtotal span')
    const desconto = document.querySelector('.desconto span')
    const total = document.querySelector('.total span')

    subTotal.innerText = carrinho.reduce((accumulator, p) => accumulator+Number(p.preco), 0)+' AKZ'
    desconto.innerText = Number(subTotal.innerText.replace(' AKZ', ''))*0.1+' AKZ'
    total.innerText = Number(subTotal.innerText.replace(' AKZ', ''))*0.9+' AKZ'
}


aumentarQtdDeProdNoCarrinho = (pos) => {

    const qtdProdutonNoCarrinho = document.querySelectorAll('.qtdNoCarrinho')
    var produto = produtos.find(p => p.name == carrinho[pos].nameProduto)

    var qtd = Number(qtdProdutonNoCarrinho[pos].innerText)
    if(qtd == produto.qtdEstoque){
        return
    }

    qtd++
    qtdProdutonNoCarrinho[pos].innerText = qtd
    carrinho[pos].qtdCompra = qtd
    carrinho[pos].preco = Number(carrinho[pos].preco)+produto.preco
    salveCarrinhoInSessionStorage()
    updateSubtotalTotalDesconto()
}

diminuirQtdDeProdNoCarrinho = (pos) => {
    const qtdProdutonNoCarrinho = document.querySelectorAll('.qtdNoCarrinho')
    var produto = produtos.find(p => p.name == carrinho[pos].nameProduto)

    var qtd = Number(qtdProdutonNoCarrinho[pos].innerText)
    qtd--
    if(qtd == 0){
        carrinho.splice(pos, 1)
        salveCarrinhoInSessionStorage()
        updateSubtotalTotalDesconto()
        renderProdutosCarrinho()

        return
    }

    qtdProdutonNoCarrinho[pos].innerText = qtd
    carrinho[pos].qtdCompra = qtd
    carrinho[pos].preco = Number(carrinho[pos].preco)-produto.preco
    salveCarrinhoInSessionStorage()
    updateSubtotalTotalDesconto()

}

finalizarCompra = () => {

    if(carrinho.length > 0){
        updateEstoque()
        closeMenuLateral()
        alert('Compra realizada com sucesso. Volte sempre!')
        return
    }
    alert('Adicione produtos ao carrinho.')
}

const cardsProduto = document.querySelectorAll('.cardProduto')
const inpuSearch = document.querySelector('.divSearch input')

inpuSearch.addEventListener('input', event => {
    var inputText = event.target.value
    produtos.forEach((produto, pos) => {
        console.log(produto.name.trim())
        if(produto.name.trim().toUpperCase().slice(0, Number(inputText.length)).includes(inputText.trim().toUpperCase())){
            cardsProduto[pos].style.display = 'flex'
            return
        }
        cardsProduto[pos].style.display = 'none'
    })
})

updateEstoque = () => {
    carrinho.forEach(produtoNoCarrinho => {
        var produto = produtos.find(produto => produto.name == produtoNoCarrinho.nameProduto)
        produto.qtdEstoque -= produtoNoCarrinho.qtdCompra
    })
    salveProdutosNoStorage()
    carrinho.splice(0, carrinho.length)
    salveCarrinhoInSessionStorage()
    qtdProdsNoCarrinho.innerText = carrinho.length
    renderProdutosCarrinho()
    renderProdutos()
}