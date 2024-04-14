export interface UserTokenState {
  token: string | null;
  role: string | null;
}

const initialState: UserTokenState = {
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
};

type UserTokenAction =
  | { type: "SET_TOKEN"; payload: string }
  | { type: "SET_ROLE"; payload: string };

const userTokenReducer = (
  state: UserTokenState = initialState,
  action: UserTokenAction
): UserTokenState => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "SET_ROLE":
      return { ...state, role: action.payload };
    default:
      return state;
  }
};

export const setToken = (token: string): UserTokenAction => ({
  type: "SET_TOKEN",
  payload: token,
});
export const setRole = (role: string): UserTokenAction => ({
  type: "SET_ROLE",
  payload: role,
});

export default userTokenReducer;
