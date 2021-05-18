import React from "react";
import About from "./About";
import Home from "./Home";
import Plus from "./Plus";
import { Route, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">어바웃</Link>
                </li>
                <li>
                    <Link to="/plus">플러스</Link>
                </li>
            </ul>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/plus" component={Plus} />
        </div>
    );
}

export default App;
