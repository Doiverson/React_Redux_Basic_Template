
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

import Main from "./Main";
import Main_Hook from "./Main_Hook";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Main/> */}
        <Main_Hook/>
      </div>
    </Provider>
  );
}

export default App;
