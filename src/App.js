import {Link, Route, Routes} from "react-router-dom";

import './App.css';
import Todos from "./pages/Todos";
import Albums from "./pages/Albums";
import Comments from "./pages/Comments";
import Posts from "./pages/Posts";

function App() {
    return <div>
        <div>
            <h2>Menu</h2>
            <ul>
                <li><Link to={'Todos'}>Todos</Link></li>
                <li><Link to={'Albums'}>Albums</Link></li>
                <li><Link to={'Comments'}>Comments</Link></li>
            </ul>
        </div>
        <div>
            <Routes>
                <Route path={'Todos'} element={<Todos/>}/>
                <Route path={'Albums'} element={<Albums/>}/>
                <Route path={'Comments'} element={<Comments/>}/>
                <Route path={'Comments/:postId'} element={<Posts/>}/>
            </Routes>
        </div>
    </div>
}

export default App;
