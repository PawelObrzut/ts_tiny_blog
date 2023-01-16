import { useEffect, useState } from 'react';
import './App.css';
import { IPost } from './types';
import { ListOfPosts } from './components/ListOfPosts';

function App() {
  const [posts, setPosts] = useState<IPost[]>([{} as IPost]);

  const getAllPosts = () => {
    fetch('http://localhost:8080/api/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('failed to fetch posts');
        }
        return response.json();
      })
      .then(data => setPosts(data.posts))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <header>
        <h1>Tiny Posts Blog</h1>
        {ListOfPosts(posts)}
      </header>
    </>
  );
}

export default App;
