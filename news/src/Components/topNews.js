/* eslint-disable no-const-assign */
import { Container, Row, Col, col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Modal from "./modal";

function TopNews() {
  const [gbData, setGbData] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [usaData, setUsaData] = useState();
  const [currentPage, setCurrentPage] = useState("Great Britain");
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&apiKey=cc9f18d38b7344d4925b87b47fe2c8ab"
    )
      .then((response) => {
        return response.json();
      })
      .then((info) => {
   
        const a = info.articles.map((e) => {
          return e;
        });

        const filtergb = a.filter((e) => {
          var description = e.description;
          if (description === null) {
            description = "";
          }
          var lowercaseDescription = description.toLowerCase();
          return lowercaseDescription.includes(searchInput);
        });
        setGbData(filtergb);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchInput]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=cc9f18d38b7344d4925b87b47fe2c8ab"
    )
      .then((response) => {
        return response.json();
      })
      .then((info) => {
    
        const a = info.articles.map((e) => {
          return e;
        });

        const filter = a.filter((e) => {
          var description = e.description;
          if (description === null) {
            description = "No description";
          }
          var lowercaseDescriptionn = description.toLowerCase();
          return lowercaseDescriptionn.includes(searchInput);
        });
        setUsaData(filter);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchInput]);

  const setGBPage = () => {
    setCurrentPage("Great Britain");
  };

  const setUSAPage = () => {
    setCurrentPage("The United States");
  };

  const renderSearch = () => {
    if (currentPage === "Great Britain" && gbData) {
      return (
        <div className="content">
          {gbData &&
            gbData.map((element, i) => {
              return (
                <div className="card newsCard" key={i++}>
                  <div
                    className="title"
                    onClick={(e) => {
                      setShow(true);
                      setModalData(e.target.textContent.trim());
                    }}
                  >
                    {element["title"]}
                  </div>
                  <br />
                  <br />
                  <div className="card-img">
                    <img
                      className="card-img"
                      src={element["urlToImage"]}
                      alt={element["title"]}
                      style={{ width: "100%" }}
                    />
                  </div>
                  {element["description"]}
                  <br />
                  <br />
                  <div
                    id="setModaldiv"
                    className="modalAuthor"
                  
                  >
                    {" "}
                    {element["author"] ? element["author"] : "No Author"}
                  </div>
                  <br />
                  Select title to Open details
                </div>
              );
            })}
        </div>
      );
    } else {
      return (
        <div className="content">
          {usaData &&
            usaData.map((element, i) => {
              return (
                <div className="card newsCard" key={i++}>
                  <div
                    className="title"
                    onClick={(e) => {
                      setShow(true);
                      setModalData(e.target.textContent.trim());
                    }}
                  >
                    {element["title"]}
                  </div>
                  <div> {element["description"]}</div>

                  <div className="card-img">
                    <img
                      className="card-img"
                      src={element["urlToImage"]}
                      alt={element["title"]}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <br />
                  <div
                    onClick={(e) => {
                      setShow(true);
                      setModalData(e.target.textContent.trim());
                    }}
                  >
                    {" "}
                    {element["author"] ? element["author"] : "No Author"}
                  </div>
                  <br />
                  Select title to Open details
                </div>
              );
            })}
        </div>
      );
    }
  };

  return (
    <div>
    <h1 className="title">Top News from {currentPage}</h1>
      
      <div>
        <form>
          <input
            type={"text"}
            id="searchInput"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
          ></input>
        </form>
      </div>
      <div>
        <button
          name="Great Britain"
          onClick={() => {
            setGBPage();
            setCurrentPage("Great Britain");
          }}
        >
          Great Britain
        </button>
        <button name="The United States" onClick={setUSAPage}>
          The United States
        </button>
      </div>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Modal
        onClose={() => {
          setShow(false);
        }}
        show={show}
        gbData={gbData}
        usaData={usaData}
        modalData={modalData}
      />
      {renderSearch()}
    </div>
  );
}

export default TopNews;
