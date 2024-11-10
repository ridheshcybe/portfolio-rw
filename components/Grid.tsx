import React from "react";
import SVG from "react-inlinesvg";

export function Grid() {
  const handleCircleClick = () => {
    window.location.hash = "#projects";
  };

  return (
    <div id="grid">
      <SVG
        src="/bento.svg"
        title="React"
        onClick={(e: any) => {
          // Only trigger the circle click event if group1 is clicked
          const clickedGroup = e.target!.closest("g");
          if (clickedGroup && clickedGroup.id === "seework") {
            handleCircleClick();
          }
        }}
      />
    </div>
  );
}

export default Grid;
