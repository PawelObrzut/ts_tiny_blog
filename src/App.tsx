import { useEffect, useState } from 'react';
import './App.css';
import { IPost } from './types';
import { ListOfPosts } from './components/ListOfPosts';
import { Section } from './components/Section';

function App() {
  const [posts, setPosts] = useState<IPost[]>([{} as IPost]);
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
        {sections.map(section => (
          <Section section={section} key={section} />
        ))}
      </main>
      <ListOfPosts posts={posts} />
    </>
  );
}

export default App;
