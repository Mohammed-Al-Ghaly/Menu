import CardContent from "./CardContent";

export default function Card() {
  return (
    <div className="w-full px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 xl:gap-6 py-4">
        <CardContent
          title="Boiled Eggs"
          desc="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est."
          price="$10.00"
          img={"/card1.png"}
        />
        <CardContent
          title="RAMEN"
          desc="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
          price="$25.00"
          img={"/card3.png"}
        />
        <CardContent
          title="GRILLED CHICKEN"
          desc="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
          price="$45.00"
          img={"/card5.png"}
        />
        <CardContent
          title="CAKE"
          desc="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
          price="$18.00"
          img={"/card2.png"}
        />
        <CardContent
          title="BURGER"
          desc="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
          price="$23.00"
          img={"/card4.png"}
        />
        <CardContent
          title="PANCAKE"
          desc="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
          price="$25.00"
          img={"/card6.png"}
        />
      </div>
    </div>
  );
}
