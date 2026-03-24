import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";



export default function ProductDetail () {
    //recupero id
    const {id} = useParams();
    //inizia come null, verrà popolato dalla chiamata API
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        //uso la variabile {id} presa da useParams sopra
        axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`)
        .then((response)=>{
            console.log("Risposta completa:", response.data);
            setProduct(response.data.results);
        })
        .catch((error)=>{
            console.error("Errore nel caricamento dettaglio di un prodotto", error);
        });
        //useEffect dipende dall'id quindi lo aggiungo all'array 
    }, [id]);

    // Finché il prodotto non è caricato mostro un loader
    if (!product) {
        return (
            <div className="container py-4">
                <p>Caricamento...</p>
            </div>
        );
    }
    return(
         <div className="container py-4">

            {/* Bottone torna indietro */}
            <Link to="/" className="btn btn-secondary mb-4">
                ← Torna ai prodotti
            </Link>

            <div className="row g-4">

                {/* Immagine */}
                <div className="col-md-4">
                    <img
                        src={
                            product.image && product.image.startsWith('http')
                                ? product.image
                                : `${import.meta.env.VITE_API_URL_BASE}/storage/${product.image}`
                        }
                        alt={product.name}
                        className="img-fluid rounded shadow-sm"
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    />
                </div>

                {/* Dettagli */}
                <div className="col-md-8">
                    <h2 className="fw-bold">{product.name}</h2>
                    <span className="badge bg-secondary mb-3">{product.category?.name}</span>
                    <p className="text-muted">{product.description}</p>
                    <h4 className="fw-bold text-primary mb-3">
                        € {parseFloat(product.price).toFixed(2)}
                    </h4>
                    <p><strong>Colore:</strong> {product.color}</p>

                    {/* Taglie */}
                    <div className="mb-3">
                        <strong>Taglie disponibili:</strong>
                        <div className="d-flex gap-2 mt-2">
                            {product.sizes.map((size) => (
                                <span key={size.id} className="badge bg-info text-dark fs-6">
                                    {size.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}