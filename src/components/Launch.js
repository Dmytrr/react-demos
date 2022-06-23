import './Launch.css';

export default function Launch({launch}) {
    return (
        <div>
            {launch.mission_name}
            <br/>
            {launch.launch_year}
            <br/>
            <img src={launch.links.mission_patch_small}/>
        </div>
    )
}