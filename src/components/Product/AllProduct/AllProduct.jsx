import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../context/ProductContext";
import SideBar from "../../SideBar/SideBar";
import AllProductTeble from "../AllProductTeble/AllProductTeble";
import { FcLike } from "@react-icons/all-files/fc/FcLike";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const { products, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          className="text-field"
          label="Search"
          variant="standard"
          sx={{ margin: "2vw", width: "10vw" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SideBar />
        <Link to="/like">
          <h2>
            <FcLike />
          </h2>
        </Link>
      </div>

      <Grid container spacing={6}>
        {products ? (
          products.map((item) => (
            <Grid item>
              <AllProductTeble item={item} key={item.id} />
            </Grid>
          ))
        ) : (
          <>
            <h2>..Loading</h2>
          </>
        )}
      </Grid>
    </div>
  );
};

export default AllProduct;
