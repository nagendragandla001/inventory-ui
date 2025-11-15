import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import React from "react";
import { createProduct } from "../services/product-service";

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
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "40ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            id="outlined-disabled"
            label="SKU"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            type="number"
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <TextField
            type="number"
            label="Price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <FormControl fullWidth sx={{ m: 1, width: "40ch" }}>
            <InputLabel id="demo-simple-select-label">Stock</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stock}
              label="Stock"
              onChange={(e) => {
                console.log(e.target.value);
                setStock(e.target.value);
              }}
            >
              <MenuItem value="IN_STOCK">In Stock</MenuItem>
              <MenuItem value="LOW_STOCK">Low Stock</MenuItem>
              <MenuItem value="OUT_OF_STOCK">Out of Stock</MenuItem>
              <MenuItem value="DISCONTINUED">Discontinued</MenuItem>
              <MenuItem value="UNAVAILABLE">Unavailable</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            sx={{ m: 1 }}
            onClick={handleSubmit}
          >
            Save Product
          </Button>
          <Button variant="outlined" color="secondary" sx={{ m: 1 }}>
            Cancel
          </Button>
        </div>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Product created successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewProductPage;
