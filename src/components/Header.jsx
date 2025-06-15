import { FaGamepad, FaSearch } from 'react-icons/fa';
import './header.css'


const Header = ({onVerCarrinho, contadorProdutos}) => {

    return (
        <header>
            <div className='header-nav'>
                <div className='header-title'>
                    <FaGamepad className='icon-control'/>
                    <h2>GameSphere</h2>
                </div>
                <p>New & Featured</p>
                <p>Best Sellers</p>
                <p>Consoles</p>
                <p>Acessories</p>
                <p>Gifts Cards</p>
                <div className='header-outhers'>
                    <div className='input-search'>
                        <FaSearch className='lupa-busca' />
                        <input type="text" placeholder='Search' />
                    </div>
                    <button className='view' onClick={onVerCarrinho}>Ver Carrinho {contadorProdutos > 0 && (<span className='numero-produtos'>{contadorProdutos}</span>)}</button>
                </div>
            </div>
        </header>
    )
}

export default Header