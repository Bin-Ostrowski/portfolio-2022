import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container>
        <Row>
          <Col md={4}>
            <h1>Robin Ostrowski</h1>
          </Col>
          <Col md={{ span: 5, offset: 3 }}>
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
          </Col>
        </Row>
      </Container>
    </header>
  );
}
