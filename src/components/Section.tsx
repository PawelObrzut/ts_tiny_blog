import { PostProps } from '../types';
import { ListOfPosts } from './ListOfPosts';

type SectionProps = {
  section: string,
  posts: PostProps[]
};

export const Section = ({ section, posts } : SectionProps) => (
    <section className={`${section} tagSection`}>
      <h2>#{section}</h2>
      <ListOfPosts posts={posts} section={section} />
    </section>
);
