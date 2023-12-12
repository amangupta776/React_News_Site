import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Card from "./Cards";

const News2 = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2e4025552f2b4d6db19fc117886fb253&page=${page}`);
        const data2 = await response.json();

        if (Array.isArray(data2.articles)) {
          setData((prevData) => [...prevData, ...data2.articles]);
        } else {
          console.error("Data is not iterable:", data2);
        
        }
      } catch (error) {
        console.error("Error fetching data:", error);
       
      }
    };

    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <NavBar sub="International" />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {Array.isArray(data) &&
          data.map((res, index) =>
            res.urlToImage === null || res.title === null || res.description === null ? "" :
              <Card key={index} img={res.urlToImage} title={res.title} pub={res.publishedAt} des={res.description} />
          )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn" onClick={loadMore}>Load More</button>
      </div>
    </>
  );
};

export default News2;
