import { useState, useRef } from 'react';
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

  const openListOfPosts = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setOpen(!isOpen);
  };

  return (
    <section className={`${section} tagSection`} onClick={openListOfPosts} >
      <h2>#{section}</h2>
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
