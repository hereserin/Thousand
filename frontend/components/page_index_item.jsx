import React from "react";

const PageIndexItem = props => {
  return (
    <div className="page-index-item">
      <p className="page-clickable-title">{props.title}</p>
      <p className="page-url">{props.url}</p>
      <p className="page-excerpt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default PageIndexItem;
