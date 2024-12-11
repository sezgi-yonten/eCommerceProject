import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageContent from "../components/layout/PageContent";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const products = [
    { id: 1, name: "Product 1", price: "29.99", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "19.99", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "49.99", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      <Header />
      <PageContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </PageContent>
      <Footer />
    </div>
  );
};

export default HomePage;
