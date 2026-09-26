function ServiceCard({ title, description, icon: Icon, image }) {
  return (
    <article>
      <img src={image} alt={title} />

      <div>
        <Icon />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;