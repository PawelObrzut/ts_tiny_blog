import { useState } from 'react';
import { IPost } from '../types';

export const Post = ({ post } : { post: IPost }): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  return (
    <li className="postItem" key={post.id}>
        <article>
          <section className="postTitle" onClick={() => setOpen(!isOpen)}>
            {post.title}
          </section>
          { isOpen && <section className="postBody" onAnimationEnd={() => { }} >
            <p>{ post.body }</p>
            <p>#{ post.tags[0] }</p>
            </section> }
        </article>
    </li>
  );
};
