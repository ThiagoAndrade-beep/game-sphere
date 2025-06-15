import { useState } from 'react'
import './carrinho.css'


const Carrinho = ({ produtos, onVoltar, onRemover}) => {

  const [contador, setContador] = useState(() => {
    const inicial = {}
    produtos.forEach(produto => {
      inicial[produto.id] = 1
    })
    return inicial
  })


  function adicionar(id) {
    setContador(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }))
  }

  function diminuir(id) {
    setContador(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }))
  }

  function remover(id) {
    onRemover(id)
  }

  const subtotal = produtos.reduce((total, item) => total + item.preco * contador[item.id], 0)
  const estimatedTax = 10.50
  const total = subtotal + estimatedTax
 
  return (
    <>
      <div>
        <h2 className='carrinho-title'>Seu carrinho de compra:</h2>
        {produtos.map((item, index) => (
          <div key={index} className='carrinho-container'>
            <div className='carrinho'>
              <img src={item.imagem} alt={item.nome} />
              <div className='carrinho-informacoes'>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco}</p>
              </div>
            </div>
            <div className='quantidade-controle'>
              <button onClick={() => diminuir(item.id)}>-</button>
              <h2>{contador[item.id]}</h2>
              <button onClick={() => adicionar(item.id)}>+</button>
              <button id='btn-limpar' onClick={() => remover(item.id)}>x</button>
            </div>
          </div>
        ))}

        <div className='order-summary'>
          <h3>Resumo do pedido:</h3>
          <div>
            <span>Subtotal</span>
            <span>R${subtotal.toFixed(2)}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div>
            <span>Estimated Tax</span>
            <span>R${estimatedTax.toFixed(2)}</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R${total.toFixed(2)}</strong>
          </div>
          <button className='back-btn' onClick={onVoltar}>Voltar</button>
        </div>

      </div>
    </>
  )
}

export default Carrinho