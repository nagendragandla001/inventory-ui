import { render } from "@/utils/customRender";
import InventoryStats from "../InventoryStats";
import { screen } from "@testing-library/react";

describe("InventoryStats", () => {
  it("renders all inventory statistics correctly", () => {
    render(<InventoryStats />);

    expect(screen.getByTestId("total-products")).toBeInTheDocument();
    expect(screen.getByText(4500)).toBeInTheDocument();
  });
});
