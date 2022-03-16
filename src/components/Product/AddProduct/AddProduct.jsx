import { Box, Button, Grid, TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useProducts } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const [product, setProduct] = useState({
    language: "",
    lesson: "",
    type: "",
    image: "",
    vidio: "",
    description: "",
    task: "",
    user: email,
    comments: [],
  });
  const handleInp = (e) => {
    if (e.target.name === "language") {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };

      setProduct(obj);
    } else if (e.target.name === "type") {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };

      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };

      setProduct(obj);
    }
  };

  return (
    <div>
      <Box>
        <Grid item xs={12} md={6}>
          <form>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Язык"
              variant="outlined"
              name="language"
              onChange={handleInp}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="уроки по"
              variant="outlined"
              name="lesson"
              onChange={handleInp}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="задание"
              variant="outlined"
              name="task"
              onChange={handleInp}
            />{" "}
            <TextField
              fullWidth
              id="outlined-basic"
              label="тип"
              variant="outlined"
              name="type"
              onChange={handleInp}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="фото"
              variant="outlined"
              name="image"
              onChange={handleInp}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="видио"
              variant="outlined"
              name="vidio"
              onChange={handleInp}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="объяснения "
              variant="outlined"
              name="description"
              onChange={handleInp}
            />
            <Stack direction="row" spacing={2}>
              <Button
                id="button"
                variant="outlined"
                color="error"
                size="large"
                fullWidth
                onClick={() => {
                  addProduct(product);
                  navigate("/myproduct");
                }}
              >
                CREATE PRODUCT
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default AddProduct;
