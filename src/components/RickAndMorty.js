export default function RickAndMorty(props) {
    const {name, id, status, species, gender, source} = props;
    const char = 'character';
    return (
        <div className={char}>
            <h2>{name}</h2>
            <h3>{id}</h3>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <img src={source}/>
        </div>
    );
}