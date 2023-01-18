import { useEffect, useState } from 'react';
import './App.css';
import { PostProps } from './types';
import { Section } from './components/Section';

function App() {
  const [posts, setPosts] = useState<PostProps[]>([{} as PostProps]);
  const sections = ['crime', 'mystery', 'magical', 'fiction', 'classic'];

  const getAllPosts = () => {
    fetch('http://localhost:8080/api/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('failed to fetch posts');
        }
        return response.json();
      })
      .then(data => setPosts(data.posts))
      .catch(error => error);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <main>
        <h1 data-testid="mainTitle">Tiny Blog</h1>
        {sections.map(section => (
          <Section posts={posts} section={section} key={section} />
        ))}
      </main>
    </>
  );
}

export default App;
