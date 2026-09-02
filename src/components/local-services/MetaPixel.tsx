import { useEffect } from 'react';

/** Optional Meta Pixel loader; it remains inert until an ID is configured. */
export const MetaPixel = () => {
  const pixelId = (import.meta.env.VITE_META_PIXEL_ID as string | undefined) || '3381316055373920';

  useEffect(() => {
    if (document.querySelector('script[data-meta-pixel]')) return;

    const win = window as Window & { fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[] }; _fbq?: unknown };
    const fbq = ((...args: unknown[]) => { fbq.queue?.push(args); }) as NonNullable<typeof win.fbq>;
    fbq.queue = [];
    win.fbq = fbq;
    win._fbq = fbq;
    win.fbq('init', pixelId);
    win.fbq('track', 'PageView');

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.dataset.metaPixel = pixelId;
    document.head.appendChild(script);
  }, []);

  return (
    <noscript>
      <img height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`} alt="" />
    </noscript>
  );
};
