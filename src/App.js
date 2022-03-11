import React, {useEffect, useState} from 'react'
import './App.css'
import Posts from './components/posts'
import PostLoadingComponent from './components/postLoading'
import axiosInstance from './axios'

function App() {
  const PostLoading = PostLoadingComponent(Posts)
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  })

  useEffect(() => {
    setAppState({loading: true});
    // const apiURL = 'http://127.0.0.1:8000/api/';
    // fetch(apiURL)
    //   .then((data) => data.json())
    //   .then((posts) => {
    //     setAppState({loading: false, posts:posts})
    //   })

    axiosInstance.get('/').then((res) => {
			const allPosts = res.data;
			setAppState({loading: false, posts: allPosts})
			console.log(res.data);
		});
  }, [setAppState])

  return (
    <div className='App'>
        <h1>Latest Post</h1>
        <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
    
  );
}

export default App;
