import { useState } from "react";
import News from "./News";
import SideBar from "./SideBar";
import { Routes, Route } from "react-router-dom";
import Events from "./Events";

function Body() {
  console.log('Body');
  const [info, setInfo] = useState(null);

  const props = {
    info,
    setInfo,
  };

  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<News {...props} />} />
        <Route path="/:keyword" element={<News {...props} />} />
        <Route path="/events" element={<Events {...props} />} />
        <Route path="/events/:keyword" element={<Events {...props} />} />
      </Routes>
    </>
  );
}

export default Body;
