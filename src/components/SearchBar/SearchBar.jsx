const SearchBar = ({ handleChangeFilter, filterValue }) => {
  return (
    <div>
      <input
        placeholder="Search"
        type="search"
        value={filterValue}
        onChange={(e) => handleChangeFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
