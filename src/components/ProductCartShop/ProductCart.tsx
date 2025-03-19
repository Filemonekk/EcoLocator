import { useState } from "react"

type ProductCartProps = {
    name: string;
    price: number;
  };
  const ProductCart: React.FC<ProductCartProps> = ({ name, price }) => {
    const [quantity, setQuantity] = useState(0);

    const addToCart = () => setQuantity(quantity + 1);
    const removeFromCart = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                className="img-fluid rounded-start"
                alt="Produkt"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Cena: {price} PLN</p>
                <p className="card-text">W koszyku: {quantity} szt.</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary btn-sm" onClick={addToCart}>
                    Dodaj
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={removeFromCart}
                    disabled={quantity === 0}
                  >
                    Usuń
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductCart;
    