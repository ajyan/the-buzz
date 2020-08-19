import React from 'react';

const Nav = ({ setSearchTerm, handleSearch }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-warning"
      role="navigation"
      align="center"
    >
      <a href="/">
        <img
          src="https://i.ibb.co/2tZyxNP/9e4b1a42-72e1-4c83-a1f2-3bf885a1c944-200x200.png"
          className="d-inline-block align-center brand"
          alt=""
          height="50%"
          width="50%"
        />
      </a>

      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        />
        <button
          className="btn btn-light my-2 my-sm-0"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Nav;
