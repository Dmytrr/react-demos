import './App.css';
import RickAndMorty from "./components/RickAndMorty";

function App() {
    return (
        <div className={"wrap"}>
            <RickAndMorty name={"Rick Sanchez"} id={1} status={"Alive"} species={"Human"} gender={"Male"}
                          image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
            <RickAndMorty name={"Morty Smith"} id={2} status={"Alive"} species={"Human"} gender={"Male"}
                          image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}/>
            <RickAndMorty name={"Summer Smith"} id={3} status={"Alive"} species={"Human"} gender={"Female"}
                          image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}/>
            <RickAndMorty name={"Beth Smith"} id={4} status={"Alive"} species={"Human"} gender={"Female"}
                          image={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}/>
            <RickAndMorty name={"Jerry Smith"} id={5} status={"Alive"} species={"Human"} gender={"Male"}
                          image={"https://rickandmortyapi.com/api/character/avatar/5.jpeg"}/>
            <RickAndMorty name={"Abadango Cluster Princess"} id={6} status={"Alive"} species={"Alien"} gender={"Female"}
                          image={"https://rickandmortyapi.com/api/character/avatar/6.jpeg"}/>
        </div>
    )
}

export default App;
