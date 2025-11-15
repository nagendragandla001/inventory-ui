import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(
  id: number,
  product: string,
  sku: string,
  category: string,
  quantity: number,
  status: string,
  price: number
) {
  return { id, product, sku, category, quantity, status, price };
}

const rows = [
  createData(1, "TV", "SKU001", "Electronics", 159, "In Stock", 6.0),
  createData(2, "Radio", "SKU002", "Electronics", 237, "In Stock", 9.0),
  createData(3, "T-Shirt", "SKU003", "Clothing", 262, "Out of Stock", 16.0),
  createData(4, "Cupcake", "SKU004", "Desserts", 305, "In Stock", 3.7),
  createData(5, "Chair", "SKU005", "Furniture", 356, "In Stock", 16.0),
];

export default function InventoryGrid() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">SKU</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="right">{row.sku}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <EditOutlinedIcon
                  style={{ cursor: "pointer", marginRight: 8 }}
                />
                <DeleteIcon style={{ cursor: "pointer", color: "red" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
