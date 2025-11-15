import { Grid, Paper } from "@mui/material";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
const InventoryStats = () => {
  const PRODUCT_STATS = [
    {
      id: "total-products",
      title: "Total Products",
      value: 1500,
      icon: <ListAltOutlinedIcon fontSize="large" />,
      color: "#3f51b5",
    },
    {
      id: "total-items",
      title: "Total items",
      value: 4500,
      icon: <TrendingUpOutlinedIcon fontSize="large" />,
      color: "#009688",
    },
    {
      id: "out-of-stock",
      title: "Out of Stock",
      value: 200,
      icon: <ListAltOutlinedIcon fontSize="large" />,
      color: "#f44336",
    },
    {
      id: "low-stock",
      title: "Low Stock",
      value: 150,
      icon: <TrendingUpOutlinedIcon fontSize="large" />,
      color: "#ff9800",
    },
  ];
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 6, md: 12 }}
    >
      {PRODUCT_STATS.map((stat) => (
        <Paper
          key={stat.id}
          elevation={3}
          style={{ padding: 16, textAlign: "center", marginBottom: 16 }}
        >
          <div style={{ color: stat.color }}>{stat.icon}</div>
          <h3>{stat.title}</h3>
          <h2>{stat.value}</h2>
        </Paper>
      ))}
    </Grid>
  );
};
export default InventoryStats;
