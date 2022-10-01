const codeSnippets = {
  ALL: {
    code: "",
    description: "// Show all products",
  },
  FILTER: {
    type: "array.filter()",
    code: 'products.filter( (product) => product.market === "Great Mall")',
    description: "// Show only products from the Great Mall",
    href: {
      github:
        "https://github.com/Syknapse/iteration_in_the_real_world/blob/main/src/components/ProductList/ProductList.jsx#L15",
      article: "https://cult.honeypot.io/contributors/syk-houdeib",
    },
  },
  MAP: {
    type: "array.map()",
    code: "products.map((product) => ({...product, price: (product.price - (product.price * 10) / 100).toFixed(2)})",
    description: "// Apply a 10% discount on all products",
    href: {
      github:
        "https://github.com/Syknapse/iteration_in_the_real_world/blob/main/src/components/ProductList/ProductList.jsx#L23",
      article: "https://cult.honeypot.io/contributors/syk-houdeib",
    },
  },
  FOREACH: {
    type: "array.forEach()",
    code: "products.forEach((product) => localStorage.setItem(product.name, product.price)",
    description:
      "// Save each product's price in local storage (view in dev tools > application)",
    href: {
      github:
        "https://github.com/Syknapse/iteration_in_the_real_world/blob/main/src/components/ProductList/ProductList.jsx#L35",
      article: "https://cult.honeypot.io/contributors/syk-houdeib",
    },
  },
};
export default codeSnippets;
