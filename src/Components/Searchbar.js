import React, { useContext, useState } from "react";
import { DataContext } from "./../Context/Context";


const SearchBar = ({inputValue, filterOnChange}) => {
  const { foundPlace } = useContext(DataContext);
  const [focus, setFocus] = useState('-1')
    return (
      <div onClick={()=>setFocus('1')} onBlur={()=>setFocus('-1')}>
        <input
          className="input"
          autoFocus={true}
          type="text"
          value={inputValue}
          onChange={filterOnChange}
          placeholder="Buscar..."
          style={{
            background: foundPlace.backgroundColor,
            color: foundPlace.color,
            zIndex: focus,
            borderBottom: `1px solid ${foundPlace.color}`
          }}
        />
      </div>
    );
  }
  
export default SearchBar;