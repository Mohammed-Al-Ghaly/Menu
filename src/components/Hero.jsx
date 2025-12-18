import Card from "./Card";

const Hero = () => {
  return (
    <div className="relative w-full" style={{ minHeight: "150vh" }}>
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/bgCover.png"
          alt="hero-img-cover"
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="text-center py-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            قائمة الطعام
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-200">
            اكتشف أطباقنا المميزة
          </p>
        </div>
        <Card />
      </div>
    </div>
  );
};
export default Hero;
