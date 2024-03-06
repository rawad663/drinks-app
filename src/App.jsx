import React, { useState, useEffect } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Skeleton } from "./components/Skeleton/Skeleton";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadMoreError, setLoadMoreError] = useState(null);

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
      }, 500);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
    try {
      // Simulate an error thrown by the server
      throw new Error("Unable to fetch more drinks");
    } catch (e) {
      setLoadMoreError(e.message);
      alert(e.message);
    }
  };

  const skeleton = new Array(4).fill(1);

  return (
    <div className="App">
      {bannerContent ? (
        <Banner {...bannerContent} />
      ) : (
        <Skeleton
          ariaLabel={"banner-skeleton"}
          width={"100%"}
          height={"100px"}
          style={{ padding: 4 }}
        />
      )}
      <h1>Drinks</h1>

      {error && <p>Error: {error}</p>}

      <div className="post-list">
        {drinks?.length
          ? drinks.map((post) => (
              <div key={post.id} className="post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))
          : skeleton.map((item, index) => (
              <Skeleton
                ariaLabel={`${index}-skeleton`}
                key={`${index}-skeleton`}
                width={300}
                height={300}
                style={{ margin: 10, padding: 14 }}
              />
            ))}
      </div>

      <button onClick={handleLoadMore}>
        {loadMoreError ? "Try Again" : "Load More"}
      </button>
    </div>
  );
}

export default App;
