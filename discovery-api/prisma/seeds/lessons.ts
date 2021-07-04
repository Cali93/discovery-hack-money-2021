import { LessonEnum, Resource, Section } from '@prisma/client';

export  const lesson88mph ={
  name: "Warm up the engine",
  type: LessonEnum.BRANCHED,
  sections:  {
    createMany: {
      data: [{
        title: "Introduction",
        content: `[88mph](https://88mph.app/) is an Ethereum protocol allowing you to lend your crypto assets at a fixed interest rate. By doing so, you earn $MPH rewards and protocol's revenues.
        You can think of 88mph as a deposit account with which you earn a fixed income and the bank rewards you with loyalty tokens ($MPH) giving you shareholders rights like cash dividends and governance power.`
      }, {
        title: "Governance",
        content: `MPH holders have the power to shape the future of the protocol.
        A dedicated [**Snapshot](https://snapshot.org/#/88mph.eth)*** is live to enable the community of users to signal their preferences on the project developments. Also, Snapshot proposals provide 88mph community members a deep understanding of the protocols offered.

        The governance process of 88mph works by having users signal their preferences with their MPH tokens on various proposals ranging from **protocol parameters*** to smart ways of using the capital assets stored in the treasury for creating new incentives, capitalization, and at the end growth. The 88mph community can vote on 8IP - 88mph Improvement Protocol - proposals using their staked MPH as their vote's weighting.`
      }, {
        title: "88mph Main Products",
        content: `88mph has **6 main products**. For detailed information about the products and their use cases and risks please complete lessons until lesson 5th.

        1. **Fixed-interest rate bonds**
        A Fixed-Interest Rate Bond or FIRB represents the capital deposited by someone into 88mph to generate fixed-rate interests over a predetermined period of time.
        2. **Zero Coupon Bond**
        Zero-coupon bonds (ZCB) are bonds trading at a discount, that can be redeemed for their full face value
        when they become mature on a certain date (Investopedia).
        For example, if you purchased a zero-coupon bond for $900 with a $1,000 face value that matures in 1 year,
        it means that after 1 year, you will be able to redeem the full face value of the bond: $1,000, in other words, an annualized yield of 10%.
        In the context of 88mph, zero-coupon bonds are ERC20 tokens that wrap around fixed-interest rate deposits. Anyone can mint a ZCB using a FIRB, and trade it. They are 1-for-1 redeemable for the underlying token (e.g. UNI) upon maturation of the underlying FIRBs.
        3. **Floating Rate Bonds**
        The Floating-Rate Bond (FRB) allows users to fund the debt created by the Fixed-Interest Rate Bonds (FIRB). The debt is the fixed-interest rate promised to FIRB holders. You will earn the floating-interest rate offered by the underlying protocol (Compound, Aave, etc, used to generate the FIRB's yield) on the debt-funded and the FIRB initial deposit. Also, you'll earn some MPH rewards as an FRB holder.
        4. **Structured Products**
        Not implemented yet.
        5. **Security and Audits**
        Not implemented yet.
        6. **88mph v3**
        Not implemented yet`
      }, {
        title: "How to Use 88MPH",
        content: `
        **Fixed-interest rate bonds:**
        - Head over to the **app**
        - Connect an Ethereum based wallet such as MetaMask
        - Press on "Fixed-interest rate bonds"
        - Select a Pool
        - Deposit your desired amount in stablecoins or tokens including USDC/UNI/yCRV/crvSBTC
        - Choose your Preset lending duration ranging between 7 days to 365 days or enter your custom duration time.
        - After successfully depositing your tokens you will receive an ERC-721 non-fungible token (NFT). You can transfer your NFT to other accounts or even sell it through an NFT Marketplace.
        - When the lending period is over withdraw your principle and the fixed-rate interest earned together with the 88mph rewards.
        - When withdrawing you will have to return 30% of the MPH tokens received at the time of deposit.

        **Floating-rate bonds:**

        - Head over to the **app**
        - Connect an Ethereum based wallet such as MetaMask
        - Press on "floating-rate bonds"
        - Select a Pool
        - Adjust your floating-rate APY prediction ranging from 0% to 17.9%
        - Select the number of deposit debts to fund.
        - Click continue and confirm the transaction.

        **Staking MPH:**

        - To stake your MPH tokens press the “Stake MPH” option in the top left section.
        - Click on the “Stake” button and enter the amount you are willing to stake.
        - That’s it!
        - To Unstake and claim your rewards press the “Unstake all&Claim” button.
        - Staking on 88MPH makes you eligible to collect two kinds of rewards; 88mph protocol fees and yield-farmed tokens earned from the protocols 88mph is connected to.`
      }]
    }
  },
  resources:  {
    createMany: {
      data: [{
        title: 'FAQ',
        content: 'https://docs.88mph.app/additional-documentation/faq'
      }, {
        title: 'Forum',
        content: 'https://forum.88mph.app/'
      }, {
        title: 'Quick Links',
        content: `
          - [**Docs**](https://docs.88mph.app/)
          - [**Main Products**](https://docs.88mph.app/main-products/fixed-rate-interest-bond)
        `
      }, {
        title: 'Tutorials',
        content: `
          - [**88MPH General Overview & Tokenomics**](https://www.youtube.com/watch?v=HNQiuwziHMw)
          - [**Community Tutorials**](https://forum.88mph.app/t/about-the-knowledge-base-category/21)
        `
      }, {
        title: 'Articles',
        content: `
          - [**What is 88mph & MPH ?**](https://morioh.com/p/c9491c460ead)
          - [**88mph 2077**](https://medium.com/88mphapp/88mphs-roadmap-d464787064fd)
        `
      }]
    }
  },
  challenges: {
    createMany: {
      data: [{
        title: "Let's ride !",
        content: `[**Make your first deposit**](https://88mph.app/deposits)`
      }, {
        title: "You are on pool position !",
        content: `**[Stake in the MPH liquidity mining program](https://88mph.app/farming)**`
      }]
    }
  },
  bounties: ["https://gitcoin.co/explorer?network=mainnet&idx_status=open&applicants=ALL&keywords=88mph&order_by=null"]
}