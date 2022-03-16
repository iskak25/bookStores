import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyProducsList from "../Product/MyProducsList/MyProducsList";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import { useProducts } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import "../pages/MyProductPage.css";

const MyProductPage = () => {
  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(0);

  const productPerPage = 6;
  const location = useLocation();

  const pageCount = Math.ceil(products.length / productPerPage);

  const pageVisited = page * productPerPage;

  const paginateProducts = products.slice(
    pageVisited,
    pageVisited + productPerPage
  );
  const changePage = ({ selected }) => {
    setPage(selected);
  };

  useEffect(() => {
    getProducts();
  }, [location.search]);

  const {
    user: { email },
  } = useAuth();

  // email==  user: { email } ? (
  return (
    <>
      <div className="add_product">
        <Link to="/addproduct">
          <Button variant="">Add Product</Button>
        </Link>
        <MyProducsList products={paginateProducts} />
        <ReactPaginate
          previousLabel={<ArrowCircleLeftSharpIcon />}
          nextLabel={<ArrowCircleRightSharpIcon />}
          onPageChange={changePage}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          previousLinkClassName="previousBtn"
          nextLinkClassName="nextBtn"
          activeClassName="activeBtn"
          disableClassName="disabled"
        />
      </div>
    </>
  );
  // ) : null;
};

export default MyProductPage;
