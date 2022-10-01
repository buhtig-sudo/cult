import "./App.css";
import products from "./Api/products";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JavaScript iteration in the real world</h1>
      </header>
      <ProductList products={products} />
      <footer>
        <p>
          Project by Syk Houdeib{" "}
          <a href="https://twitter.com/Syknapse">@Syknapse</a> for a series of
          articles on{" "}
          <a href="https://cult.honeypot.io/contributors/syk-houdeib">
            .cult by Honeypot
          </a>
        </p>
        <p>
          <a href="https://github.com/Syknapse/iteration_in_the_real_world">
            View project on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
