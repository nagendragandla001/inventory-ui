import React, { useEffect } from "react";
import { fetchProducts } from "../services/product-service";
import InventoryTable from "./InventoryTable";
import AddNewProduct from "./AddNewProduct";

export default function InventoryGrid() {
  const [products, setProducts] = React.useState([]);

  const getAllProducts = async () => {
    try {
      const response = await fetchProducts();
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products in component:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section style={{ padding: 16 }}>
      <AddNewProduct name="New Product" link="/new-product" />
      <AddNewProduct name="Another Product" link="/another-product" />
      <InventoryTable products={products} />
    </section>
  );
}
