import React from "react";

function Slide1() {
  return (
    <>
      <h1 className="slide1s pad1">Discover</h1>
      <h1 className="slide1 pad1">Amazing startups</h1>

      <p className="pad1">Find great startup curated by our experts for investing.</p>

      <form class="d-flex pad1" role="search">
        <input
          class="form-control me-2 input2"
          type="search"
          placeholder="Ex: Nearbygrocer, Nykaa, etc"
          aria-label="Search"
        />
        <button class="btn btn-outline-success btn2" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default Slide1;
