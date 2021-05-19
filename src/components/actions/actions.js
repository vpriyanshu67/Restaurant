export const getAllGenres = () => ({
    type: "GET_ALL", 
  });



  export const selectedGenre = (genre) => ({
    type: "SET_GENRE",
    payload: genre,
  });
  

  export const addtoCart = (menu) => ({
      type : "ADD_CART",
      payload: menu,
  });

  export const updateAddCart = (menu) => ({
      type: "UPDATE_ADD_CART",
      payload: menu
  });

    export const updateSubCart = (menu) => ({
      type: "UPDATE_SUB_CART",
      payload: menu
  });

  

  export const removeCartItem = (cart) => ({
    type: "REMOVE_CART_ITEM",
    payload: cart
});

export const removeCartAll = () => ({
   type: "REMOVE_CART_ALL"
});

