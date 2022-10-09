import './App.css';
import {Provider} from "react-redux";
import store from "./store/store";
import CakeContainer from "./components/cake/CakeContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer />
            </div>
        </Provider>
    );
}

export default App;
