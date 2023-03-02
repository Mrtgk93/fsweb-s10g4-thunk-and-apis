import React from "react";
import { useDispatch } from "react-redux";
import { removeFav } from "../actions";

function FavItem({ title }) {
  const dispatch = useDispatch();
  const { type, punchline, setup, id } = title;
  return (
    <div className="bg-white shadow hover:shadow-lg p-3 pl-5 flex items-center group transition-all">
      <p className="text-2xl p-10">{type}</p>
      <p className="text-2xl p-10">{setup}</p>
      <p className="text-2xl p-10">{punchline}</p>
      <button
        onClick={() => dispatch(removeFav(id))}
        className="transition-all px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}

export default FavItem;
