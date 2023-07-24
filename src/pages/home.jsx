import "../App.css";
import Hero from "../components/hero";
import Categories from "../components/categories";
import HomeProducts from "../components/product-collection";
import Promo from "../components/promo";
import Category from "../components/category";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HomeProducts />
      <Promo />
      <Category />
    </>
  );
}

export default Home;
