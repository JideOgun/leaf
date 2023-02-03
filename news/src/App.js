import "./App.css";
import Navigation from "./Components/navigation";
import MainDisplay from "./Components/mainDisplay";
import TopNews from "./Components/topNews";
import GB from "./Components/gb";
import USA from "./Components/usa";
import Categories from "./Components/categories";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleRender = () => {
    if (currentPage === "Top News") {
      return <TopNews />;
    } else if (currentPage === "Categories") {
      return <Categories />;
    } else if (currentPage === "GB") {
      return <GB />;
    } else if (currentPage === "USA") {
      return <USA />;
    } else {
      return <TopNews />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className="Container">
      Overall app container
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {handleRender()}
    </div>
  );
}

export default App;
