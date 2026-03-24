import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/categories`)
            .then((response) => {
                setCategories(response.data.results);
            })
            .catch((error) => {
                console.error("Errore durante il caricamento delle categorie:", error);
            });
    }, []);

    return (
        <div className="container py-4">
            <h2 className="fw-bold mb-4">🏷️ Categorie</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {categories.map((category) => (
                    <div className="col" key={category.id}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{category.name}</h5>
                                <p className="text-muted">
                                    {category.products.length} prodotti disponibili
                                </p>
                            </div>
                            <div className="card-footer">

                                <Link
                                //query parameter, mi serve per il filtro dei prodotti che hanno quella categoria, lo implemento in ProductList
                                    to={`/products?category=${category.id}`}
                                    className="btn btn-dark w-100">
                                    Vedi prodotti →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}