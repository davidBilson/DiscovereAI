import { useEffect, useState } from 'react';
import AIData from '../AIToolsData/AIData.json';
import './Search.css';

const Search = () => {

  useEffect(() => {
    const data = AIData
    console.log(data)
    setFilterData(data)
  }, [])

  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [selectedTool, setSelectedTool] = useState([])
  const [styleSearchResult, setStyleSearchResult] = useState({
    display: "none"
  })

  const handleFilter = (value) => {
  const result = filterData.filter(f => f.name.toLowerCase().includes(value.toLowerCase()));
  if (value === "") {
    setData(AIData)
  } else {
    setData(result)
  }
}

const showSearchResultBar = () => {
  setStyleSearchResult(prev => {
    return {
      ...prev,
      display: "flex"
    }
  })
}

const hideSearchResultBar = () => {
  setStyleSearchResult(prev => {
    return {
      ...prev,
      display: "none"
    }
  })
}

const handleToolClick = (tool) => {
  setSelectedTool(tool)
}

  return (
    <div className="searchTop">
      <div>
        <input type="text" onBlur={hideSearchResultBar}  onKeyDown={showSearchResultBar} onChange={e => handleFilter(e.target.value)} placeholder="Search AI tool..." />
      </div>
      <div className='searchResult' style={styleSearchResult}>
        {data.map((d, i) => {
              return (
                <div className='seachResult' key={i} onClick={() => handleToolClick(d)}> {d.name} </div>
              );
            }
          )
        }
      </div>
      <div className="displayComponent">
        { selectedTool && (
          <div>
              <h2>{selectedTool.name}</h2>
              <h2>{selectedTool.generate}</h2>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Search;
