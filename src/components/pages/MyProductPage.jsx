import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MyProductPage = () => {
  return (
    <>
      <div className="add_product">
        <Link to="/addproduct">
          <Button variant="">Add Product</Button>
        </Link>
      </div>
    </>
  );
};

export default MyProductPage;
