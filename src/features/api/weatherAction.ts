import {api_key, base_url} from "../../utils/constants.ts";
import {putWeather} from "../weather/weatherSlice.ts";
import {putMessage} from "../message/messageSlice.ts";
import {AppDispatch} from "../../app/store.ts";

export const fetchWeather = (city: string) =>  async (dispatch: AppDispatch)=> {
    try {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Enter correct city name');
        }

        dispatch(putWeather({
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: new Date(data.sys.sunset * 1000),
        }));
        dispatch(putMessage(''));
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            dispatch(putMessage(error.message));
        } else {
            console.error("An unexpected error occurred");
            dispatch(putMessage("An unexpected error occurred"));
        }
    }
};

