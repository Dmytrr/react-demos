export default function RickAndMorty(props) {
    const {name, source} = props;
    const char = 'character';
    return (
        <div className={char}>
            <h2>{name}</h2>
            <img src={source}/>
        </div>
    );
}