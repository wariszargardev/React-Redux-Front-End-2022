import './App.css';
import {Provider} from "react-redux";
import store from "./store/store";
import CakeContainer from "./components/cake/CakeContainer";
import BuyNoOfCake from "./components/cake/BuyNoOfCake";
import HooksCakeContainer from "./components/cake/hooksCakeContainer";
import BuyNoOfCakeUsingHooks from "./components/cake/buyNoOfCakeUsingHooks";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Hard Code Single Quantity Buy</h1>
                <CakeContainer />
                <hr />

                <h1>Buy no of cake</h1>
                <BuyNoOfCake />
                <hr />

                <h1>Hook single quantity get</h1>
                <HooksCakeContainer />
                <hr />

                <h1>Hook Buy no of cake</h1>
                <BuyNoOfCakeUsingHooks />
                <hr />
            </div>
        </Provider>
    );
}

export default App;
