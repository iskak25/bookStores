import { useTheme } from "@emotion/react";
import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductContext";

const Comment = () => {
  // const { addProduct, products, getProducts } = useProducts();
  const [com, setCom] = useState({});

  const { getProductDetails, productDetails, saveEditedProduct, addComment } =
    useProducts();

  const { user } = useAuth();

  // const {
  //   user: { email },
  // } = useAuth();

  const handleInput = (e) => {
    // if (productDetails) {
    let d = new Date(Date.now());
    d.toString();
    setCom({
      email: user.email,
      comment: e.target.value,
      date: new Date().toLocaleString(),
    });
    // console.log(com);
    // }
  };

  const theme = useTheme();

  const {
    user: { email },
  } = useAuth();

  const { id } = useParams();

  const [productComment, setProductComment] = React.useState({
    comments: "",
  });

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    getProductDetails(id);
  }, [com]);

  useEffect(() => {
    setProductComment(productDetails);
  }, [productDetails]);

  console.log(productDetails, "from Details");

  //   productDetails.map((com) => {
  //     console.log(com, "comment@!!");
  //   });
  // });

  ///!

  const sendComment = async (e, id, productos) => {
    let newComment = [...productos.comments];
    newComment.push(com);
    let productWithComment = {
      ...productos,

      comments: newComment,
    };
    const data = await saveEditedProduct(productWithComment);
    getProductDetails();
  };

  console.log(productDetails.comments);

  productDetails && productDetails.comments
    ? productDetails.comments.map((com) => {
        console.log(com, "comment@!!");
      })
    : console.log("did not work");

  return (
    <div>
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        name="comment"
        onChange={handleInput}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        name="userComent"
        value={email}
        onChange={handleInput}
      />
      <Button
        sx={{ color: "#000" }}
        onClick={(e) => sendComment(e, productComment.id, productComment)}
      >
        Оставить отзыв
      </Button>
      <Link to="/allproduct">
        <Button sx={{ color: "#000" }}>Назат </Button>
      </Link>

      {productDetails && productDetails.comments ? (
        productDetails.comments.map((com) => (
          <div
            style={{
              borderRadius: "25px",
              borderColor: "#000",
              margin: "10px",
            }}
          >
            <p> отзыв от {com.email}</p>
            <p> {com.comment}</p>
            <p>дата отзыва{com.date}</p>
          </div>
        ))
      ) : (
        <p>Comments are loading</p>
      )}
    </div>
  );
};

export default Comment;
