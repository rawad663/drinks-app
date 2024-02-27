import React, { useState, useEffect } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Skeleton } from "./components/Skeleton/Skeleton";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [bannerContent, setBannerContent] = useState(null);

  const fetchDrinks = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch drinks");
      }

      const data = await response.json();

      setTimeout(() => {
        setDrinks(data.slice(0, 4));
        setLoading(false);
      }, 500);
    } catch (error) {
      setError(error.message);
    } finally {
    }
  };

  useEffect(() => {
    fetchDrinks();

    // Simulate API call to fetch banner info
    setTimeout(() => {
      setBannerContent({
        title: "Get 50% off your next drink",
        content: "Enjoy a drink for half the price this holiday season!",
      });
    }, 1000);
  }, []);

  const handleLoadMore = () => {
    // Simulate an error thrown by the server
    throw new Error("Unable to fetch more drinks");
  };

  return (
    <div className="App">
      {bannerContent ? (
        <Banner {...bannerContent} />
      ) : (
        <Skeleton height={"100px"} width={"100%"} />
      )}
      {/* {bannerContent && <Skeleton height={"100px"} width={"100%"} />} */}
      <h1>Drinks</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {loading ? (
        <div className="post-list">
          {[1, 2, 3, 4].map((post) => (
            // <div key={post.id} className="post">
            <Skeleton
              height={300}
              width={300}
              style={{ marginBottom: "10px", margin: "10px", padding: "14px" }}
            />
            // </div>
          ))}
        </div>
      ) : (
        <div className="post-list">
          {drinks.map((post) => (
            //   <Skeleton height={300} width={300} />

            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}

      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
}

export default App;
