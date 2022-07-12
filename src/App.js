import React, {Component} from 'react';

import Posts from "./components/Posts";
import Comments from "./components/Comments";


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'App'}>
                <Posts/>
                <Comments/>
            </div>
        );
    }
}

export default App;