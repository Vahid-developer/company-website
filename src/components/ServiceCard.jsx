function ServiceCard({ title, description, icon: Icon, image }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-indigo-400/15 bg-indigo-900/30 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/30 hover:bg-indigo-900/45">
      
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Icon */}
        <div className="absolute bottom-0 right-8 flex h-16 w-16 translate-y-1/2 items-center justify-center rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-950/40">
          <Icon size={28} strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="px-7 pb-8 pt-12 text-right">
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-indigo-200">
          {description}
        </p>
      </div>

    </article>
  );
}

export default ServiceCard;