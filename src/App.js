import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import MyPage from "./components/pages/Mypage/Mypage";
import Register from "./components/pages/Register/Register";
import Fav from "./components/pages/Fav/Fav";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/fav" component={Fav} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
