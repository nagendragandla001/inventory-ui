import { render } from "@/utils/customRender";
import InventoryGrid from "../InventoryGrid";
import { screen } from "@testing-library/react";

describe("InventoryGrid", () => {
  it("renders correctly and fetches products", async () => {
    // Arrange & Act
    render(<InventoryGrid />);

    // Assert
    expect(await screen.queryByText("Product 3")).not.toBeInTheDocument();
    expect(await screen.findByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("SKU1")).toBeInTheDocument();
  });

  it("displays AddNewProduct components", () => {
    // Arrange & Act
    render(<InventoryGrid />);

    // Assert
    expect(screen.getByText("New Product")).toBeInTheDocument();
    expect(screen.getByText("Another Product")).toBeInTheDocument();
  });
});
