import React from "react";

function Item({ data }) {
  return (
    <div className="shadow-md bg-white text-center">
      <p className="text-2xl p-4">{data.type}</p>
      <p className="text-2xl p-4">{data.setup}</p>
      <p className="text-2xl p-4">{data.punchline}</p>
    </div>
  );
}

export default Item;
