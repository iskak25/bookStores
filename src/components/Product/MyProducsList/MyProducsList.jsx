import { Grid } from "@material-ui/core";
import { Badge, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useProducts } from "../../../context/ProductContext";
import SideBar from "../../SideBar/SideBar";
import AllProduct from "../AllProduct/AllProduct";
import MyProduct from "../MyProduct/MyProduct";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MyProducsList = ({ products }) => {
  const { cart } = useProducts();

  const { getProducts } = useProducts();

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
  //   console.log(products);
  const {
    user: { email },
  } = useAuth();
  products = products.filter((item) => {
    return item.user === email;
  });
  // console.log(products);

  return (
    <>
      <TextField
        className="text-field"
        color="warning"
        label="Search"
        variant="standard"
        sx={{ margin: "2vw", width: "10vw" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to="/cart">
        <Button sx={{ my: 2, color: "white" }}>
          <Badge
            badgeContent={cart?.products ? cart.products.length : 0}
            color="secondary"
          >
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Link>
      {/* <SideBar /> */}
      <div className="blog-left">
        <Grid container spacing={6}>
          {products ? (
            products.map((item) => (
              <Grid item>
                <MyProduct item={item} key={item.id} />
              </Grid>
            ))
          ) : (
            <>
              <h2>..Loading</h2>
            </>
          )}
        </Grid>
      </div>
      <div></div>
    </>
  );
};

export default MyProducsList;
