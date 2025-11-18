import React from "react";
import { createProduct } from "../services/product-service";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const NewProductPage = () => {
  const [productName, setProductName] = React.useState("");
  const [sku, setSku] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [stock, setStock] = React.useState("IN_STOCK");

  const [open, setOpen] = React.useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async () => {
    const requestBody = {
      name: productName,
      sku: sku,
      category: category,
      quantity: quantity,
      price: price,
      stock: stock,
    };

    console.log("Submitting product:", requestBody);

    try {
      const resp = await createProduct(requestBody);
      setOpen(true);
      console.log("Product created successfully:", resp);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center mb-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Add a new Product</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Field>
                <FieldLabel htmlFor="product">Product</FieldLabel>
                <Input
                  id="product"
                  placeholder="Enter a Product Name"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="sku">SKU</FieldLabel>
                <Input id="sku" placeholder="Enter a SKU" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="category">Category</FieldLabel>
                <Input id="category" placeholder="Enter a Category" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
                <Input id="quantity" placeholder="Enter a Quantity" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="price">Price</FieldLabel>
                <Input id="price" placeholder="Enter a Price" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="stock">Stock</FieldLabel>
                <Select defaultValue="IN_STOCK">
                  <SelectTrigger id="cstock">
                    <SelectValue placeholder="Select the Stock" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IN_STOCK">In Stock</SelectItem>
                    <SelectItem value="LOW_STOCK">Low Stock</SelectItem>
                    <SelectItem value="OUT_OF_STOCK">Out of Stock</SelectItem>
                    <SelectItem value="DISCONTINUED">Discontinued</SelectItem>
                    <SelectItem value="UNAVAILABLE">Unavailable</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="secondary" className="cursor-pointer">
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="cursor-pointer">
              Save Product
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default NewProductPage;
