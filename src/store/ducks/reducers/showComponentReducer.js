import {SHOW_LOGIN_COMPONENT} from '../actions/types'

const initialState = {
  loginContainer: false,
};

const showComponentReducer = (state = initialState, action) => {
    switch (action.type) {
          
    case SHOW_LOGIN_COMPONENT: 
      return {
          ...state,
              loginContainer:!state.loginContainer,
        };
    default:
      return state;
  }
};

export default showComponentReducer;
