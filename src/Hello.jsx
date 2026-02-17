import React from 'react';
export const Hello = () => {
  return (   
      <div id="container">
      <h2>Hello , WebX</h2>
    </div>
);
}
export const HelloWithoutJSX = () => {
  return(
    React.createElement("div", {id: "container"},"Hello , WebX")
  );
};

