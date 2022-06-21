import logo from './logo.svg';
import './App.css';
import Simpsons from "./components/Simpsons";
import RickAndMorty from "./components/RickAndMorty";

function App() {
    return (
        <div className="wrap">
            <div className="simpsons">
                <Simpsons name={'Homer'}
                          source={'https://i.pinimg.com/originals/36/f3/76/36f376dcc85528273912ba4cfb54a1f2.png'}/>
                <Simpsons name={'Marge'}
                          source={'https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Marge_Simpson.png/217px-Marge_Simpson.png'}/>
                <Simpsons name={'Bart'} source={'https://slovnet.ru/wp-content/uploads/2019/01/3-2.png'}/>
                <Simpsons name={'Lisa'}
                          source={'https://i.pinimg.com/originals/03/05/1e/03051e7071e4d8a8929dcee946244e7d.png'}/>
                <Simpsons name={'Maggie'} source={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
            </div>
            <div className="rickandmorty">

            </div>
        </div>
    );
}

export default App;
