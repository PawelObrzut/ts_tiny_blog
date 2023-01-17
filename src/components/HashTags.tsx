type HashTagsProps = {
  tags: string[]
};

export const HashTags = ({ tags } : HashTagsProps): JSX.Element => (
    <>
     {tags?.map(tag => (
       <em key={tag}>#{tag} </em>
     ))}
    </>
);
