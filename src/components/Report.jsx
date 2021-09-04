
function Report(props) {
    return (
        <>
            <div className="weather">
                <h1 className="cityHead">{props.name}</h1>
                <h2>{props.data.temp}°C</h2>
                <p>Min: {props.data.temp_min}°C | Max: {props.data.temp_max}</p>
            </div>
        </>
    );
}

export default Report;