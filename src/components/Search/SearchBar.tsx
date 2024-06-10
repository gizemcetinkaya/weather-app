import { useEffect, useState } from "react";
import Input from "../UI/Input";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const searchText = searchParams.get("q") || "";

  const [searchValue, setSearchValue] = useState<string>(searchText);

  useEffect(() => {
      const timer = setTimeout(() => {
          searchValue ? navigate(`/?q=${searchValue.trim()}`) : navigate("/");
      }, 1000)

      return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="search-bar">
      <Input
        type="text"
        placeholder="Search city, country or location"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.trim())}
      />
    </div>
  );
};

export default SearchBar;
