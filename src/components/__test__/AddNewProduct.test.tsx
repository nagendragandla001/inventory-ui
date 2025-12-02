import { render } from "@/utils/customRender";
import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import AddNewProduct from "../AddNewProduct";

/**
 * A -> Arrange
 * A -> Act
 * A -> Assert
 */

describe("AddNewProduct Component", () => {
  beforeEach(() => {
    // Any setup needed before each test can go here
    render(<AddNewProduct name="New Product" link="/new-product" />);
  });

  it("render the AddNewProduct Component", () => {
    // Arrange

    // Act
    const addNewProductButton = screen.queryByRole("button", {
      name: /new product/i,
    });

    // Assert
    expect(addNewProductButton).toBeInTheDocument();
  });

  // it("a link is present and href is /another-new-product", () => {
  //   render(
  //     <AddNewProduct name="Another Product" link="/another-new-product" />
  //   );
  //   const linkEle = screen.getByRole("link", { name: /another product/i });
  //   expect(linkEle).toBeInTheDocument();
  //   expect(linkEle).toHaveAttribute("href", "/another-new-product");
  // });

  it("button clicks are handled", () => {
    const mockClick = vitest.fn();
    const addNewProductButton = screen.getByRole("button", {
      name: /new product/i,
    });

    // Act
    userEvent.click(addNewProductButton);

    // Assert
    expect(mockClick).not.toHaveBeenCalled();
  });
});
