import PageNav from '../../components/PageNav/PageNav';
import ProductCart from '../../components/ProductCartShop/ProductCart';

function Shop() {
  return (
    <>
      <PageNav />
      <div className="container my-5">
        <h1 className="mb-4">Produkty</h1>
        <div className="d-flex flex-wrap gap-4">
          <ProductCart name="Kontener 3t" price={2999} />
          <ProductCart name="BIGBAG 500kg" price={549} />
          <ProductCart name="Worki" price={59} />
        </div>
      </div>
    </>
  );
}

export default Shop;