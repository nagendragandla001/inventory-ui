import { http, HttpResponse } from "msw";
const API_URL = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${API_URL}/api/products`, () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 10,
        sku: "SKU1",
        category: "Category1",
        status: "Available",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        quantity: 20,
        sku: "SKU2",
        category: "Category2",
        status: "Out of Stock",
      },
    ]);
  }),
  http.get(`${API_URL}/api/products/:id`, (req) => {
    const { id }: any = req.params;
    return HttpResponse.json({
      id,
      name: `Product ${id}`,
      price: 100 * id,
      quantity: 10 * id,
      sku: `SKU${id}`,
      category: `Category${id}`,
      status: id % 2 === 0 ? "Available" : "Out of Stock",
    });
  }),
];
