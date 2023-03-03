import { act } from "react-dom/test-utils";
import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(item) {
  localStorage.setItem("favs", JSON.stringify(item));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("favs"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      if (!state.favs.find((item) => item.id === action.payload.id)) {
        writeFavsToLocalStorage([...state.favs, action.payload]);
        return {
          ...state,
          favs: [...state.favs, action.payload],
        };
      } else {
        console.log("zaten eklediniz");
      }

    case FAV_REMOVE:
      const filteredFavorites = state.favs.filter(
        (item) => action.payload !== item.id
      );
      localStorage.setItem("favs", JSON.stringify(filteredFavorites));
      return {
        ...state,
        favs: filteredFavorites,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        current: action.payload,
      };

    case FETCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case GET_FAVS_FROM_LS:
      return {
        ...state,
        favs: readFavsFromLocalStorage(state.current),
      };

    default:
      return state;
  }
}
