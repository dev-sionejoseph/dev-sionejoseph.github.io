//auth

export const authTypes = {
    LOGGED_IN: "logged_in",
    LOGGED_OUT: "logged_out"
}

export const logIn = () =>({
    type: authTypes.LOGGED_IN,
})

export const logOut = () =>({
    type: authTypes.LOGGED_OUT,
})


//currentUser

export const userTypes = {
    SET_CURRENT_USER: "set_current_user",
    SET_USER_ROLE: "set_user_role",
    // GET_USER_ID = "get_user_id",
    // GET_USER_ROLE = "get_user_role"
}

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
  });

export const setRole = role => ({
    type: userTypes.SET_USER_ROLE,
    payload: role
  });

//cart

export const cartTypes = {
    ADD_ITEM: "add_item",
    REMOVE_ITEM: "remove_item"
}

export const addToCart = item => ({
    type: userTypes.ADD_ITEM,
    payload: item
  });

export const removeFromCart = item => ({
    type: userTypes.REMOVE_ITEM,
    payload: item
  });

