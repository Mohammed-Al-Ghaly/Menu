const CardContent = ({ title, desc, price, img }) => {
  return (
    <div className="flex w-full h-48 md:h-56 lg:h-72 rounded-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden backdrop-blur-sm bg-linear-to-r from-cyan-500/20 to-blue-500/15 p-8 md:p-10 lg:p-12 border border-white/40 shadow-lg cursor-pointer">
      <img
        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg object-cover shrink-0"
        src={img}
        alt={title}
      />
      <div className="flex flex-col justify-between flex-1 ml-3 min-w-0">
        <div>
          <h3 className="text-base sm:text-lg md:text-lg lg:text-xl text-white font-semibold mb-1 leading-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed line-clamp-2">
            {desc}
          </p>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-3 py-1 text-sm md:text-base text-white rounded font-medium transition-colors duration-200 self-start">
          {price}
        </button>
      </div>
    </div>
  );
};


export default CardContent;
