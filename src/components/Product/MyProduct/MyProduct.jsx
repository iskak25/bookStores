import React from "react";
// import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { BiEditAlt } from "@react-icons/all-files/bi/BiEditAlt";
import { useProducts } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MyProduct = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);

  const navigate = useNavigate();

  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
  // deleteProduct(item.id);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={item.type} />
        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.task}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon onClick={() => deleteProduct(item.id)} />
          </IconButton>

          <IconButton aria-label="share">
            <BiEditAlt onClick={() => navigate(`/edit/${item.id}`)} />
          </IconButton>
          <IconButton onClick={() => addProductToCart(item)}>
            <ShoppingCartIcon
              color={checkProductInCart(item.id) ? "secondary" : ""}
            />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <a href={item.vidio}>go to video</a>
            </Typography>
            <Typography paragraph>{item.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default MyProduct;
