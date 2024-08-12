import React, { useEffect, useRef, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router';
import CustomerReviews from '../../shared/CustomerReviews';
import { SelectionEnum } from '../../../utils/Enums';
import { imageURL } from '../../../constants/constants';

const questionJsonForFundraising = [
  {
    id: 1,
    question: 'Why should I choose iCause for fundraising? What makes it different from other crowdfunding sites?',
    text:
      <div className="iCause-Partners">
        The Icause fundraising model is unique in Australia and the world.  By choosing Icause you are choosing a platform that offers you the following points of difference which you won’t find on any other crowdfunding platform in the world:
        <ul>
          <li>
            A donation is made when you switch a provider or plan via a third party bill comparison website, cheapbills. A proportion of the commission earned by cheapbills is donated to an Icause fundraiser of your choice. No other crowdfunding platform offers this.
          </li>
          <li>
            You have more payment options on offer to be able to donate if you don’t want to switch provider or plans: PayPal, Google Pay, Apple Pay and more which are not available on other platforms. At least not the range of options.
          </li>
          <li>
            You get a complete and free marketing tool in which you can create your campaign, and which allows you to SMS, email and track your revenue. No other crowdfunding platform offers this.
          </li>
        </ul>
      </div>
  },
  {
    id: 2,
    question: 'How do I create a personal fundraising campaign?',
    text:
      <div className="iCause-Partners">
        Creating your personal fundraising campaign is easy as 1,2,3. Simply register your Icause account using your email address or Facebook, then you will be guided through the steps (how many?)required to create your campaign. You will need to enter your details including:
        <ul>
          <li>
            Name, date of birth, address, mobile number, and email address.
          </li>
          <li>
            Bank Account details to receive funds at the end of the campaign.
          </li>
          <li>
            Username and password
          </li>
          <li>
            Fundraiser name
          </li>
          <li>
            Fundraiser details such as your story or information about the cause you are supporting.
          </li>
          <li>
            Personal message that your supporters will receive when you share your campaign – you can create your own or choose from 5 Icause templates.
          </li>
          <li>
            Email address and/or mobile number of supporters you would like to share your campaign with (optional).
          </li>
        </ul>
      </div>
  },
  {
    id: 3,
    question: 'How do I setup my Campaign and account?',
    text:
      <div>
        <div>
          <span className="font-weight-bold">Step 1:</span> Go to sign up  signup and enter your details
        </div>
        <div>
          <span className="font-weight-bold">Step 2:</span> Confirm your email <br />
          <p style={{ color: "black" }}>
            You’ll need to confirm your email. Click here if you haven’t received the verification email.
          </p>
        </div>
        <div>
          <span className="font-weight-bold">Step 3:</span> Verify your phone number <br />
          <p style={{ color: "black" }}>
            If your phone number hasn’t been verified in the last 30 days, you’ll be asked to add your number after selecting “Set up withdrawals.”
          </p>
        </div>
        <div>
          <span className="font-weight-bold">Step 4:</span>  Select Beneficiary <br />
          <p style={{ color: "black" }} className="m-0"> 
            Once your phone number is verified, you’ll  given the following options to choose who will manage the funds: <br /><br />
            Myself: “Myself” means that you will be either withdraw to your own personal bank account or to an organization's bank account that you manage <br /><br />
            Someone else: "Someone else" means that you’re adding a beneficiary who will withdraw to their personal bank account or to the organization that they manage. You can read more about that process below. <br /><br />
            Personal, Company, or Partnership: Personal means an individual is withdrawing money to their own bank account. Company or partnership is to an organisation.<br />
          </p>
        </div>
        <div>
          <span className="font-weight-bold">Step 5:</span> Add your personal information
          <p style={{ color: "black" }}>
            In your dashboard you’ll be asked to verify your identity through factors like name, age and address.
          </p>
        </div>
        <div>
          <span className="font-weight-bold">Step 6:</span> Add your Banking Information
          <p style={{ color: "black" }}>
            Please ensure that you enter the correct banking information e.g., correct BSB and account number as we are not responsible for funds getting sent to wrong accounts due to typo errors.
          </p>
        </div>
      </div>
  },
  {
    id: 4,
    question: 'What are the Requirements? ',
    text:
      <div>
        {/* <span >Just a 3- Step Verification Process</span> */}
        <p style={{ color: "black" }}>So much goes into keeping your funds safe
        , so it’s important that we verify all of our users. Don’t worry, it’s easy! To verify your account you’ll need the following: 
         {/* It is important that you know how exactly this process works so we’ve broken down our four-step process here. You’ll know the documents you need, and steps involved to starting your crowdfunding campaign. */}
         </p>
        {/* <p style={{ color: "black" }}> Checklist</p> */}
        <div className="iCause-Partners">
          <ul>
            <li>An Australian bank account</li>
            <li>An Australian phone number</li>
            <li>Photo ID which must be in colour - passport, driver’s license</li>
            <li>Proof physical address in Australia e.g. Any Utility Bill such as Electricity, Gas, Mobile, Broadband, Health insurance or Bank Statement</li>
            <li>Must be at least 18 years of age</li>
          </ul>
        </div>
      </div>
  },
  {
    id: 5,
    question: 'Can a campaign be public or private?',
    text:
      <div>
        You can choose to make your campaign either public or private. If its public, it would be open to everyone. If its private, you only invite who you want. You will be asked to choose an option during the setup of your campaign.
      </div>
  },
  {
    id: 6,
    question: 'How long does my fundraising campaign last?',
    text:
      <div>
        Your campaign must last for no more than 30 days. Unless we agree to an extension of your campaign, this is the maximum time we give to run a campaign.
      </div>
  },
  {
    id: 7,
    question: 'When will I  receive funds?',
    text:
      <div>
        Funds received for a campaign will be processed within 14 Business Days following the end date of the campaign.
      </div>
  },
  {
    id: 8,
    question: 'Invoice',
    text:
      <div>
        A system generated invoice will be sent on your nominated email before fund transfer. Timeframe of invoice will be 1-2 days before the payments transfer.
      </div>
  },
  {
    id: 9,
    question: 'Payment Portals',
    text:
      <div>
        We work with 3rd party payment partners like Stripe, PayPal and cheap bills to safely coordinate the transfer of funds to your fundraiser. They verify your personal information to ensure that funds sent are to the correct individuals and organisations.
      </div>
  },
  {
    id: 10,
    question: 'Can I extend my fundraising campaign?',
    text:
      <div>
        At the end of your campaign, you have the option to extend your campaign by 15 days. You can extend your campaign a maximum of twice, for a total campaign length of 60 days but no more.
      </div>
  },
  {
    id: 11,
    question: 'Can I end my campaign early?',
    text:
      <div>
        If you wish to end your campaign early you can do this through your Icause dashboard.
      </div>
  },
  {
    id: 12,
    question: 'How do I share my campaign on social media?',
    text:
      <div>
        When you create your campaign, you will be given the option to share your campaign on Facebook, Twitter and Instagram. You will also be given a unique URL to share via your chosen social media platform, email, or SMS. You can access these options at any point through your Icause dashboard.
      </div>
  },
  {
    id: 13,
    question: 'How do I share my campaign via SMS and email?',
    text:
      <div>
        There are two ways to share your campaign via SMS and email:
        <br />
        <p style={{ color: "black" }}>
          1.When you create your campaign, you will be asked to upload your supporters' email and/or mobile phone number. You can then send these supporters a message through the Icause platform.
        </p>
        <p style={{ color: "black" }}>
          2.You will be given a unique campaign URL. You can share this with friends and family via SMS, email, or social media."
        </p>
      </div>
  },
  {
    id: 14,
    question: 'How do I edit my campaign details?',
    text:
      <div>
        You can edit your campaign details at any time through your Icause dashboard. Simply log in to your Icause account using the username and password created when you registered your account.
      </div>
  },
  {
    id: 15,
    question: 'How do I post updates to my campaign page?',
    text:
      <div>
        Your Icause dashboard allows you to post updates to your campaign at any time, so your supporters can join you on the journey and share in your success.
      </div>
  },
  {
    id: 16,
    question: 'How do I know how much I’ve raised?',
    text:
      <div>
        On your personal Icause dashboard, you can track your funds as they are received. Your dashboard will show a graph of the accumulated funds to date, so you know if you’re on track to achieve your goal.
      </div>
  },
  {
    id: 17,
    question: 'How much does it cost to run an Icause campaign?',
    text:
      <div>
        Setting up your Icause campaign is completely free. Icause charges a platform fee of 5% of the total amount of money raised by a fundraiser in relation to each campaign.
      </div>
    // text: 'Setting up your Icause campaign is completely free. Icause will charge a small 5% platform fee from total amount collected plus transaction fee for below Merchants Visa, Master, Apple and Google Pay 1.75% +A$0.30 for domestic cards 2.9% +A$0.30 for International cardses from the merchant are passed on to you. For example visa, master For Paypal Standard rate for receiving domestic transactions Transaction Type Rate Commercial Transactions 2.60% + fixed fee QR Code Transactions – 10.01 AUD and above 0.90% + fixed fee QR code Transactions – 10.00 AUD and below 1.40% + fixed fee Receiving international transactions Transaction Type Rate Commercial Transactions 3.60% + fixed fee QR Code Transactions – 10.01 AUD and above 1.90% + fixed fee QR code Transactions – 10.00 AUD and below 1.40% + fixed fee'
  },
  {
    id: 18,
    question: 'How do I donate directly to a fundraising campaign?',
    text:
      <div className="iCause-Partners">
        Icause makes it so easy to donate. Simply visit your chosen fundraiser’s campaign page and nominate the amount you’d like to donate. You can donate using: <br />
        <ul >
          <li>All major credit cards</li>
          <li>	All major debit cards</li>
          <li>	PayPal, Google Pay and Apple Pay</li>
        </ul>
      </div>

  },
  {
    id: 19,
    question: 'How do I donate directly to a charity?',
    text:
      <div className="iCause-Partners">
        To support your chosen charity or charities, simply visit their Icause page and nominate the amount you would like to donate. You can complete your donation using:
        <ul >
          <li>All major credit cards </li>
          <li>	All major debit cards</li>
          <li>	PayPal, Google Pay and Apple Pay </li>
        </ul>

      </div>
  },
  {
    id: 20,
    question: 'Can I donate to multiple charities?',
    text:
      <div>
        Yes. If you have multiple charities you would like to support, you can make your donation in one easy transaction by creating an Icause charity portfolio.
      </div>
  },
  {
    id: 21,
    question: 'How do I use my household bills to donate?',
    text:
      <div>
        Icause offers you the unique opportunity to donate AND make savings on your household bills at the same time. It’s a first in crowdfunding in the world. On your chosen fundraiser’s Icause page, simply click on ‘Donate’ and then choose the option to submit your chosen bill to us for review. We are not a marketing company and do not have an affiliation with any suppliers. We work with a trusted third-party marketing company to make sure we find you the best available deal on your bill. <br /> If you then choose to change your provider or plan through Icause, 30% of the commission made by the marketing company will be donated to your chosen cause. You can choose to submit multiple bills for review to increase your donation amount.When you donate by bill, the 5% platform fee is instantly removed and will not be charged by iCause in relation to that campaign.
      </div>
  },
  {
    id: 22,
    question: 'How do I receive funds at the end of my personal fundraising campaign?',
    text:
      <div>
        Your campaign will automatically be suspended, and funds are deposited into your nominated bank account when your campaign’s end date is reached.
      </div>
  },
  {
    id: 23,
    question: 'When will I receive the funds I’ve raised?',
    text:
      <div>
        Funds will automatically be transferred at the close of your campaign. Funds will take up to 14 days to appear in your nominated bank account.'
      </div>
  },
  {
    id: 24,
    question: 'How do I edit my personal details?',
    text:
      <div>
        To change your account details, simply log into your Icause account using the username and password created at registration. You can then use the ‘Account Details’ page to update your personal details.
      </div>
  },
  {
    id: 25,
    question: 'How do I edit my bank details?',
    text:
      <div>
        If you need to update your nominated bank account, simply log into your Icause account and navigate to the ‘Account Details’ section. Please be aware that bank account details cannot be changed after the close of a campaign, at which point funds will be transferred automatically to the bank account details registered on your account.
      </div>
  },

  {
    id: 26,
    question: 'Withdrawing funds raised – what you must know?',
    text:
      <div>
        You’ve done your fundraiser, shared it, and now you just want to withdraw the funds you’ve raised. 
        {/* Find out what your next steps are: */}
        {/* <p style={{ color: "black" }}> Select "Withdraw" on your dashboard </p> */}
        <p style={{ color: "black" }}>Go to your Icause dashboard and select the withdraw option.
          You will receive a confirmation email that your campaign has finish.
        </p>
        <p style={{ color: "black" }}>Receive  a confirmation email that your campaign has  finished.</p>
      </div>
  },
  {
    id: 27,
    question: 'Email verification',
    text:
      <div>
        When you set up your account, you will receive an email with the subject line "Verify your Icause email address". 
        {/* In the email titled "Verify your Icause email address",  */}
        you just need to click the verify email" button. If you are having trouble receiving your verification email, please check your spam. Don’t forget to add Icause to your list of contacts to stop future emails going into spam. <br /> Remember to wait at least 3O minutes.! for your verification email as there can be a delay in receiving the email. However, it shouldn’t take more than 30 minutes. If you’re still not receiving a verification email, then please contact our team at <a href="https://www.icause.com.au/" target="_blank" rel="noreferrer">support@icause.com.au</a>. We aim to respond within 48 hours.!
      </div>
  },
  {
    id: 28,
    question: 'HOW  do I reset my password?',
    text:
      <div>
        If you’ve forgotten your password, simply follow the ‘Forgot password?’ link on the login page. If you know your password but would like to update it, log into your Icause account and navigate to the ‘Account Details’ page.'
      </div>
  },
  {
    id: 29,
    question: 'How do I know my information and bank details are secure?',
    text:
      <div>
        The privacy and the security of your personal details are very important to us. We collect, handle and use your personal information in accordance with our Privacy Statement (available at <a href="https://www.icause.com.au/privacy-policy" rel="noreferrer" target="_blank">https://www.icause.com.au/privacy-policy</a> and Terms of Use (available at <a href="https://www.icause.com.au/guarantee" rel="noreferrer" target="_blank">https://www.icause.com.au/guarantee</a> We do not share your data with any third parties for marketing purposes."
      </div>
    // text: "The privacy and the security of your personal details are very important to us. We use secure technologies and adhere strictly to data privacy legislation when receiving and storing your data. In the instance that you choose to donate by uploading a utility bill for review, we will share only the required data with a trusted third-party review site. We thoroughly scrutinise the privacy and security policies of all third parties we operate with to ensure they adhere to the same strict standards.  We will not share your data with any third parties for marketing purposes.Icause operates using best practice policies under the following legislation:•	The Privacy Act (1988) including the Australian Privacy Principles (APPs)•	Telecommunications (Telemarketing and Research Calls) Industry Standard 2017•	The Do Not Call Register Act (2006)•	The Spam Act (2003)"
  },
  {
    id: 30,
    question: 'How Do I report a fraud?',
    text:
      <div>
        To report any fraudulent activity, contact us at <a href="https://www.icause.com.au/" target="_blank" rel="noreferrer">support@icause.com.au</a>
      </div>
  },
  {
    id: 31,
    question: 'What Happens if the campaign or organisation is a fraud?',
    text:
      <div>
        if a fraud is reported, our compliance team will investigate the matter. We reserve the rights to hold any payments made to the organisation or campaign during investigation. For further information please check our terms and condition. <a href="https://www.icause.com.au/guarantee" target="_blank" rel="noreferrer">https://www.icause.com.au/guarantee</a>
      </div>
  },
  {
    id: 32,
    question: 'WILL I RECEIVE A REFUND IF I HAVE DONATED TO A FRAUDULENT CAMPAIGN OR ORGANISATION?',
    text:
      <div>
        Once our investigation is complete, if a campaign or organisation has been deemed fraudulent, you can request a refund of your donation by contacting 
        {/* Once our investigation is over and found a campaign or organization is fraudulent. We will not release the funds. However, people who are affected, can request their donation reimbursed . A request can be made on  */}
        <a href="https://www.icause.com.au/" target="_blank" rel="noreferrer">refunds@icause.com.au</a>
      </div>
  },

];

const questionJsonForPartners = [
  {
    id: 1,
    question: 'How do I create a fundraising campaign for my ORGANISATION like a charity or school?',
    text:
      <div className="iCause-Partners">
        Icause is the perfect way to fundraise organisations. Creating a campaignSimply click Start Fundraising and  will be guided step-by-step through the creation of your campaign.  <br />
        <ul>
          <li>	Enter your  Name, address, mobile number, and email address of the Icause account holder.</li>
          <li>Create a Username and Password.</li>
          <li>	Provide  Bank Account details to receive funds at the end of the campaign.</li>
          <li>Enter your organisation’s ABN</li>
          <li>Create your Fundraiser name•Fundraiser details such as your story or information about the cause you are supporting.</li>
          <li>Personal message that your supporters will receive when you share your campaign – you can create your own or choose from 5 Icause templates.•Email address and/or mobile number of supporters you would like to share your campaign with.</li>
        </ul>
        <p>Now you’re ready to run your campaign. You can enter as many details as you want to – we recommend using all our features to engage your supporters and reach your goals, including fundraiser details, a personal message, a story and the email addresses and mobile numbers of your supporters to share your campaign.</p>
      </div>
  },
  {
    id: 2,
    question: 'How do I send funds to a charity at the end of my personal charity fundraising campaign?',
    text: 'When the end date of your charity fundraising campaign is reached, funds will automatically be transferred to your nominated charity on your behalf. Funds will take up to 14 business days from the end date of the campaign to appear in the nominated charity’s bank account.'
    // text: 'When the end date of your charity fundraising campaign is reached, funds will automatically be transferred to your nominated charity on your behalf.'
  },
  {
    id: 3,
    question: 'How does my ORGANISATION  receive funds at the end of fundraising campaign?',
    text: 'At the end of your fundraising campaign, your funds will be automatically deposited into your nominated bank account.'
  },
  {
    id: 4,
    question: 'How can I become an Icause partner?',
    text: 'Icause is proud to partner with a range of organisations. To become a partner and be featured on Icause simply fill in the partner form and we will be in touch to discuss the details with you.'
  },
  {
    id: 5,
    question: 'Can I search ICAUSE FOR  my favorite ORGANISATION  such as a school, community or charity icause?',
    text: 'Yes, you can search for any organisation  on the directory/ listing pages. Simply enter your postcode or the name of an organisation  in the search bar or browse the listings. '
  },
  {
    id: 6,
    question: 'What is the benefit of registering as ORGANISATION?',
    text:
    <div className="iCause-Partners">
       By registering as an organisation with Icause, you will unlock a range of exclusive benefits, including: <br />
        <ul>
          <li>	Create your own Icause page, so you can raise funds all year round, even without an active campaign</li>
          <li>	Run up to three campaigns concurrently. </li>
          <li>Enable likes, shares and comments on your page to engage your supporters.</li>
          <li>Collect recurring or one-off donations.</li>
          <li>
            	Link your Icause page with your social platforms to get noticed more.
          </li>
          <li>	Send emails and SMS campaigns for free, directly from your Icause dashboard.</li>
          
         </ul>
       
      </div>
    
    // text: 'Organization can run up to three campaigns concurrently. They can also create their own page on icause. '
  },
  {
    id: 7,
    question: 'What is the advantage of creating an organization?',
    text: 'There are many benefits. You can raise money 12 months in a year, without having an active campaign. People can like, share and comment on your page. You can collect recurrent or once off donations. You can link your social media page to icause platform -Sent emails and sms for free to all your potential donors.'
  },
  {
    id: 8,
    question: 'What is the difference between RECURRING   DONATION  vs A ONE-OFF DONATION?',
    text: 
    <div>
<p>A recurring donation is a regular donation, allowing supporters to nominate an amount to be deducted automatically from their account each month. You can set up a recurring donation using PayPal, Visa, Mastercard, Apple Pay or GPay. Unfortunately, you cannot use the Donate a Bill option for recurring donations.</p>
<p>A one-off donation is a one-time event, allowing supporters to nominate an amount to donate to their chosen cause. You can donate using any of the direct donation payment options, or choose to use your utility bill to donate.</p>
    </div>
    // 'Recurrent donation is monthly, which mean people can nominated an amount which will be deduced from their account. Unfortunately, you cannot receive Bills donation from recurrent payment. Donor may have to select other payment option such as paypal, Visa, Master, and Apple & Gpay. Whereas once off people can us utility Bill’s donation.'
  },
  {
    id: 9,
    question: 'Is There a selection Criteria to register as partner on icause.',
    text: 'No! anyone can become a partner. Icause provides a platform where there is more opportunity to raise money. '
  },
  {
    id: 10,
    question: 'Can an ORGANISATION  run an event And an active campaign together?',
    text: 'Yes, an organisation  can run, three active events and three active campaigns concurrently. However, an individual can only run one event and one active campaign concurrently.'
  },
  {
    id: 11,
    question: 'What is Bill Donation?',
    text: 
    <div>
      <p>Icause offers the unique option for your supporters to use their utility bill to donate, meaning they can support your cause, even if they don’t have funds available. </p>
      <p>We can make this happen through our partner company Cheap Bills. Supporters simply have to submit one or more of their utility bills for review, and if they choose to change to a new service provider, Cheap Bills donates 30% of the commission to the nominated fundraising campaign.</p>
      <p></p>For example, by donating an electricity bill, Cheap Bills cheap bills will provide $51 (being 30% of the commission received by  Cheap Bills will provide $51 ( 30% of the commission received by  Cheap Bills for you switching or changing your plan) towards your nominated campaign on the icause platform.
    </div>
    // 'Switch and donate - Which means, by switching or changing the plan of your utility service to another provider. Icause utility partner company cheap bills donates 30% of the commission it receives for you switching or changing the plan to another provider towards a fundraising campaign. For example, by donating an electricity bill, cheap bills will provide $51 (being 30% of the commission received by cheap bills for you switching or changing your plan) towards your nominated campaign on the icause platform.'
  },
  {
    id: 12,
    question: 'What is the relationship BETWEEN  icause and CHEAP BILLS?',
    text: 
    <div>
      <p>Icause has partnered with Cheap Bills to offer supporters the unique opportunity to donate to their favourite cause simply by switching their utility provider, and potentially making a saving in the process – it's a win-win!</p>
      <p>Supporters simply have to submit one or more of their utility bills for review, and if they choose to change to a new service provider, Cheap Bills donates 30% of the commission to the nominated fundraising campaign.</p>
      <p>For example, by donating an electricity bill, Cheap Bills will provide $51 (30% of the commission received by Cheap Bills for you switching or changing your plan) towards your nominated campaign on the Icause platform.</p>
    </div>
    // 'Bill’s donation is a revolutionary concept. It allows users to assist a campaign by choosing to change their utilities provider or plan through the cheapbills website affiliated with Icause, that will donate 30% of the commission earned by cheapbills for you switching or changing your plan to another provider to an icause campaign of your choice. '
    // text: 'Bill’s donation is a revolutionary concept. Icause is mediation platform. It connects cheap bills services to help user to raise money through their Bills. In return people can find a better deal on their utilities and help a cause.  '
  },



  {
    id: 13,
    question: 'How much does it cost to run an Icause campaign?',
    text:
      <div>
        <p style={{ color: "black" }}>Setting up your Icause campaign is completely free. Icause will charge a  5% platform fee from the total amount raised  for each campaign plus a transaction fee for the below merchants: </p>
        <p style={{ color: "black" }} className="font-weight-bold mb-0"> Visa, Mastercard, Apple and Google Pay</p>
        <p style={{ color: "black" }} className=""> 1.75% +A$0.30 for domestic cards 2.9% +A$0.30 for International cards
          {/* es from the merchant are passed on to you. For example visa, master  */}
          </p>
        <p style={{ color: "black" }} className="font-weight-bold mb-0">  Paypal</p>
        <p style={{ color: "black" }} className="m-0">Standard rate for receiving domestic transactions</p>
        <p style={{ color: "black" }} className="m-0">Transaction Type Rate</p>
        <p style={{ color: "black" }} className="m-0">Commercial Transactions 2.60% + fixed fee</p>
        <p style={{ color: "black" }} className="m-0">QR Code Transactions – 10.01 AUD and above 0.90% + fixed fee</p>
        <p style={{ color: "black" }} className="m-0">QR code Transactions – 10.00 AUD and below 1.40% + fixed fee</p>
        <p style={{ color: "black" }} className="m-0">Receiving international transactions</p>
        <p style={{ color: "black" }} className="m-0">Transaction Type Rate</p>
        <p style={{ color: "black" }} className="m-0">Commercial Transactions 3.60% + fixed fee</p>
        <p style={{ color: "black" }} className="m-0">QR Code Transactions – 10.01 AUD and above 1.90% + fixed fee</p>
        <p style={{ color: "black" }} className="m-0">QR code Transactions – 10.00 AUD and below 1.40% + fixed fee</p>
      </div>
   
  },
  
];

const Faq = (props) => {
  const history = useHistory();
  const { getCustomerReviews, loading, customerReviews } = props;
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedAnswer, setIdForQuestion] = useState(-1);
  const [selectedType, setSelectedType] = useState();
  const [questionAnswerList, setQuestionAnswerList] = useState();
  const [questionaryTitle, setQuestionaryTitle] = useState('');
  const questionaryDivRef = useRef(null);

  const executeScroll = () => questionaryDivRef.current.scrollIntoView();

  useEffect(() => {
    getCustomerReviews();
    setSelectedType(SelectionEnum.Fundraising);
    setQuestionAnswerList(questionJsonForFundraising);
    setQuestionaryTitle('What to know about crowdfunding');
  }, [questionJsonForFundraising, SelectionEnum]); // eslint-disable-line react-hooks/exhaustive-deps 
  
  useEffect(() => {
    resetQuestionary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType])

  const getEnterKeyOnInput = (event) => {
    if ((event === "searchIcon" || event.key === 'Enter') && searchKeyword) {
      var searchedData = [];
      if (selectedType === SelectionEnum.Fundraising) {
        searchedData = questionJsonForFundraising.filter(item => item.question.includes(searchKeyword) || item.text.includes(searchKeyword));
      } else {
        searchedData = questionJsonForPartners.filter(item => item.question.includes(searchKeyword) || item.text.includes(searchKeyword));
      }
      setQuestionAnswerList(searchedData);
      executeScroll();
      if (searchedData && searchedData.length > 0) {
        setIdForQuestion(searchedData[0].id);
      } else {
        setIdForQuestion(-1);
      }
    }
  }

  const resetQuestionary = () => {
    if (selectedType === SelectionEnum.Fundraising) {
      setQuestionAnswerList(questionJsonForFundraising);
    } else {
      setQuestionAnswerList(questionJsonForPartners);
    }
    setSearchKeyword('');
    setIdForQuestion(-1);
  }

  return (
    <div>
      <section className="banner banner-faq gen-banner faq-banner">
        <MetaTags>
          <meta name="description" content="Sign in to iCause to start an online fundraiser, track your current campaign or donate to your favourite cause or charity. iCause makes making a difference easy." />
        </MetaTags>
        <div className="container">
          <div className="row  ">
            <div className="col-lg-12 col-md-12 col-sm-12 m-auto">
              <div className="text-wrap">
                <h1 className="text-center">Icause FAQs</h1>
                <p className="text-center">Our FAQs are great for answering all your crowdfunding questions.</p>
                <div className="search-box">
                  <input
                    onChange={(event) => {
                      setSearchKeyword(event.target.value)
                      if (event.target.value === '') {
                        resetQuestionary()
                      }
                    }}
                    type="search"
                    className="form-control  "
                    name=""
                    placeholder="Enter Charity Name. Ex Helpers, Founders, Gates"
                    value={searchKeyword}
                    onKeyDown={(e) => { getEnterKeyOnInput(e) }}
                  />
                  <span onClick={(e) => { getEnterKeyOnInput('searchIcon') }} >
                    <svg id="search_1_" className="search-icon" data-name="search (1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <g id="Group_6443" data-name="Group 6443" transform="translate(0)">
                        <path id="Path_36602" data-name="Path 36602" d="M.122,18.7l5.81-5.81A7.932,7.932,0,1,1,7.11,14.068L1.3,19.878a.417.417,0,0,1-.589,0l-.589-.589A.417.417,0,0,1,.122,18.7Zm11.961-4.533a6.25,6.25,0,1,0-6.25-6.25A6.257,6.257,0,0,0,12.083,14.167Z" transform="translate(0 0)" />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-help py-5 faq-sec-2">
        <div className="container">
          <h3 className="main-heading mt-4 mb-4 mt-md-0 text-center mb-3" onClick={() => history.push('/faq')}>FAQ'S & Help</h3>
          <div className="row align-items-center nav nav-tabs border-none" role="tablist">
            <div onClick={() => {
              setSelectedType(SelectionEnum.Fundraising)
              setQuestionaryTitle('Popular Fundraising Question');
            }} className="col-lg-6 col-md-6 col-sm-6 col-12 text-right faq-img-card active" id="fundraising-tab" data-toggle="tab" href="#fundraising" role="tab" aria-controls="fundraising" aria-selected="true">
              <img style={{ cursor: "pointer" }} src={`${imageURL}faq-sec-2-img-1.png`} alt="img" className="img-fluid" />
            </div>
            <div onClick={() => {
              setSelectedType(SelectionEnum.Partners)
              setQuestionaryTitle('Popular Partners Question');
            }} className="col-lg-6 col-md-6 col-sm-6 col-12 faq-img-card" id="partners-tab" data-toggle="tab" href="#fundraising" role="tab" aria-controls="partners" aria-selected="true">
              <img style={{ cursor: "pointer" }} src={`${imageURL}faq-sec-2-img-2.png`} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <div className="tab-content">
        <section style={{ display: "block" }} className="accordion  accordion-two faq-sec-3 tab-pane fade show active" id="fundraising" role="tabpanel" aria-labelledby="fundraising-tab">
          <div className="container">
            <h3 className="main-heading mt-md-0 text-center mb-5">{questionaryTitle}</h3>
            <div ref={questionaryDivRef} className="row">
              <div className="col-lg-10 mx-auto">
                <div className="accordion pt-2" id="accordionExample">
                  {
                    questionAnswerList?.map(({ id, text, question }, index) => {
                      return (
                        <div key={index} className="card">
                          <div className="card-header" id={`heading${id}`}>
                            <h2 className="mb-0">
                              <button onClick={() => {
                                if (id === selectedAnswer) {
                                  setIdForQuestion(-1);
                                } else {
                                  setIdForQuestion(id);
                                }
                              }} type="button" className={`btn btn-link${selectedAnswer !== id ? ' collapsed' : ''}`}>
                                {question}
                                <i className="fa fa-plus"></i>
                              </button>
                            </h2>
                          </div>
                          {
                            selectedAnswer === id &&
                            <div className="faq-pg-card">
                              <div className="card-body">
                                <p style={{ color: 'black' }}>{text}</p>
                              </div>
                            </div>
                          }
                        </div>
                      );
                    })
                  }
                  {questionAnswerList?.length === 0 &&
                    <div className="result-status"> No Record found</div>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CustomerReviews
        data={customerReviews}
        loading={loading}
      />
    </div>
  );
};

export default Faq;
