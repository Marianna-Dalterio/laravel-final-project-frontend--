import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";    

export default function ProductList () {

    const [products, setProducts] = useState([]);

    //useSearchParams cerca il parametro category dall'url
    const [searchParams] = useSearchParams();

    //lo recupero e salvo in una variabile
    const categoryId = searchParams.get('category');

    
    //creo variabile per i prodotti filtrati con il controllo ternario
    const filteredProducts= categoryId ? products.filter(p=>p.category_id==categoryId) : products;
   

    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/products`)
        .then((response)=>{
            
            setProducts(response.data.results)

        })
        .catch((error)=>{
            console.error("Errore durante il caricamento dei prodotti:", error);
        })
    }, [])

    

    return(
        <div className="container py-4">
            <h2 className="fw-bold mb-4">👗 Prodotti </h2>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* mappo sui prodotti filtrati */}
                {filteredProducts.map((product)=>(
                   
                    <div className="col" key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                    
                ))}

            </div>
            
        </div>
    )
}