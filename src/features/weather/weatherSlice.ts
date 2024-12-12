import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface WeatherPayload {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: Date | null;
}

const initialState: WeatherPayload = {
    country: '',
    city: '',
    temp: 0,
    pressure: 0,
    sunset: null,
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        putWeather: (state, action: PayloadAction<WeatherPayload>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { putWeather } = weatherSlice.actions;
export default weatherSlice.reducer;