import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={  
                    product.image && product.image.startsWith('http')
                    ? product.image
                    : `${import.meta.env.VITE_API_URL_BASE}/storage/${product.image}`
                }
                className="card-img-top"
                alt={product.name}
                style={{ height: '350px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.category?.name}</h6>
                <p className="card-text fw-bold text-primary mt-auto">
                    € {parseFloat(product.price).toFixed(2)}
                </p>
                <Link to={`/products/${product.id}`} className="btn btn-dark mt-2">
                    Vedi dettaglio
                </Link>
            </div>
        </div>
    );
}