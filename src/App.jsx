import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ListaProdutos from './components/ListaProdutos'
import Carrinho from './components/Carrinho'

function App() {

  const [produtos, setProdutos] = useState([])
  const [exibirCarrinho, setExibirCarrinho] = useState(false)
  const [contadorProdutos, setContadorProdutos] = useState(0)

  function removerProduto(id) {
    setProdutos(prev => prev.filter(produto => produto.id !== id))
    setContadorProdutos(prev => prev - 1)
  }

  return (
    <>
      <header>
        <Header onVerCarrinho={() => setExibirCarrinho(true)} contadorProdutos={contadorProdutos}/>
      </header>

      {exibirCarrinho ? (<Carrinho produtos={produtos} onVoltar={() => setExibirCarrinho(false)} onRemover={removerProduto}/>) : (
              <div className='product-container'>
              <ListaProdutos setProdutos={setProdutos} setContadorProdutos={setContadorProdutos}/>
            </div>
      )}
    </>
  )
}

export default App
