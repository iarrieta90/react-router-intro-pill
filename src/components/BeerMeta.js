import React from "react";

function BeerMeta({ ibu, abv, ebc }) {
  return (
    <div className="d-flex">
      <div className="border-right pr-3 mr-3">
        <p className="text-capitalize text-muted font-weight-bold d-block m-0">
          IBU
        </p>
        <p className="m-0">{ibu}</p>
      </div>
      <div className="border-right pr-3 mr-3">
        <p className="text-capitalize text-muted font-weight-bold d-block m-0">
          ABV
        </p>
        <p className="m-0">{abv}</p>
      </div>
      <div>
        <p className="text-capitalize text-muted font-weight-bold d-block m-0">
          EBC
        </p>
        <p className="m-0">{ebc}</p>
      </div>
    </div>
  );
}

export default BeerMeta;
