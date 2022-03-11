import { Box, Button, Grid, TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useProducts } from "../../context/ProductContext";

const top100Films = [
  { label: "Видио" },
  { label: "Фото" },
  { label: "Фото и Видио" },
];

const top100Film = [{ label: "Кыргыз" }, { label: "Русский" }];

const AddProduct = () => {
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    language: "",
    lesson: "",
    type: "",
    img: "",
    vidio: "",
    description: "",
  });

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };

    setProduct(obj);
  };

  return (
    <div>
      <Box>
        <Grid item xs={12} md={6}>
          <form>
            <Autocomplete
              disablePortal
              id="combo-box-demo1 "
              options={top100Film}
              sx={{ width: 300 }}
              name="language"
              renderInput={(params) => <TextField {...params} label="Язык" />}
              onChange={handleInp}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="уроки по"
              variant="outlined"
              name="lesson"
              onChange={handleInp}
            />{" "}
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              name="type"
              renderInput={(params) => <TextField {...params} label="Тип" />}
              onChange={handleInp}
            />
            <p>
              <label for="avatar">добавите фото </label>
              <input
                type="file"
                id="avatar"
                name="img"
                accept="image/png, image/jpeg"
                onChange={handleInp}
              ></input>
            </p>
            <p>
              <label for="videoFile">добавите видио</label>
              <input
                type="file"
                id="videoFile"
                name="vidio"
                accept="video/*"
                onChange={handleInp}
              ></input>
            </p>
            <TextField
              fullWidth
              id="outlined-basic"
              label="объяснения "
              variant="outlined"
              name="description"
              onChange={handleInp}
            />{" "}
            <Stack direction="row" spacing={2}>
              <Button
                id="button"
                variant="outlined"
                color="error"
                size="large"
                fullWidth
                onClick={() => {
                  addProduct(product);
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
