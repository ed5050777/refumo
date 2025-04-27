
import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500 Index"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR to USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "description": "VIX",
          "proName": "TVC:VIX"
        },
        {
          "description": "GBP to USD",
          "proName": "FX_IDC:GBPUSD"
        },
        {
          "description": "Gold",
          "proName": "OANDA:XAUUSD"
        },
        {
          "description": "EUR to GBP",
          "proName": "FX_IDC:EURGBP"
        }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
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
    <div className="tradingview-widget-container w-full">
      <div className="tradingview-widget-container__widget" ref={containerRef}></div>
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

export default TradingViewWidget;
