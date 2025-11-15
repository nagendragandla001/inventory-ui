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
      columns={{ xs: 1, sm: 4, lg: 12 }}
      sx={{ marginTop: 2, marginBottom: 4, paddingLeft: 2, paddingRight: 2 }}
    >
      {PRODUCT_STATS.map((stat) => (
        <Grid key={stat.id} size={{ xs: 2, sm: 4, md: 3 }}>
          <Paper
            key={stat.id}
            elevation={3}
            style={{
              padding: 16,
              textAlign: "start",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <h3>{stat.title}</h3>
              <div style={{ color: stat.color }}>{stat.icon}</div>
            </div>
            <h2>{stat.value}</h2>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
export default InventoryStats;
