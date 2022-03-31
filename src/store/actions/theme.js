import { SWITCH_THEME } from "store/actionTypes";

export const switchTheme = (baseTheme) => {
  return (dispatch) => {
    dispatch({
      type: SWITCH_THEME,
      baseTheme,
    });
  };
};
