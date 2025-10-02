import React from 'react';
import './AuroraBackground.css';

function AuroraBackground() {
    return (
        <div className="space-bg">
            {/* Animated Stars */}
            {[...Array(60)].map((_, i) => (
                <div key={i} className={`star star-${i}`} />
            ))}
            {/* Animated Nebula Layers */}
            <div className="nebula nebula-1" />
            <div className="nebula nebula-2" />
            <div className="nebula nebula-3" />
            {/* Swirling Galaxy Core */}
            <div className="galaxy-core" />
            {/* Floating Particles */}
            <div className="particle particle-1" />
            <div className="particle particle-2" />
            <div className="particle particle-3" />
            <div className="particle particle-4" />
            <div className="particle particle-5" />
        </div>
    );
}

export default AuroraBackground;
