import authService from '../services/authService';


export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';

const signIn = (email, password) => {
  return async (dispatch) => {
    const user = await authService.signIn(email, password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user
      }
    })
  }
}

const setUserData = () => {
  return async (dispatch) => {
    const user = await authService.signInWithToken();    
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user
      }
    })
  }
}

export { signIn, setUserData };