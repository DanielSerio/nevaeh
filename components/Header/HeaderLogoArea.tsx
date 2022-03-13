import React, { useEffect, useLayoutEffect, useState } from 'react';

export default function HeaderLogoArea() {
  const [docWidth, setDocWidth] = useState<number>(0)

  useEffect(() => {
    function handler() {
      if (window) setDocWidth(window.innerWidth)
    }
    handler()
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [setDocWidth])

  return (
    <div className="header-logo-area">
      {docWidth >= 500 && <img src="./logo.png" alt="Nevaeh Logo" />}
      {docWidth < 500 &&
        <div className="logo-container">
          <img src="./n-logo.png" alt="Nevaeh Logo" />
          <h1 className="h5">Nevaeh Insurance</h1>
        </div>
      }
    </div>
  );
}
