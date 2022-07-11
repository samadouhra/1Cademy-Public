import { AuthState, DispatchAuthActions } from "src/knowledgeTypes";

export const INITIAL_STATE: AuthState = {
  isAuthenticated: false,
  user: null
};

function authReducer(state: AuthState, action: DispatchAuthActions): AuthState {
  switch (action.type) {
    case "updateUser":
      return { ...state, user: { ...action.payload } };
    case "loginSucess":
      return { ...state, user: { ...action.payload }, isAuthenticated: true };
  }
}

export default authReducer;
