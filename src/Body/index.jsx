import { useState } from "react";
import News from "./News";
import SideBar from "./SideBar";
import { Routes, Route } from "react-router-dom";
import Events from "./Events";

function Body() {
  const [info, setInfo] = useState(null);

  const props = {
    info,
    setInfo,
  };

  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/news" element={<News {...props} />} />
        <Route path="/news/:keyword" element={<News {...props} />} />
        <Route path="/news/events" element={<Events {...props} />} />
        <Route path="/news/events/:keyword" element={<Events {...props} />} />
      </Routes>
    </>
  );
}

export default Body;
