import React, { useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useProducts } from "../../../context/ProductContext";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const AllProductTeble = ({ item }) => {
  const { getProducts, addProductToLike, checkProductInLike } = useProducts();

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(item);
  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.lesson}</TableCell>
              <TableCell align="right">{item.task}</TableCell>
              <TableCell align="right">
                <a href={item.image}>
                  <img
                    src={item.image}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </a>
              </TableCell>
              <TableCell align="right">{item.language}</TableCell>
              <TableCell align="right">{item.description}</TableCell>
              <a href={item.vidio}>
                <Button>Смотреть Видео</Button>
              </a>
              <Button onClick={() => navigate(`/comment/${item.id}`)}>
                Оставить отзыв
              </Button>
              <IconButton onClick={() => addProductToLike(item)}>
                <FavoriteIcon
                  color={checkProductInLike(item.id) ? "error" : ""}
                />
              </IconButton>
            </TableBody>{" "}
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default AllProductTeble;
