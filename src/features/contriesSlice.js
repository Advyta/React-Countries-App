import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const COUNTRIES_URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async() => {
    const response = await fetch(COUNTRIES_URL);
    try {
        const data = await response.json();
        return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } catch (error) {
        return error;
    }
})

const countriesSlice = createSlice({
    name: 'countries',
    initialState: { countries:[], filteredCountries: [], status: 'idle', error: null, darkmode: false },
    reducers: {
        toggleDarkmode: (state) => {
            state.darkmode = !state.darkmode;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
            state.filteredCountries = state.countries.filter(country => 
                country.name.common.toLowerCase().startsWith(state.search.toLowerCase()));
                state.filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        },
        setRegion: (state, action) => {
            state.region = action.payload;
            state.filteredCountries = state.countries.filter(country => country.region === state.region);
            state.filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        }
    },
    extraReducers: (builders) => {
        builders
        .addCase(fetchCountries.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchCountries.fulfilled, (state, action) => {
            state.countries.length = 0;
            state.status = 'succeded';
            state.countries = state.countries.concat(action.payload);
        })
        .addCase(fetchCountries.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export const {toggleDarkmode, setSearch, setRegion} = countriesSlice.actions;
export default countriesSlice.reducer;