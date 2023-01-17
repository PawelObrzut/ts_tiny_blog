import { useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSTransition } from 'react-transition-group';
import { PostProps } from '../types';
import { HashTags } from './HashTags';

export const Post = ({ post } : { post: PostProps }): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const classTaker = useRef(null);

  return (
    <li className="postItem">
        <article>
          <button className={isOpen ? 'postTitle postTitleActive' : 'postTitle'} onClick={() => setOpen(!isOpen)}>
            {post.title}
          </button>
          <CSSTransition
              nodeRef={classTaker}
              in={isOpen}
              timeout={500}
              classNames="postBodyAccodion"
            >
            <section className="postBody" ref={classTaker}>
              <p>{ post.body }</p>
              <HashTags tags={post.tags} />
              <p></p>
            </section>
          </CSSTransition>
        </article>
    </li>
  );
};
