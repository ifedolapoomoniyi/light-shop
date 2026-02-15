import { useLightStore } from "@/store/useLightStore";
import Image from "next/image";

interface ImageProps {
  name: string;
  price: string;
  srcDayOn: string;
  srcDayOff: string;
  srcNightOn: string;
  srcNightOff: string;
}

const NewLampCard = ({ name, price, srcDayOn, srcDayOff, srcNightOn, srcNightOff }: ImageProps) => {
  const { isMasterOn, isLampOn } = useLightStore();

  // Helper to determine which state is active
  const currentState = isMasterOn 
    ? (isLampOn ? "dayOn" : "dayOff") 
    : (isLampOn ? "nightOn" : "nightOff");

  const images = [
    { id: "dayOn", src: srcDayOn },
    { id: "dayOff", src: srcDayOff },
    { id: "nightOn", src: srcNightOn },
    { id: "nightOff", src: srcNightOff },
  ];

  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Image Container */}
      <div className="relative aspect-video w-[400px] h-[400px] overflow-hidden bg-gray-200">
        {images.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            fill // Use fill for overlapping
            alt={name}
            priority={img.id === currentState} // Priority for the active one
            className={`
              object-contain object-left transition-opacity duration-500 ease-in-out
              ${currentState === img.id ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="py-4 px-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">from {price}</p>
      </div>
    </div>
  );
};

export default NewLampCard;