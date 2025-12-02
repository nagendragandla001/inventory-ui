import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const AddNewProduct = ({ name, link }: { name: string; link: string }) => {
  const handleClick = () => {
    console.log(`Navigating to ${link}`);
  };
  return (
    <div className="flex justify-end mb-4">
      {/* <Link to={link} style={{ textDecoration: "none" }}> */}
      <Button className="cursor-pointer" onClick={handleClick}>
        <Plus /> {name}
      </Button>
      {/* </Link> */}
    </div>
  );
};

export default AddNewProduct;
