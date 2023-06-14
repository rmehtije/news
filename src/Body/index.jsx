import { useState } from 'react';
import News from "./News";
import SideBar from "./SideBar";

function Body() {
  const [newsList, setNewsList] = useState(null);

  return (
    <>
      <SideBar setNewsList={setNewsList} />
      <News newsList={newsList} setNewsList={setNewsList}/>
    </>
  );
}

export default Body;
