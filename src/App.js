import Header from "./Header";
import "./App.css";
import "./index.css"
import "./Card.css";
import {data} from "./data.js";
import Card from "./Cards.jsx";
export default function App() {
  return (
    <div id="root">
      <Header/>
      <main>
        {data.map(product => (
          <Card key={product.id}
          name = {product.name}
          price = {product.price}
          description = {product.description}
          stock = {product.stock}
          newCollection = {product.newCollection}
          imgProduct = {product.imgs.imgProduct}
          imgSoldOut = {product.imgs.imgSoldOut}
          imgStar = {product.imgs.imgStar}
          />
        ))}
      </main>
    </div>
  );
}


