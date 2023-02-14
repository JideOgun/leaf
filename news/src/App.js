import "./App.css";
import Navigation from "./Components/navigation";
import TopNews from "./Components/topNews";
import Categories from "./Components/categories";
import { useState } from "react";
import Gb from "./Components/gb";
import Usa from "./Components/usa";

function App() {
  const [currentPage, setCurrentPage] = useState("Top News");

  const handleRender = () => {
    if (currentPage === "Top News") {
      return <TopNews currentPage={currentPage}
      handlePageChange={handlePageChange} />;
    } else if (currentPage === "Categories") {
      return <Categories />;
    } else if (currentPage === "USA") {
      return <Usa />;
    } else if (currentPage === "GB") {
      return <Gb />;
    } else {
      return <TopNews />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="Container">
    <Navigation/>
      <TopNews/>
    </div>
  );
}

export default App;
