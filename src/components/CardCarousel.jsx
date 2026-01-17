
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
        <div className="flex items-center justify-center w-full max-w-3xl mx-auto h-[220px] sm:h-[260px] md:h-[300px] relative overflow-visible px-4 sm:px-8">

            {/* Navigation Buttons - FIXED: Swapped handlers to match animation direction */}
            <button onClick={handleNext} className="absolute left-2 sm:left-4 md:left-0 z-20 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-500 hover:text-gray-900 border border-gray-100">
                &lt;
            </button>

            <button onClick={handlePrev} className="absolute right-2 sm:right-4 md:right-0 z-20 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-500 hover:text-gray-900 border border-gray-100">
                &gt;
            </button>

            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                {themes.map((themeName, index) => {
                    let positionClass = "";

                    if (index === currentIndex) {
                        positionClass = "z-10 scale-75 sm:scale-90 md:scale-100 opacity-100 shadow-2xl";
                    } else {
                        // 3 items logic - FIXED: Reversed the positioning logic
                        // When clicking right (next), new card should slide in from RIGHT (negative translate puts it on RIGHT)
                        // When clicking left (prev), new card should slide in from LEFT (positive translate puts it on LEFT)
                        const isLeft = index === (currentIndex - 1 + themes.length) % themes.length;
                        // REVERSED: isLeft cards now go RIGHT (positive), !isLeft cards go LEFT (negative)
                        // This makes right button slide cards LEFT and left button slide cards RIGHT
                        const baseTranslate = isLeft ? 'translate-x-[20px] origin-left' : '-translate-x-[20px] origin-right';
                        const tabletTranslate = isLeft ? 'sm:translate-x-[80px] sm:origin-left' : 'sm:-translate-x-[80px] sm:origin-right';
                        const desktopTranslate = isLeft ? 'md:translate-x-[180px] md:origin-left' : 'md:-translate-x-[180px] md:origin-right';

                        positionClass = `z-0 scale-[0.6] sm:scale-75 md:scale-90 opacity-40 blur-[1px] ${baseTranslate} ${tabletTranslate} ${desktopTranslate}`;
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
