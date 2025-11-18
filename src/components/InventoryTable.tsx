import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Pencil, Trash2 } from "lucide-react";

const InventoryTable = ({ products }: { products: any[] }) => {
  return (
    <Table border={1} className="w-full mt-4 border-collapse border rounded-lg">
      <TableHeader className="overflow-hidden bg-gray-100">
        <TableRow>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Status</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.sku}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell className="text-right">{product.quantity}</TableCell>
            <TableCell className="text-right">{product.status}</TableCell>
            <TableCell className="text-right">{product.price}</TableCell>
            <TableCell className="text-right flex items-center justify-end gap-4">
              <Link to={`/product/${product.id}`} style={{ color: "inherit" }}>
                <Pencil size={16} className="cursor-pointer" />
              </Link>
              <Trash2 size={16} color="red" className="cursor-pointer" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InventoryTable;
