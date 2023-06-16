import { useEffect, useState } from 'react';
import AIData from '../AIToolsData/AIData.json';
import './Search.css';

const Search = () => {
  useEffect(() => {
    setFilterData(AIData);
  }, []);

  const [data, setData] = useState(AIData);
  const [filterData, setFilterData] = useState(AIData);
  const [selectedTool, setSelectedTool] = useState(null);

  const handleFilter = (value) => {
    const result = filterData.filter((f) =>
      f.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(result);
  };

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="searchTop">
      <div>
        <input
          type="text"
          onChange={(e) => handleFilter(e.target.value)}
          placeholder="Search AI tool..."
        />
      </div>
      <div className="searchResult">
        {data.map((d, i) => (
          <div
            className="searchItem"
            key={i}
            onClick={() => handleToolClick(d)}
          >
            {d.name}
          </div>
        ))}
      </div>
      <div className="displayComponent">
        {selectedTool && (
          <div>
            <h2>{selectedTool.name}</h2>
            <h2>{  `${selectedTool.generate} generator`}</h2>
            {/* Render additional properties and values here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
