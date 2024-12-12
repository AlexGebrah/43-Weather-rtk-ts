import {useState} from "react";
import {fetchWeather} from "../features/api/weatherAction.ts";
import {useAppDispatch} from "../app/hooks.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const getCity = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (city.trim()) {
            dispatch(fetchWeather(city.trim()));
            setCity('');
        }
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;