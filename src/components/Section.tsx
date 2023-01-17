export const Section = ({ section } : { section:string }) => (
  <section className={`${section} tagSection`}>
    <h2>#{section}</h2>
  </section>
);
