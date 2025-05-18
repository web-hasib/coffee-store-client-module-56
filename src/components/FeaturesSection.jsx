import { FaCoffee, FaMedal, FaSeedling, FaMugHot } from "react-icons/fa";

const features = [
  {
    icon: 'https://i.ibb.co/CpBN71LD/1.png',
    title: "Awesome Aroma",
    description: "You will definitely be a fan of the design & aroma of your coffee",
  },
  {
    icon: 'https://i.ibb.co/Q37tVkP0/2.png',
    title: "High Quality",
    description: "We served the coffee to you maintaining the best quality",
  },
  {
    icon: 'https://i.ibb.co/C3tLfkwf/3.png',
    title: "Pure Grades",
    description: "The coffee is made of the green coffee beans which you will love",
  },
  {
    icon: 'https://i.ibb.co/G4TL1dh6/4.png',
    title: "Proper Roasting",
    description: "Your coffee is brewed by first roasting the green coffee beans",
  },
];

// 
// 
// 
// 

export default function FeaturesSection() {
  return (
    <section className="bg-[#EDE6DB] py-12 px-4 text-[#331A15]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <img src={feature.icon} alt="" />
            <h3 className="text-2xl primary-font font-semibold ">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
