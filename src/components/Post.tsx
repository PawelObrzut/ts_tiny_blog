import { useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSTransition } from 'react-transition-group';
import { PostProps } from '../types';
import { HashTags } from './HashTags';

export const Post = ({ post } : { post: PostProps }): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const classTaker = useRef(null);

  const openPostBody = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setOpen(!isOpen);
  };

  return (
    <li className="postItem" data-testid="postItem">
        <article>
          <button data-testid="postTitleBtn" className={isOpen ? 'postTitle postTitleActive' : 'postTitle'} onClick={openPostBody}>
            {post.title}
          </button>
          <CSSTransition
            nodeRef={classTaker}
            in={isOpen}
            timeout={500}
            classNames="postBodyAccodion"
          >
            <section data-testid="postBody" className="postBody" ref={classTaker}>
              <p>{ post.body }</p>
              <HashTags tags={post.tags} />
              <p></p>
            </section>
          </CSSTransition>
        </article>
    </li>
  );
};
