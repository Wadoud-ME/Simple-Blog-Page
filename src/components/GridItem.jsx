const GridItem = ({ img, tag, title }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden aspect-4/3 mb-4 rounded-lg">
        <img 
          src={img} 
          alt={tag} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <a 
        href="#" 
        className="inline-block text-sm text-[#DC143C] font-poppins mb-2 hover:underline"
      >
        {tag}
      </a>
      <h3 className="text-xl font-bold font-playfair leading-snug group-hover:text-[#DC143C] transition-colors duration-300">
        {title}
      </h3>
    </div>
  )
}

export default GridItem