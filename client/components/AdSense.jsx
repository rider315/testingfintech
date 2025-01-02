import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AdSense = () => {
  useEffect(() => {
    // Ensure adsbygoogle script is initialized
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdsbyGoogle script failed to initialize', e);
    }
  }, []);

  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5961860437142000"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-5961860437142000"
          data-ad-slot="3523071055"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </>
  );
};

export default AdSense;
