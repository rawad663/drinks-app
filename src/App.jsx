import React, { useState, useEffect } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Skeleton } from './components/Skeleton/Skeleton';

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

  const [bannerContent, setBannerContent] = useState(null);

	const fetchPosts = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');

			if (!response.ok) {
				throw new Error('Failed to fetch posts');
			}

			const data = await response.json();

			setTimeout(() => {
				setPosts(data.slice(0, 4));
			}, 500);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPosts();

    // Simulate API call to fetch banner info
    setTimeout(() => {
      setBannerContent({
        title: 'Get 50% off your next drink',
        content: 'Enjoy a drink for half the price this holiday season!'
      })
    }, 1000)
	}, []);


	return (
		<div className="App">
      {bannerContent && <Banner {...bannerContent} />}
			<h1>Posts</h1>

			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}

			<div className="post-list">
				{posts.length ? posts.map(post => (
					<div key={post.id} className="post">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
				))
			: [1,2,3, 4].map(() => <Skeleton width={300} height={300} style={{ margin: 10 }} />)}
			</div>

      <button>Load more</button>
		</div>
	);
}

export default App;