import React from 'react'
import './listaProdutos.css'
import patinhoImg from '../assets/product-image-patinho.jpg'
import monitorImg from '../assets/product-image-monitor.jpg'
import tecladoImg from '../assets/product-image-teclado.jpg'
import headsetImg from '../assets/product-image-headset.jpg'
import cadeiraImg from '../assets/product-image-cadeira.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const produtos = [
    { id: 1, nome: "Patinho De Borracha Para Banho", preco: 19.90, imagem: patinhoImg },
    { id: 2, nome: "Teclado Gamer Mecânico Low Profile RGB AW510K 580lado", preco: 1002, imagem: tecladoImg },
    { id: 3, nome: "Monitor Gamer Curvo 49", preco: 8599.90, imagem: monitorImg },
    { id: 4, nome: "Headset Gamer RGB Preto", preco: 99, imagem: headsetImg },
    { id: 5, nome: "Cadeira Gamer  RGB - Preta com Iluminação (Led)", preco: 959, imagem: cadeiraImg },
];

const ListaProdutos = ({ setProdutos, setContadorProdutos }) => {

    function enviarProdutos(item) {
        setProdutos(prev => {
            const jaExist = prev.some(produto => produto.id === item.id)
            if (jaExist) return prev

            return [...prev, item]
        })

        setContadorProdutos(prev => prev + 1)

        toast.success('Produto adicionado ao carrinho');
    }
    return (
        <div className='lista-container'>
            {produtos.map((item) => (
                <div key={item.id} className='produto-card'>
                    <img src={item.imagem} alt={item.nome} className='img-produto' />
                    <div className='produto-content'>
                        <h3 className='produto-title'>{item.nome}</h3>
                        <span className='produto-price'>R$ {item.preco.toFixed(2)}</span>
                        <button className='produto-btn' onClick={() => enviarProdutos(item)}>Adicionar</button>
                    </div>
                </div>
            ))}
            <ToastContainer />
        </div>
    )
}

export default ListaProdutos