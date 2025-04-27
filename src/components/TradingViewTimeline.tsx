
import React, { useEffect } from 'react';

const TradingViewTimeline = () => {
  useEffect(() => {
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

    const widgetContainer = document.querySelector('.tradingview-timeline-container__widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer && script) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-timeline-container w-full">
      <div className="tradingview-timeline-container__widget"></div>
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
