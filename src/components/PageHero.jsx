export const PageHero = ({ eyebrow, title, description }) => {
  return (
    <div className="page-hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
