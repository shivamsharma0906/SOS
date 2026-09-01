import React, { useEffect, useRef } from 'react';

interface TrustIndexWidgetProps {
  widgetId?: string;
  className?: string;
}

export const TrustIndexWidget: React.FC<TrustIndexWidgetProps> = ({
  widgetId = '1525a98807b64976fa96ed4dc80',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    // Clear previous scripts/iframes on remount
    currentContainer.innerHTML = '';

    const script = document.createElement('script');
    script.src = `https://cdn.trustindex.io/loader.js?${widgetId}`;
    script.async = true;
    script.defer = true;

    currentContainer.appendChild(script);

    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
      // Clean up any extraneous floating elements appended to body by the script
      document.querySelectorAll('.ti-widget-floating, .ti-badge-container, [id^="ti-floating"]').forEach(el => el.remove());
    };
  }, [widgetId]);

  return (
    <div 
      ref={containerRef}
      className={`trustindex-widget-wrapper ${className}`}
      data-widget-id={widgetId}
      style={{ minHeight: '120px', width: '100%' }}
    />
  );
};
