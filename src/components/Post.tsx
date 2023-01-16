import { useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSTransition } from 'react-transition-group';
import { IPost } from '../types';

export const Post = ({ post } : { post: IPost }): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const classTaker = useRef(null);

  return (
    <li className="postItem" key={post.id}>
        <article>
          <button className={isOpen ? 'postTitle postTitleActive' : 'postTitle'} onClick={() => setOpen(!isOpen)}>
            {post.title}
          </button>
          <CSSTransition
              nodeRef={classTaker}
              in={isOpen}
              timeout={500}
              classNames="myclass"
            >
            <section className="postBody" ref={classTaker}>
              <p>{ post.body }</p>
              <p>#{ post.tags }</p>
            </section>
          </CSSTransition>
        </article>
    </li>
  );
};
