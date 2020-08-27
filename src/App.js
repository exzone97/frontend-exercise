import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import HomeContainer from './containers/HomeContainer/HomeContainer';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <Route exact path="/" component={HomeContainer} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}
export default App