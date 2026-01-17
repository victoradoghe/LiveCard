
import React, { useState } from 'react';
import { Card } from './Card';

export const CardCarousel = ({ cardData, setTheme }) => {
    const themes = ['gradient-blue', 'default', 'gradient-dark'];
    const [currentIndex, setCurrentIndex] = useState(1); // Default is middle

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % themes.length;
        setCurrentIndex(nextIndex);
        setTheme(themes[nextIndex]);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + themes.length) % themes.length;
        setCurrentIndex(prevIndex);
        setTheme(themes[prevIndex]);
    };

    return (
        <div className="flex items-center justify-center w-full max-w-3xl mx-auto h-[300px] relative overflow-visible">

            {/* Navigation Buttons */}
            <button onClick={handlePrev} className="absolute left-0 z-20 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-500 hover:text-gray-900 border border-gray-100">
                &lt;
            </button>

            <button onClick={handleNext} className="absolute right-0 z-20 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-500 hover:text-gray-900 border border-gray-100">
                &gt;
            </button>

            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                {themes.map((themeName, index) => {
                    let positionClass = "";

                    if (index === currentIndex) {
                        positionClass = "z-10 scale-90 md:scale-100 opacity-100 shadow-2xl";
                    } else {
                        // 3 items logic
                        // If current is 1 (middle): 0 is left, 2 is right
                        // If current is 0: 2 is left, 1 is right
                        // If current is 2: 1 is left, 0 is right
                        const isLeft = index === (currentIndex - 1 + themes.length) % themes.length;
                        // Mobile: smaller scale, smaller translation. Desktop: original scale/translation.
                        // We use `md:` prefix for desktop styles.
                        const baseTranslate = isLeft ? '-translate-x-[40px] origin-right' : 'translate-x-[40px] origin-left';
                        const desktopTranslate = isLeft ? 'md:-translate-x-[180px] md:origin-right' : 'md:translate-x-[180px] md:origin-left';

                        positionClass = `z-0 scale-75 opacity-40 blur-[1px] ${baseTranslate} ${desktopTranslate} md:scale-90`;
                    }

                    return (
                        <div
                            key={themeName}
                            className={`absolute transition-all duration-500 ease-in-out transform ${positionClass}`}
                        >
                            {/* Overlay for inactive cards to make them darker/faded if needed */}
                            {index !== currentIndex && <div className="absolute inset-0 bg-white/30 z-10 rounded-[12px]"></div>}
                            <Card {...cardData} theme={themeName} isStatic={false} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
