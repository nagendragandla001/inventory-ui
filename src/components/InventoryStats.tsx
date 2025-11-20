import { NotebookPen, TrendingUp } from "lucide-react";
const InventoryStats = () => {
  const PRODUCT_STATS = [
    {
      id: "total-products",
      title: "Total Products",
      value: 1500,
      icon: <NotebookPen />,
      color: "#3f51b5",
    },
    {
      id: "total-items",
      title: "Total items",
      value: 4500,
      icon: <TrendingUp />,
      color: "#009688",
    },
    {
      id: "out-of-stock",
      title: "Out of Stock",
      value: 1000,
      icon: <NotebookPen />,
      color: "#f44336",
    },
    {
      id: "low-stock",
      title: "Low Stock",
      value: 150,
      icon: <NotebookPen />,
      color: "#ff9800",
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-8 px-2">
      {PRODUCT_STATS.map((stat) => (
        <div key={stat.id} className="p-4 border rounded shadow">
          <div className="flex items-center mb-2">
            <div className="text-2xl" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className="ml-2">
              <h3 className="text-lg font-semibold">{stat.title}</h3>
            </div>
            <div className="ml-auto">
              <p className="text-sm text-gray-600 font-semibold">
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default InventoryStats;
