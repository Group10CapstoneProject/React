import React from "react";

function Paginations({ postPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="btn-group bg-base font-semibold">
        <button onClick={() => paginate(1)} className="btn-sm">
          Start
        </button>
        {pageNumbers.map((number) => (
          <button
            onClick={() => paginate(number)}
            key={number}
            className={`btn-sm ${number == currentPage ? "btn-active" : ""}`}
          >
            {number}
          </button>
        ))}
        <button onClick={() => paginate(pageNumbers.length)} className="btn-sm">
          Last page
        </button>
      </div>
    </div>
  );
}

export default Paginations;
