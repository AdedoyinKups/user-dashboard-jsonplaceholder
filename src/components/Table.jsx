import React, { useState, useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import TableContent from "./TableContent";

const Table = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [searchTerm, category, date]);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    setFilteredData(
      data.filter(({ name, email, company, date: userDate }) =>
        [name, email, company.name].some((field) => field.toLowerCase().includes(term)) &&
        (category ? company.name.toLowerCase().includes(category.toLowerCase()) : true) &&
        (date ? new Date(userDate).toLocaleDateString() === new Date(date).toLocaleDateString() : true)
      )
    );
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="w-full max-w-6xl mx-auto overflow-x-auto p-4 bg-white shadow-2xl rounded-lg">
      <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <SearchInput
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ariaLabel="Search by name or email"
        />
        <SearchInput
          type="text"
          placeholder="Search by category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          ariaLabel="Search by category"
        />
        <SearchInput
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          ariaLabel="Search by date"
        />
      </div>
      <TableContent data={paginatedData} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
