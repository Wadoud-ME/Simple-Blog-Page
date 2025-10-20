const SlideItem = ({ img, tag, title, description }) => {
  return (
    <li className="w-full shrink-0 snap-center flex items-center justify-center gap-8">
      <div className="flex-1 overflow-hidden aspect-square ">
        <img
          src={img}
          alt="slide"
          className="w-full h-full object-fill transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="flex-1">
        <a href="#" className="block mb-6 text-[#DC143C] font-poppins">
          {tag}
        </a>
        <h1 className="text-3xl font-bold font-playfair mb-5">
          {title}
        </h1>
        <p className="text-base">
          {description}
        </p>
      </div>
    </li>
  );
};

export default SlideItem;
