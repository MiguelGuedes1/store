import React, { useEffect, useState,useContext } from 'react'
import { fetchProducts } from '../services/api'
import CarContext from "../contexts/CarContext"
import { ShoppingCart } from "lucide-react"


const Products = () => {
    const [products, setProducts] = useState([]);
    const { carCounter,setCarCounter } = useContext(CarContext); // Acessa os valores do contexto

    const addProductCart = () => {
        setCarCounter(carCounter + 1)
      }

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Erro ao buscar os dados:", error)
            }
        };

        getData();
    }, []);

    const [expandedProduct, setExpandedProduct] = useState(null)

    const toggleDescription = (productId) => {
        if (expandedProduct === productId) {
            setExpandedProduct(null); // Esconde a descrição se o produto já está expandido
        } else {
            setExpandedProduct(productId) // Mostra a descrição do produto clicado
        }
    };
    

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 mt-36">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                >
                    <a
                        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl flex justify-center items-center"
                        href="#"
                    >
                        <img
                            className="object-cover items-center justify-center"
                            src={product.images[0]}
                            alt={product.title}
                        />
                    </a>
                    <div className="mt-4 px-5 pb-5">
                        <a href="#">
                            <h5 className="text-md tracking-tight text-slate-900">
                                {product.title}
                            </h5>
                        </a>

                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-2xl font-bold text-slate-900">
                                    €{product.price}
                                </span>
                            </p>
                        </div>

                        <button
                            onClick={() => toggleDescription(product.id)}
                            className="mt-3 text-slate-900 text-sm transform hover:scale-105 transition-transform duration-200 focus:outline-none"

                        >
                            {expandedProduct === product.id
                                ? 'Hide description'
                                : 'Product description'}
                        </button>

                        {expandedProduct === product.id && (
                            <p className="mt-4 text-gray-400 text-sm">
                                {product.description}
                            </p>
                        )}

                        <button 
                        onClick={addProductCart}
                        className='flex w-full items-center mt-3 justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none'>
                         
                         <div className='flex gap-2 justify-center items-center'>

                            <div>
                                <ShoppingCart/>
                            </div>

                            <p>Add to Cart</p>

                         </div>
                        </button>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
