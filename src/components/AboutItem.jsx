const AboutItem = ({ img, tag, title, description, reverse }) => {
  return (
    <div className={`flex items-center gap-8 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex-1 overflow-hidden aspect-8/7 rounded-lg">
        <img 
          src={img} 
          alt={tag} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="flex-1">
        <a 
          href="#" 
          className="inline-block text-sm text-[#DC143C] font-poppins mb-4 hover:underline"
        >
          {tag}
        </a>
        <h3 className="text-4xl font-bold font-playfair leading-snug mb-4">
          {title}
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default AboutItem
