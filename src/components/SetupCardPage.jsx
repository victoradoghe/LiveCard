
import React, { useState } from 'react';
import { PinInput } from './PinInput';
import { CardCarousel } from './CardCarousel';

export const SetupCardPage = ({
    CardHolder, SetCardHolder,
    CardNumber, SetCardNumber,
    ExpDate, SetExpDate,
    CVC, SetCVC,
    onBack, onContinue
}) => {
    const [pin, setPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');
    const [theme, setTheme] = useState('default');
    const [pinError, setPinError] = useState('');

    // Check if pins match when both are entered
    const isPinValid = pin.length === 4 && confirmPin.length === 4 && pin === confirmPin;
    const isPinMismatch = pin.length === 4 && confirmPin.length === 4 && pin !== confirmPin;

    const cardData = { CardHolder, CardNumber, ExpDate, CVC };

    // Input Handlers (Adapted from Form.jsx)
    const handleCardNumber = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 16) value = value.slice(0, 16);
        const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
        SetCardNumber(formattedValue);
    };

    const handleExpiry = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.slice(0, 4);
        if (value.length > 2) {
            let day = value.slice(0, 2);
            let month = value.slice(2);
            if (Number(month) > 12) month = "12";
            value = `${day}/${month}`;
        }
        SetExpDate(value);
    };

    const handleCvc = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 3) value = value.slice(0, 3);
        SetCVC(value);
    };

    const handleCardHolder = (e) => {
        let value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
        if (value.length > 20) value = value.slice(0, 20);
        SetCardHolder(value);
    };

    return (
        <div className="flex-1 p-4 md:p-10 relative overflow-y-auto h-screen">

            {/* Top Header / Close */}
            <div className="absolute top-6 right-6 md:right-10 flex items-center space-x-4">
                <span className="text-gray-500 text-sm">Do you need help?</span>
                <button className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>

            <div className="max-w-3xl mx-auto mt-10 pb-20">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Setup your arto+ card</h2>

                {/* Card Inputs Section */}
                <div className="mb-12">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Enter your card details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Holder Name</label>
                            <input
                                type="text"
                                value={CardHolder}
                                onChange={handleCardHolder}
                                placeholder="Joseph Paul"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                            <input
                                type="text"
                                value={CardNumber}
                                onChange={handleCardNumber}
                                placeholder="0000 0000 0000 0000"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                            <input
                                type="text"
                                value={ExpDate}
                                onChange={handleExpiry}
                                placeholder="MM/YY"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                            <input
                                type="text"
                                value={CVC}
                                onChange={handleCvc}
                                placeholder="123"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Set PIN Section */}
                <div className="mb-12 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Set your card PIN</h3>
                    <p className="text-gray-500 mb-6 text-sm">This PIN will be used when making transactions through an ATM.</p>

                    <div className="flex flex-col items-center space-y-8">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">New PIN</label>
                            <PinInput setPin={setPin} />
                        </div>

                        {pin.length === 4 && (
                            <div className="transition-all duration-500 ease-in-out transform translate-y-0 opacity-100 animate-fade-in">
                                <label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Confirm PIN</label>
                                <PinInput setPin={setConfirmPin} />
                                {pin.length === 4 && confirmPin.length === 4 && pin !== confirmPin && (
                                    <p className="text-red-500 mt-2 text-sm font-medium">PINs do not match</p>
                                )}
                                {pin.length === 4 && confirmPin.length === 4 && pin === confirmPin && (
                                    <p className="text-green-500 mt-2 text-sm font-medium">PINs match ✓</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Choose Appearance Section */}
                <div className="mb-12">
                    <h3 className="text-lg font-semibold mb-1 text-center text-gray-800">Choose your card appearance</h3>
                    <p className="text-gray-500 mb-6 text-center text-sm">Choose your card theme as you wish</p>

                    <CardCarousel cardData={cardData} setTheme={setTheme} />
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center max-w-lg mx-auto mt-16 border-t pt-8 border-gray-100">
                    <button onClick={onBack} className="text-gray-800 underline hover:text-black">Cancel</button>

                    <div className="flex space-x-4">
                        <button onClick={onBack} className="px-8 py-2 border rounded-full text-gray-700 hover:bg-gray-50">Back</button>
                        <button
                            onClick={() => onContinue && onContinue()}
                            disabled={!pin || pin.length < 4 || pin !== confirmPin}
                            className={`px-8 py-2 rounded-full flex items-center transition-colors ${(!pin || pin.length < 4 || pin !== confirmPin) ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-gray-900 text-white hover:bg-black'}`}
                        >
                            Continue
                            <span className="ml-2">&rarr;</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};
