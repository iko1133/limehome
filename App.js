import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import MapScreen from "components/pages/MapScreen";
import store from "store/";

export default function App() {
  return (
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  );
}

const WrappedApp = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <MapScreen />
    </ThemeProvider>
  );
};
