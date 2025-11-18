import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { fetchProducts } from "../services/product-service";
import { Button } from "./ui/button";
import InventoryTable from "./InventoryTable";

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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/new-product" style={{ textDecoration: "none" }}>
          <Button className="cursor-pointer">
            <Plus /> Add a new Product
          </Button>
        </Link>
      </div>

      <InventoryTable products={products} />
    </section>
  );
}
