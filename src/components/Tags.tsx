interface TagsProps {
  tags: string[]
}

export const Tags = ({ tags } : TagsProps): JSX.Element => (
    <>
     {tags?.map(tag => (
       <span key={tag}>#{tag} </span>
     ))}
    </>
);
