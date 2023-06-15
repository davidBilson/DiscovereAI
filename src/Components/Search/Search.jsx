import { useEffect, useState } from 'react';
import AIData from '../AIToolsData/AIData.json';
import './Search.css';

const Search = () => {
  useEffect(() => {

    const data = AIData
    console.log(data)
    // setData(data);
    setFilterData(data);

  }, []);

  const [data, setData] = useState([]);

  const [filterData, setFilterData] = useState([]);

  const handleFilter = (value) => {
  const result = filterData.filter(f => f.name.toLowerCase().includes(value.toLowerCase()));
  if (value === "") {
    setData(AIData);
  } else {
    setData(result);
  }
};


  return (
    <div className="searchTop">
      <div>
        <input type="text" onChange={e => handleFilter(e.target.value)} placeholder="Search AI tool..." />
      </div>
      <div className='searchResult'>
        {data.map((d, i) => {
              return (
                <div key={i}>
                  {d.name}
                </div>
              );
            }
          )
        }
      </div>
      <div className="displayComponent">
        
      </div>
    </div>
    
  );
};

export default Search;
