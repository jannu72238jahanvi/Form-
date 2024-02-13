import React, { useEffect, useState } from "react";
import LoginPage from "./loginsignup/LoginPage";
import SecondPage from "./SecondPage";
import "./common.css";
import ThirdFile from "./ThirdFile";
import FourthFile from "./FourthFile";
const PaginationPage = ({ page }) => {
  const content = [
    <LoginPage />,
    <SecondPage />,
    <ThirdFile />,
    <FourthFile />,
  ];
  return content[page - 1];

  // setPageNum(page)
};

const Pagination = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNum, setPageNum] = useState(0);
  useEffect(() => {
    setPageNum(page);
  }, []);
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 4));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <PaginationPage page={currentPage} />
      <div className="page">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={nextPage} disabled={currentPage === 4}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
