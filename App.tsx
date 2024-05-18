import { Provider } from "react-redux";

// redux
import { store } from "./src/redux/store";

// navigation
import MainAppNavigator from "./src/navigation/main-navigator";

export default function App() {
  return (
    <Provider
      store={store}
    >
      <MainAppNavigator 
      
      />
    </Provider>
  );
}
