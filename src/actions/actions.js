// userActions.js
export const login = (user) => ({
  type: 'ON_LOGIN',
  payload: user,
});

export const logout = () => ({
  type: 'ON_LOGOUT',
});

// userReducer.js
const initialState = {
  isLoggedIn: false,
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        username: null,
      };
    case 'ON_LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        username: '',
      };
    default:
      return state;
  }
};


export default userReducer;