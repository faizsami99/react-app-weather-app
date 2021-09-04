
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Report from './Report';

function Temprature() {

    const [cityName, setCityName] = useState("Mumbai");
    const [cityWeather, setCityWeather] = useState({});
    
    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e70e14a733093857ac4780a58885d82e&units=metric`);
            setCityWeather(response.data.main);
        }

        getData();

    }, [cityName]);

    return (
        <>
            <section className="temp">
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
                <Report name={cityName} data={cityWeather}/>
            </section>
        </>
    );
}

export default Temprature;
