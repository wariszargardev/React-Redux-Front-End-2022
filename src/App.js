import './App.css';
import {Provider} from "react-redux";
import store from "./store/store";
import CakeContainer from "./components/cake/CakeContainer";
import BuyNoOfCake from "./components/cake/BuyNoOfCake";
import HooksCakeContainer from "./components/cake/hooksCakeContainer";
import BuyNoOfCakeUsingHooks from "./components/cake/buyNoOfCakeUsingHooks";
import IceCreamContainer from "./components/iceCream/IceCreamContainer";
import UserLists from "./components/users/UserLists";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Async action</h1>
                <UserLists />
                <hr />

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


                <h1>Ice cream setup using hooks</h1>
                <IceCreamContainer />
                <hr />
            </div>
        </Provider>
    );
}

export default App;
