import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import MyPage from "./components/pages/Mypage/Mypage";
import Register from "./components/pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
