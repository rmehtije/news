import { useState } from 'react';
import News from "./News";
import SideBar from "./SideBar";

function Body() {
  const [newsList, setNewsList] = useState(null);
  const [info, setInfo] = useState(null);

  return (
    <>
      <SideBar 
        setNewsList={setNewsList} 
        setInfo={setInfo}
        />
      <News 
        newsList={newsList} 
        setNewsList={setNewsList}
        info={info}
        setInfo={setInfo}
        />
    </>
  );
}

export default Body;
