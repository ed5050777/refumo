
import React, { useEffect, useRef } from 'react';

const TradingViewTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "adaptive",
      width: "100%",
      height: 550,
      colorTheme: "light",
      locale: "en"
    });

    // Store reference to the script
    scriptRef.current = script;

    // Append script to widget container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Only attempt to remove if the script is still a child of the container
      if (containerRef.current && scriptRef.current && scriptRef.current.parentNode === containerRef.current) {
        containerRef.current.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div className="tradingview-timeline-container w-full">
      <div className="tradingview-timeline-container__widget" ref={containerRef}></div>
      <div className="tradingview-widget-copyright text-center text-sm mt-2">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          className="text-refumo-coral hover:text-refumo-lightcoral"
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
};

export default TradingViewTimeline;
