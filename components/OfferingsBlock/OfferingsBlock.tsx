import React from 'react';

export default function OfferingsBlock() {
  return (
    <div className="offerings-grid">
      <h1>Our Offerings</h1>
      <div className="card offering-card">
        <h2 className="h3">Our Employer Group Products</h2>
        <ul>
          <li>Stop loss</li>
          <li>Supplemental Medical</li>
          <li>Carve out pharmacy</li>
          <li>TBD "All innovative ideas considered"</li>
        </ul>
      </div>
      <div className="card offering-card">
        <h2 className="h3">Program Characteristics</h2>
        <ul>
          <li>Short-tail risk</li>
          <li>Historical track record of profitability</li>
          <li>Turnkey (e.g., administration, underwriting, sales)</li>
          <li>Minimum of five years in the business</li>
          <li>Revenue between $10m-$100m</li>
        </ul>
      </div>
    </div>
  );
}
