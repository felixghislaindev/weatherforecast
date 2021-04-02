import { createStore } from "vuex";
import { owmKey } from "../config/apiConfig";
import axios from "axios";

export default createStore({
  state: {
    currentWeatherData: {},
  },
  getters: {
    getCurrentWeatherForecast(state) {
      return state.currentWeatherData;
    },
  },
  mutations: {
    setCurrentWeatherData(state, payload) {
      // setting current weather data
      state.currentWeatherData = payload;
    },
  },
  actions: {
    fetchWeatherData({ commit }, payload) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&appid=${owmKey}`
        )
        .then((res) => {
          commit("setCurrentWeatherData", res.data);
        });
    },
  },
  modules: {},
});
