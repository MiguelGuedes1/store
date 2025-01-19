import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'

const Products = () => {

    const [products, setProducts] = useState([])
    
        useEffect(() => {
            const getData = async () => {
                try {
                    const data = await fetchProducts()
                    setProducts(data)
                    console.log(data)
                } catch (error) {
                    console.error("Erro ao buscar os dados:", error)
                }
            };
    
            getData();
        }, []);
    



  return (
    <div>
        
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.title} - ${product.price}
                    <br />
                    <img
                        className="w-[150px] h-[150px] cover"
                        src={product.images[0]}
                        alt={product.title}
                    />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Products
