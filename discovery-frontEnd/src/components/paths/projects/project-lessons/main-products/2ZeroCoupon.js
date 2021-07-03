import React from 'react';

function ZeroCoupon(props) {
  return (
    <div>
      <h1>(2) Zero Coupon Bond</h1>
      <p>
        Zero-coupon bonds (ZCB) are bonds trading at a discount, that can be redeemed for their full face value when they become mature on a certain date (Investopedia). For example, if you purchased a zero-coupon bond for $900 with a $1,000 face value that matures in 1 year, it means that after 1 year, you will be able to redeem the full face value of the bond: $1,000, in other words, an annualized yield of 10%.
      </p>
      <p>
        In the context of 88mph, zero-coupon bonds are ERC20 tokens that wrap around fixed-interest rate deposits. Anyone can mint a ZCB using a FIRB, and trade it. They are 1-for-1 redeemable for the underlying token (e.g. UNI) upon maturation of the underlying FIRBs.
      </p>
    </div>
  );
}

export default ZeroCoupon;
