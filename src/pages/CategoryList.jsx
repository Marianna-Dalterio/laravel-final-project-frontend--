import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CategoryList () {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios
        .get (`${import.meta.env.VITE_API_URL}/categories`)
        .then((response)=>{
            setCategories(response.data.results);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("Errore durante il caricamento delle categorie:", error);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Caricamento...</p>;

    return(
       <div>
            <h1>Categorie</h1>
            {categories.map((category) => (
                <div key={category.id}>
                    <h3>{category.name}</h3>
                    <Link to={`/products?category=${category.id}`}>
                        Vedi prodotti →
                    </Link>
                </div>
            ))}
        </div>
    );
}