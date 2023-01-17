type HashTagsProps = {
  tags: string[]
};

export const HashTags = ({ tags } : HashTagsProps): JSX.Element => (
    <>
     {tags?.map(tag => (
       <span key={tag}>#{tag} </span>
     ))}
    </>
);
