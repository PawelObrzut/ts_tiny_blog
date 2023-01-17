import { useState, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSTransition } from 'react-transition-group';
import { PostProps } from '../types';
import { ListOfPosts } from './ListOfPosts';

type SectionProps = {
  section: string,
  posts: PostProps[]
};

export const Section = ({ section, posts } : SectionProps) => {
  const [isOpen, setOpen] = useState(false);
  const classTaker = useRef(null);

  return (
    <section className={`${section} tagSection`} >
      <h2 onClick={() => setOpen(!isOpen)}>#{section}</h2>
      <CSSTransition
        nodeRef={classTaker}
        in={isOpen}
        timeout={500}
        classNames="dropdownTheList"
      >
        <div className="listOfPostsWrapper" ref={classTaker}>
          <ListOfPosts posts={posts} section={section} />
        </div>
      </CSSTransition>
    </section>
  );
};
