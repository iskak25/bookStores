import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../context/ProductContext";
// import { useProducts } from "../../contexts/ProductContext";
// import "./styles/AddProduct.css";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState({
    language: "",
    lesson: "",
    type: "",
    image: "",
    vidio: "",
    description: "",
    task: "",
    comment: [],
  });
  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);
  return (
    <div>
      <Box sx={{ height: "100vh", padding: "20vh auto" }}>
        <center variant="h6" gutterBottom>
          EDIT PRODUCT
        </center>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            margin: "10vh auto",
            boxShadow: 3,
            borderRadius: 3,
            // bgcolor: "#ffcc80",
          }}
        >
          <form>
            <TextField
              value={product?.lesson}
              fullWidth
              id="outlined-basic"
              label="уроки по"
              variant="outlined"
              name="lesson"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product?.task}
              fullWidth
              id="outlined-basic"
              label="задание"
              variant="outlined"
              name="task"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product?.type}
              fullWidth
              id="outlined-basic"
              label="тип"
              variant="outlined"
              name="type"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product?.image}
              fullWidth
              id="outlined-basic"
              label="фото"
              variant="outlined"
              name="image"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product?.vidio}
              fullWidth
              id="outlined-basic"
              label="видио"
              variant="outlined"
              name="vidio"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product?.description}
              fullWidth
              id="outlined-basic"
              label="объяснения "
              variant="outlined"
              name="description"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <Stack direction="row" spacing={2}>
              <Button
                id="button"
                sx={{
                  // bgcolor: "#263238",
                  borderColor: "error.main",
                  fontFamily: "Monospace",
                }}
                // color="error"
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => {
                  saveEditedProduct(product);
                  navigate("/myproduct");
                }}
              >
                EDIT PRODUCT
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default EditProduct;
