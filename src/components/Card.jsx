
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

  // Responsive container: Use min-width for carousel (absolute positioning), full width for static
  const containerClass = isStatic
    ? "relative w-full max-w-[280px] sm:max-w-[336px] h-[177px] sm:h-[212px] perspective-1000 cursor-pointer mx-auto"
    : "relative min-w-[280px] sm:min-w-[336px] h-[177px] sm:h-[212px] perspective-1000 cursor-pointer shadow-2xl";

  // Remove absolute positioning for better mobile support
  const wrapperClass = isStatic ? "mx-auto" : "";

  return (
    <div className={`${wrapperClass} ${containerClass}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* Front Face */}
        <div className={`absolute inset-0 w-full h-full backface-hidden ${getThemeStyles()} bg-cover bg-center rounded-[10px] sm:rounded-[12px] border border-gray-400/30 overflow-hidden`}>

          <div className='absolute grid grid-cols-2 gap-32 sm:gap-56 ml-3 sm:ml-5 mt-2 sm:mt-3'>
            <MdiContactlessPaymentCircleOutline />
            <RiVisaLine />
          </div>

          <div className="mt-[85px] sm:mt-[110px]">
            <span className='text-white ml-3 sm:ml-5 text-base sm:text-xl tracking-[2px] sm:tracking-[3px] font-mono shadow-sm'>{CardNumber || "0000 0000 0000 0000"}</span>
          </div>

          <div className='grid grid-cols-2 mt-3 sm:mt-4'>
            <div className='ml-3 sm:ml-5 flex flex-col'>
              <label className='text-white/80 text-[7px] sm:text-[8px] uppercase tracking-wider'>Card holder name</label>
              <span className='text-white text-xs sm:text-sm font-medium tracking-wide'>{CardHolder || "Joseph Paul"}</span>
            </div>

            <div className='flex flex-col ml-6 sm:ml-10'>
              <label className='text-white/80 text-[7px] sm:text-[8px] uppercase tracking-wider'>Expiry Date</label>
              <span className='text-white text-xs sm:text-sm font-medium tracking-wide'>{ExpDate || "00/00"}</span>
            </div>
          </div>

          <div className='absolute bottom-3 sm:bottom-4 right-4 sm:right-6 scale-75 sm:scale-100'>
            <WpfSimCardChip />
          </div>
        </div>

        {/* Back Face */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${getBackThemeStyles()} bg-cover bg-center rounded-[10px] sm:rounded-[12px] border border-gray-400/30`}>
          <div className='absolute top-[40%] right-[20%] text-right pr-3 sm:pr-4'>
            <span className='text-gray-800 text-xs sm:text-sm font-bold bg-white px-2 py-1 rounded'>{CVC || "000"}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
