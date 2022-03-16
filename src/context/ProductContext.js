import { CloseOutlined } from "@mui/icons-material";
import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};
const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    case ACTIONS.CHANGE_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    ///////
    case ACTIONS.GET_LIKE:
      return { ...state, like: action.payload };
    case ACTIONS.CHANGE_LIKE_LENGTH:
      return { ...state, likeLength: action.payload };
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  const navigate = useNavigate();

  const getProducts = async () => {
    // let { data } = await axios(JSON_API_PRODUCTS);
    let { data } = await axios(`${JSON_API_PRODUCTS}${window.location.search}`);
    // console.log(data);

    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  ///// CRUD /////////

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    getProducts();
    console.log(newProduct);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    let { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
    console.log(data);
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    getProducts();
  };

  //////CRUD END /////////

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  ///////// CART START ////

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (item) => item.item.id === product.id
    );
    if (productToFind.length == 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (item) => item.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  function deleteCartProducts(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    dispatch({
      type: ACTIONS.CHANGE_CART_LENGTH,
      payload: cart.products.length,
    });
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id == id);
      return newCart.length > 0 ? true : false;
    } else {
      cart = {
        product: [],
        totalPrice: 0,
      };
    }
  }

  ///////////// CRATD EHD  ////////////
  //////like /////////

  const getLike = () => {
    let like = JSON.parse(localStorage.getItem("like"));

    if (!like) {
      localStorage.setItem(
        "like",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      like = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_LIKE,
      payload: like,
    });
  };

  const addProductToLike = (product) => {
    let like = JSON.parse(localStorage.getItem("like"));
    if (!like) {
      like = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = like.products.filter(
      (item) => item.item.id === product.id
    );
    if (productToFind.length == 0) {
      like.products.push(newProduct);
    } else {
      like.products = like.products.filter(
        (item) => item.item.id !== product.id
      );
    }

    like.totalPrice = calcTotalPrice(like.products);

    localStorage.setItem("like", JSON.stringify(like));

    dispatch({
      type: ACTIONS.GET_LIKE,
      payload: like,
    });
  };

  const changeProductCountLike = (count, id) => {
    let like = JSON.parse(localStorage.getItem("like"));

    like.products = like.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    like.totalPrice = calcTotalPrice(like.products);
    localStorage.setItem("like", JSON.stringify(like));
    dispatch({
      type: ACTIONS.GET_LIKE,
      payload: like,
    });
  };

  function deleteCartProductsLike(id) {
    let like = JSON.parse(localStorage.getItem("like"));
    console.log(like.id);
    like.products = like.products.filter((elem) => elem.item.id !== id);
    like.totalPrice = calcTotalPrice(like.products);
    localStorage.setItem("like", JSON.stringify(like));
    getLike();
    dispatch({
      type: ACTIONS.CHANGE_LIKE_LENGTH,
      payload: like.products.length,
    });
  }

  function checkProductInLike(id) {
    let like = JSON.parse(localStorage.getItem("like"));
    if (like) {
      let newLike = like.products.filter((elem) => elem.item.id == id);
      return newLike.length > 0 ? true : false;
    } else {
      like = {
        product: [],
        totalPrice: 0,
      };
    }
  }

  const values = {
    getProducts,
    addProduct,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,

    products: state.products,
    productDetails: state.productDetails,

    fetchByParams,

    getCart,
    addProductToCart,
    changeProductCount,
    deleteCartProducts,
    checkProductInCart,
    cart: state.cart,

    getLike,
    addProductToLike,
    changeProductCountLike,
    deleteCartProductsLike,
    checkProductInLike,
    like: state.like,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
