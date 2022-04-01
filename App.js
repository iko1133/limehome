import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import MapScreen from "components/pages/MapScreen";
import store from "store/";

/**
 * An app that shows list of properties available in Berlin, alongside with detailed information of them
 */
export default function App() {
  return (
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  );
}

// App wrapped to get access store
const WrappedApp = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <MapScreen />
    </ThemeProvider>
  );
};
