
function CityInput() {
    return (
        <>
            <div className="inputDiv mar">
                <div className="input">
                    <input type="text" className="city" name="city"
                        value={cityName}
                        onChange={(event) => {
                            setCityName(event.target.value);
                        }}
                    />
                </div>
            </div>
        </>
    );

}