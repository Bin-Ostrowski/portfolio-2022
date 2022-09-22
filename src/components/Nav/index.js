import React, { useEffect } from "react";
import About from "../../components/About";

export default function Nav(props) {
  //import props
  const { pages = [], currentPage, setCurrentPage } = props;

  //conditional set title to current page
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    //return header and navigation
    <header className="flex-row ">
      <h1>Robin Ostrowski</h1>
      <nav>
        <ul className="flex-row">
          {/* //map over pages to display links */}
          {pages.map((page) => (
            <li
              className={`href-links ${
                currentPage.name === page.name && "navActive"
              }`}
              key={page.name}
            >
              {/* change currentPage when clicked */}
              <span
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
