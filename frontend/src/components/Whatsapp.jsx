
import React from 'react';

const WhatsApp = () => {
    const handleIconClick = () => {
        window.open('https://wa.me/yourwhatsappnumber', '_blank'); // Replace with your WhatsApp number
    };

    return (
        <div 
            className="whatsapp-icon fixed bottom-4 right-4 w-32 h-12 bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-semibold"
            onClick={handleIconClick}
        >
            Chat with Us
        </div>
    );
};

export default WhatsApp;
