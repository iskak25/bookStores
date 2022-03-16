import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { BiEditAlt } from "@react-icons/all-files/bi/BiEditAlt";
// import { useProducts } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { CardActionArea } from "@mui/material";

const Like = () => {
  const {
    deleteCartProductsLike,
    like,
    getLike,
    products,
    addProductToLike,
    changeProductCountLike,
    checkProductInLike,
  } = useProducts();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div style={{ margin: "10px" }}>
      <Card sx={{ maxWidth: 345 }}>
        {like.products.map((row) => (
          <CardActionArea>
            <CardHeader title={row.item.type} />
            <CardMedia
              component="img"
              height="194"
              image={row.item.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {row.item.task}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="delete" size="large">
                <DeleteIcon
                  onClick={() => deleteCartProductsLike(row.item.id)}
                />
              </IconButton>

              {/* <IconButton aria-label="share">
            <BiEditAlt onClick={() => navigate(`/edit/${row.item.id}`)} />
          </IconButton> */}
              {/* <IconButton onClick={() => addProductToCart(row.item)}>
            <ShoppingCartIcon
              color={checkProductInCart(row.item.id) ? "secondary" : ""}
            /> */}
              {/* </IconButton> */}
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
                  <a href={row.item.vidio}>go to video</a>
                </Typography>
                <Typography paragraph>{row.item.description}</Typography>
              </CardContent>
            </Collapse>
          </CardActionArea>
        ))}
      </Card>
    </div>
  );
};

export default Like;
