import { LessonEnum, Resource, Section } from '@prisma/client';

export const lesson88mph = {
  name: "Warm up the engine",
  type: LessonEnum.BRANCHED,
  sections: {
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
        content: `<h5>88mph has 6 main products. For detailed information about the products and their use cases and risks please complete lessons until lesson 5th.</h5>
        <ol>
        <li> Fixed-interest rate bonds
                A Fixed-Interest Rate Bond or FIRB represents the capital deposited by someone into 88mph
                to generate fixed-rate interests over a predetermined period of time.
        </li>
        <li> Zero Coupon Bond
                Zero-coupon bonds (ZCB) are bonds trading at a discount, that can be redeemed for their
                full face value when they become mature on a certain date (Investopedia).
                For example, if you purchased a zero-coupon bond for $900 with a $1,000 face value
                that matures in 1 year, it means that after 1 year, you will be able to redeem the full face value
                of the bond: $1,000, in other words, an annualized yield of 10%.
                In the context of 88mph, zero-coupon bonds are ERC20 tokens that wrap around fixed-interest rate deposits.
                Anyone can mint a ZCB using a FIRB, and trade it. They are 1-for-1 redeemable for
                the underlying token (e.g. UNI) upon maturation of the underlying FIRBs.
        </li>
        <li>Floating Rate Bonds
                The Floating-Rate Bond (FRB) allows users to fund the debt created by the Fixed-Interest Rate Bonds (FIRB).
                The debt is the fixed-interest rate promised to FIRB holders. You will earn the floating-interest rate offered
                by the underlying protocol (Compound, Aave, etc, used to generate the FIRB's yield) on the debt-funded and
                the FIRB initial deposit. Also, you'll earn some MPH rewards as an FRB holder.
        </li>
        <li> Structured Products
                Not implemented yet.</li>
                <li> Security and Audits
                Not implemented yet.</li>
                <li> 88mph v3
                Not implemented yet</li>
        </ol>`
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
  resources: {
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

export const akropolisLesson = {
  name: "Akropolis",
  type: LessonEnum.BRANCHED,
  sections: {
    createMany: {
      data: [{
        title: "Introduction",
        content: `Akropolis is a provider of decentralized finance products with an emphasis on asset yield generation. Our mission is to give users (both new and crypto-native) the tools to save, grow and provision for the future safely, with access to a variety of non-fiat and non-inflationary assets, without dependence on geography or central counterparty. To do this, Akropolis offers an easy-to-use yield aggregator product featuring curated best-in-class yield generation strategies from various protocols across DeFi, as well as developing our own yield-generation strategies on multiple chains.`
      }, {
        title: "Why should I use it?",
        content: `Using the Akropolis dApp, users can:

        - Easily onboard into DeFi from their traditional bank accounts via Dharma and Ramp Network.
        - Calculate and compare annual percent yield (APY) of various assets
        across top DeFi yield generating strategies such as Yearn Finance
        Vaults.
        - Easily see their balance, average APY, and yield earned.
        - Deposit and withdraw assets and claim yield rewards all in one place.
        - Use dollar-cost averaging to enter positions/strategies (coming soon)
        - Stake their $AKRO tokens for liquidity mining rewards and protocol revenue share (coming soon).
        - Participate in Akropolis protocol governance via Snapshot.

        In this way, Akropolis acts as a one-stop-shop for decentralized
        savings and high-yield accounts. We believe that our products and
        services will enable retail and institutional clients alike to quickly
        and easily onboard into decentralized finance.`
      }, {
        title: "How do I use it?",
        content: `*This assumes you are using a Metamask wallet, for Dharma or Ramp Network onboarding, refer to the resources, help is offered on the Akropolis Wiki*

        - Once your wallet is connected, the first thing on the dashboard is the ability to deposit certain ERC20 tokens into savings vaults. They have DAI and USDC vaults, as well as others that integrate DeFi protocols such as Curve and Compound.
        - Choose a vault, and once you click on the Vault you would like to deposit into, you simply deposit the token into the vault, accept the Metamask transaction, and congrats! Your deposit is now earning yield! (At the time of this writing, the yield for DAI is 4.62% APY)
        - Users also have the ability to stake their Akropolis tokens (AKRO) through Akropolis to earn a higher return on their deposit (26.71% APY at time of writing).
        - To participate in Akropolis governance, users will be able to go to the "Gov" tab at the top of the page and use their AKRO tokens to vote on any active proposals for the protocol.`
      }, {
        title: "Technologies",
        content: `
        Akropolis is built on top of Yearn's Vaults and is meant to act as a front-end for the Yearn user experience. The front-end is designed to give institutional and retail users an easy onboarding experience for the DeFi protocol and DeFi in general, using Dharma to link user's bank accounts and allow them to easily onboard with Fiat.
        `
      }]
    }
  },
  resources: {
    createMany: {
      data: [{
        title: 'Wiki',
        content: 'https://wiki.akropolis.io/ '
      }, {
        title: 'Blog',
        content: 'https://wiki.akropolis.io/blog/2021'
      },
      {
        title: 'Roadmap',
        content: 'https://www.notion.so/675c3c2d7f6b44fe8ead0f43f9e79482?v=833c08d791e44053bdf0f442f0adc6f6'
      }]
    }
  }
}

export const polygonBranchedLesson = {
  name: "Polyvalent !",
  type: LessonEnum.BRANCHED,
  sections: {
    createMany: {
      data: [{
        title: "Introduction",
        content: `Polygon offers a great scaling solution as it offers EVM-compatible sidechains to any Dapp with the ability to deploy on it.

        Scaling solutions such as these have been the topic of much research since the invention of Ethereum, as it was always known that the EVM would simply not be able to keep up with the amount of users flooding the network every second.

        According to Polygon, these blockchains offer the benefits of a private network such as the speed and flexibility, as well as the benefits of the Mainnet like security and interoperability.`
      }, {
        title: "Technologies",
        content: `Polygon uses two main technologies for its different ways to secure Layer 2, and has plans to add many more.

        Currently, the Secured Chains are operating on the Matic Plasma protocol, while the stand-alone chains are currently using Polygon’s POS consensus protocol.

        These technologies ensure that the Dapp deployed on Polygon’s Layer 2 maintains the same immutability and security on the network that it would have if it were deployed on the mainnet.`
      }, {
        title: "Layer 2",
        content: `The scaling solution that Polygon provides is possibly invaluable to anyone who was trying to use the network shortly after the price of Ether rose to all time highs.

        At the same time, the network was fully congested, and people were finding out that they had spent upwards of thousands of dollars in gas fees to get their transactions through.
        Polygon offers two scaling solutions for those who would like to utilize layer 2: A secured chain using the Plasma solution, and a dedicated Matic sidechain.

        The secured chains are still verified and secured by either the Ethereum mainnet or a trusted validator, while the dedicated sidechains must have their own validators for the chain. Both of these solutions have significantly helped scale DeFi, and greatly contributed to the health of the Ethereum network.`
      }, {
        title: "Best Projects",
        content: `
            <h5>AAVE</h5>
            <p>Aave is the leader in Total Value locked in DeFi, and is also deployed on Polygon, bringing the open-source liquidity protocol to layer 2 for borrowing and lending in a less gas-intensive way.
            </p>
            <h5>OCEAN PROTOCOL</h5>
            <p>
            Your data is an asset in today’s world, and Ocean Protocol provides a way that you can publish, consume, and sell that asset. Ocean on Polygon provides a way to do this that is fast and inexpensive.
            </p>
            <h5>SUSHISWAP</h5>
            <p>
            SUSHISWAP brings a new idea to the popular AMM model- revenue sharing and a forum-driven network style. These plus Polygon allow users to dive into DeFi cheaper than ever before, greatly helping transition and onboard those from TradFi.
            </p>
        `
      }]
    }
  },
  resources: {
    createMany: {
      data: [{
        title: 'YouTube',
        content: 'https://www.youtube.com/embed/PKw0RTT1Hp4'
      }, {
        title: 'Polygon projects',
        content: 'https://www.block123.com/en/feature/polygon-matic-network-list/'
      }, {
        title: 'Quick Links',
        content: `
        <ul>
          <li><a href="https://docs.matic.network/">Docs</a></li>
          <li><a href="https://polygon.technology/get-started/">Get started</a></li>
        </ul>
        `
      }, {
        title: 'Tutorials',
        content: `
          <ul>
            <li><a href='https://www.youtube.com/watch?v=IijtdpAtOt0'>Polygon Explained - Finematics</a></li>
            <li><a href='https://www.youtube.com/watch?v=LAv_wpDVLlM'>Polygon MetaMask - MoneyZG</a></li>
          </ul>
        `
      }, {
        title: 'Blog',
        content: "https://blog.matic.network/"
      }]
    }
  },
  quests: {
    createMany: {
      data: [{
        title: 'What is Matic ?',
        content: 'https://gitcoin.co/quests/535/what-is-matic'
      }]
    }
  },
  challenges: {
    createMany: {
      data: [{
        title: "Let's cross the bridge !",
        content: `<a href='https://docs.matic.network/docs/develop/wallets/matic-web-wallet/web-wallet-v2-guide/'>Move Funds from Ethereum to Matic</a>`
      }]
    }
  },
  bounties: ["https://gitcoin.co/explorer?network=mainnet&idx_status=open&applicants=ALL&keywords=polygon&order_by=null"]
}