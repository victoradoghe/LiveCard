
import { useState } from 'react';
import { WpfSimCardChip } from './chipIcon'
import { RiVisaLine } from './Visaicon'
import { MdiContactlessPaymentCircleOutline } from './paymenticon'

export const Card = ({ CardHolder, CardNumber, ExpDate, CVC, theme = 'default', isStatic = true }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getThemeStyles = () => {
    switch (theme) {
      case 'gradient-blue':
        return "bg-gradient-to-br from-cyan-400 to-blue-600";
      case 'gradient-dark':
        return "bg-gradient-to-br from-gray-800 to-black";
      default:
        return "bg-[url('/src/assets/img/cardbody.png')]";
    }
  };

  const getBackThemeStyles = () => {
    switch (theme) {
      case 'gradient-blue':
        return "bg-gradient-to-tl from-cyan-400 to-blue-600";
      case 'gradient-dark':
        return "bg-gradient-to-tl from-gray-800 to-black";
      default:
        return "bg-[url('/src/assets/img/backofcard.png')]";
    }
  };

  const handleClick = () => {
    // Only allow flip if not static (in carousel) or we can decide.
    // The request implies users can flip chosen card, which is likely in Setup or static view.
    // In Carousel, clicking usually changes slide... but here we want to flip.
    if (!isStatic) setIsFlipped(!isFlipped);
  };

  // If static (e.g. in a list?), logic might be different. 
  // Actually, 'isStatic' was used for absolute positioning.
  // We should unify positioning.

  const containerClass = isStatic
    ? "relative w-[336px] h-[212px] perspective-1000 cursor-pointer"
    : "relative w-[336px] h-[212px] perspective-1000 cursor-pointer shadow-2xl";

  // Position fixes if it was absolute before
  const wrapperClass = isStatic ? "absolute mt-[-80px] ml-[70px]" : "";

  return (
    <div className={`${wrapperClass} ${containerClass}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* Front Face */}
        <div className={`absolute inset-0 w-full h-full backface-hidden ${getThemeStyles()} bg-cover bg-center rounded-[12px] border border-gray-400/30 overflow-hidden`}>

          <div className='absolute grid grid-cols-2 gap-56 ml-5 mt-3'>
            <MdiContactlessPaymentCircleOutline />
            <RiVisaLine />
          </div>

          <div className="mt-[110px]">
            <span className='text-white ml-5 text-xl tracking-[3px] font-mono shadow-sm'>{CardNumber || "0000 0000 0000 0000"}</span>
          </div>

          <div className='grid grid-cols-2 mt-4'>
            <div className='ml-5 flex flex-col'>
              <label className='text-white/80 text-[8px] uppercase tracking-wider'>Card holder name</label>
              <span className='text-white text-sm font-medium tracking-wide'>{CardHolder || "Joseph Paul"}</span>
            </div>

            <div className='flex flex-col ml-10'>
              <label className='text-white/80 text-[8px] uppercase tracking-wider'>Expiry Date</label>
              <span className='text-white text-sm font-medium tracking-wide'>{ExpDate || "00/00"}</span>
            </div>
          </div>

          <div className='absolute bottom-4 right-6'>
            <WpfSimCardChip />
          </div>
        </div>

        {/* Back Face */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${getBackThemeStyles()} bg-cover bg-center rounded-[12px] border border-gray-400/30`}>
          <div className='absolute top-[40%] right-[20%] text-right pr-4'>
            <span className='text-gray-800 text-sm font-bold bg-white px-2 py-1 rounded'>{CVC || "000"}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
