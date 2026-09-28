function ServiceCard({ title, description, icon: Icon, image }) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Service Icon */}
<div
  className="
    absolute
    bottom-0
    right-6
    translate-y-0
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    border-4
    border-white
    bg-blue-600
    text-white
    shadow-md
  "
>
  <Icon size={24} strokeWidth={2} />
</div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-10 text-right">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>

        <p className="mt-3 min-h-[56px] text-sm leading-7 text-slate-500">
           {description}
        </p>

        <button
          type="button"
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-blue-600
            transition-all
            duration-200
            hover:gap-3
            hover:text-blue-700
          "
        >
          بیشتر بدانید
          <span aria-hidden="true" className="text-lg leading-none">
            ←
          </span>
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;
