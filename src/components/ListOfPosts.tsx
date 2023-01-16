import { IPost } from '../types';
import { Post } from './Post';

export  const ListOfPosts = (posts: IPost[]): JSX.Element => {
  return (
    <ul className="postsContainer">
      {posts.map((post: IPost) => (
        <Post post={post} />
      ))}
    </ul>
  )
}