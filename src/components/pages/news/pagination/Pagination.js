import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationNews() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Pagination size="lg" className="mt-5 mb-5">
        {items}
      </Pagination>
    </>
  );
}

export default PaginationNews;
