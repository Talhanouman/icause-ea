import React, { useState } from 'react';

const HowToDonateWithReadMore = (props) => {
    
    const [isFirstContentExpanded, setIsFirstContentExpanded] = useState(false);
    const [isSecondContentExpanded, setIsSecondContentExpanded] = useState(false)
    const [isThirdContentExpanded, setIsThirdContentExpanded] = useState(false);

    return(
        <section className="how-to-donate">
        <div className="container-lg container pt-md-0 pt-2">
          <h2 className="main-heading text-center pt-4 mb-4"> <span>How Does It</span> Work?</h2>
          {/* <h2 className="main-heading text-center py-4"> <span>How How to </span> Donate?</h2> */}
          <h6 className='text-center pb-4'>icause gives you more ways to raise and donate money for the causes you care about.</h6>
          <div className="row justify-content-center">
            
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card after2 home-donate-card">
                <div className="box">
                  <span className="">1</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="63.295" viewBox="0 0 48 63.295">
                    <g id="XMLID_1487_" transform="translate(-61.857 0)">
                      <g id="XMLID_1153_" transform="translate(61.857 -0.001)">
                        <path id="XMLID_1329_" d="M106.94,35.1,97.49,20.285a4.2,4.2,0,0,0-.391-7.626L99.962,2.65a1.236,1.236,0,0,0-.314-1.214,4.89,4.89,0,0,0-6.908,0,2.4,2.4,0,0,1-1.705.706,2.4,2.4,0,0,1-1.708-.709l-.006-.006a4.894,4.894,0,0,0-6.9-.011l-.035.035a2.416,2.416,0,0,1-3.4-.006l-.009-.009a4.89,4.89,0,0,0-6.908,0,1.237,1.237,0,0,0-.314,1.215l2.869,10.006a4.2,4.2,0,0,0-.4,7.628L64.773,35.1A18.334,18.334,0,0,0,80.23,63.294H91.483A18.334,18.334,0,0,0,106.94,35.1ZM77.225,3.184l.009.009a4.894,4.894,0,0,0,6.9.011l.035-.035a2.417,2.417,0,0,1,3.408.009l.006.006a4.89,4.89,0,0,0,6.908,0,2.416,2.416,0,0,1,2.866-.409l-2.741,9.584h-17.5L74.36,2.774a2.416,2.416,0,0,1,2.866.409Zm28.167,49.4a15.654,15.654,0,0,1-13.908,8.236H80.23A15.862,15.862,0,0,1,66.858,36.43L76.85,20.766h3.443a1.236,1.236,0,1,0,0-2.473H76.172a1.731,1.731,0,0,1,0-3.462H95.541a1.731,1.731,0,1,1,0,3.462H91.42a1.236,1.236,0,0,0,0,2.473h3.443l9.993,15.664a15.655,15.655,0,0,1,.536,16.155Z" transform="translate(-61.857 0.001)" />
                        <path id="XMLID_1341_" d="M214.749,246.37c-.238-.084-.481-.172-.723-.262v-4.3a3.9,3.9,0,0,1,1.09.509.948.948,0,0,0,1.141-1.514,5.79,5.79,0,0,0-2.231-.944v-.943a.948.948,0,0,0-1.9,0v.937a4.9,4.9,0,0,0-.488.119,3.8,3.8,0,0,0-2.6,2.978,3.348,3.348,0,0,0,1.1,3.3,9.125,9.125,0,0,0,1.995,1.133v5.5a3.79,3.79,0,0,1-2.078-.762.948.948,0,0,0-1.038,1.587,5.6,5.6,0,0,0,3.116,1.072v.98a.948.948,0,0,0,1.9,0v-1.079a4.57,4.57,0,0,0,3.484-3.723A4.01,4.01,0,0,0,214.749,246.37Zm-3.444-1.61a1.477,1.477,0,0,1-.4-1.456,1.931,1.931,0,0,1,1.228-1.494v3.472A5.673,5.673,0,0,1,211.3,244.76Zm4.334,5.884a2.718,2.718,0,0,1-1.614,2.054v-4.573l.091.033A2.145,2.145,0,0,1,215.639,250.644Z" transform="translate(-189.077 -200.649)" />
                        <path id="XMLID_1343_" d="M246.933,149.865a.948.948,0,1,0-.67-.278A.955.955,0,0,0,246.933,149.865Z" transform="translate(-222.933 -129.502)" />
                      </g>
                    </g>
                  </svg>
                </div>
                <h3>Raise</h3> 
                {/* <p>Launch a campaign in minutes have a personalised campaign up and running.</p> */}
                {/* <p style={{ color: 'black' }} className={isFirstContentExpanded ? 'expand' : 'not-expand'}>Launch a campaign in minutes 
                  {isFirstContentExpanded && ' have a personalised campaign up and running. '}
                </p> */}
                <p style={{ color: 'black' }} className={isFirstContentExpanded ? 'expand' : 'not-expand'}>In just a few easy steps you can 
                  {isFirstContentExpanded && ' have a personalised campaign up and running. '}
                </p>
                <button
                  onClick={() => setIsFirstContentExpanded(!isFirstContentExpanded)}
                  type="button"
                  className="btn-cutom donate-read-more">
                  {isFirstContentExpanded ? 'read less' : 'read more'}
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card home-donate-card after">
                <div className="box ">
                  <span className="">2</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="66.806" height="60.295" viewBox="0 0 66.806 60.295">
                    <g id="heart_3_" data-name="heart (3)" transform="translate(0 -0.501)">
                      <path id="Path_1199" data-name="Path 1199" d="M41.3,262.6a1.3,1.3,0,1,0,1.3,1.3A1.305,1.305,0,0,0,41.3,262.6Zm0,0" transform="translate(-34.781 -227.898)" />
                      <path id="Path_1200" data-name="Path 1200" d="M59.972,232.341l-12.3,4.229a5.207,5.207,0,0,0-5.134-6.144h-8.45a1.306,1.306,0,0,1-.641-.168l-6.894-3.877a9.142,9.142,0,0,0-4.479-1.174h-9.25a3.92,3.92,0,0,0-3.69-2.609H1.3A1.3,1.3,0,0,0,0,223.9v23.486a1.3,1.3,0,0,0,1.3,1.3H9.134a3.922,3.922,0,0,0,3.653-2.511,11.912,11.912,0,0,1,4.26,1.265l6.824,4.094a16.634,16.634,0,0,0,15.442.881L63.666,241.7a5.03,5.03,0,0,0-3.694-9.357ZM10.439,244.785a1.306,1.306,0,0,1-1.3,1.3H2.61V225.207H9.134a1.306,1.306,0,0,1,1.3,1.3Zm52.236-5.5-.041.017L38.239,250.043a14.023,14.023,0,0,1-13.025-.74l-6.824-4.094a14.387,14.387,0,0,0-5.341-1.624V227.817h9.025a6.528,6.528,0,0,1,3.2.838l6.894,3.877a3.92,3.92,0,0,0,1.921.5h8.45a2.61,2.61,0,1,1,0,5.219H29.272a1.3,1.3,0,1,0,0,2.609H42.537a5.209,5.209,0,0,0,2.446-.611L60.848,234.8a2.422,2.422,0,1,1,1.827,4.486Zm0,0" transform="translate(0 -193.117)" />
                      <path id="Path_1201" data-name="Path 1201" d="M177.081,32.15a1.306,1.306,0,0,0,1.71,0c10.646-9.226,17.231-13.9,17.231-21.152,0-5.74-4.064-10.5-9.773-10.5-3.749,0-6.62,2.161-8.47,5.4-1.845-3.236-4.713-5.4-8.468-5.4A9.638,9.638,0,0,0,160,7.716a1.3,1.3,0,1,0,2.5.734,7.08,7.08,0,0,1,6.8-5.34c3.722,0,6.333,3.305,7.211,6.383a1.3,1.3,0,0,0,2.515,0c.018-.064,1.83-6.383,7.212-6.383,4.084,0,7.163,3.39,7.163,7.888,0,5.8-5.674,9.989-15.477,18.442-5.973-5.13-10.718-8.74-13.415-12.272a1.3,1.3,0,1,0-2.074,1.584c3.04,3.981,8.171,7.8,14.635,13.4Zm0,0" transform="translate(-139.079)" />
                      <path id="Path_1202" data-name="Path 1202" d="M160.3,88.6a1.3,1.3,0,1,0,1.3,1.3A1.305,1.305,0,0,0,160.3,88.6Zm0,0" transform="translate(-138.253 -76.602)" />
                    </g>
                  </svg>
                </div>
                <h3>Donate</h3> 
                {/* <p>Support your favourite cause directly or use your utility bills to support a cause.</p> */}
                {/* <p style={{ color: 'black' }} className={isSecondContentExpanded ? 'expand' : 'not-expand'}>Support your favourite cause
                  {isSecondContentExpanded && ' directly or use your utility bills to support a cause.'}
                </p> */}
                <p style={{ color: 'black' }} className={isSecondContentExpanded ? 'expand' : 'not-expand'}>You can choose to donate
                  {isSecondContentExpanded && ' directly or use your utility bills to support a cause.'}
                </p>
                <button onClick={() => setIsSecondContentExpanded(!isSecondContentExpanded)} type="button" className="btn-cutom donate-read-more">
                  {isSecondContentExpanded ? 'read less' : 'read more'}
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card home-donate-card ">
                <div className="box">
                  <span className="">3</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="51.629" height="64.067" viewBox="0 0 51.629 64.067">
                    <g id="id-card" transform="translate(-49.7)">
                      <path id="Path_1203" data-name="Path 1203" d="M96.244,6.219H80.6V2.941A2.944,2.944,0,0,0,77.658,0H73.37A2.944,2.944,0,0,0,70.43,2.941V6.219H61.687a.938.938,0,1,0,0,1.877H70.43v2.269H67.222a.938.938,0,0,0,0,1.877h3.338a2.946,2.946,0,0,0,2.81,2.073h4.288a2.946,2.946,0,0,0,2.81-2.073h3.338a.938.938,0,0,0,0-1.877H80.6V8.1H96.244A3.211,3.211,0,0,1,99.451,11.3V53.9H97.183V51.691a1.942,1.942,0,0,0-1.94-1.94H76.515a1.942,1.942,0,0,0-1.94,1.94V53.9h-23V11.3A3.211,3.211,0,0,1,54.784,8.1h3.107a.938.938,0,0,0,0-1.877H54.784A5.09,5.09,0,0,0,49.7,11.3V58.982a5.09,5.09,0,0,0,5.084,5.084H86.075a.938.938,0,0,0,0-1.877H54.784a3.211,3.211,0,0,1-3.207-3.207V55.775h23v2.207a1.942,1.942,0,0,0,1.94,1.94H95.243a1.942,1.942,0,0,0,1.94-1.94V55.775h2.269v3.208a3.211,3.211,0,0,1-3.207,3.207H89.829a.938.938,0,0,0,0,1.877h6.415a5.09,5.09,0,0,0,5.084-5.084V11.3a5.09,5.09,0,0,0-5.084-5.084ZM72.307,2.941A1.065,1.065,0,0,1,73.37,1.877h4.288a1.065,1.065,0,0,1,1.064,1.064V8.292H72.307Zm6.415,8.434a1.065,1.065,0,0,1-1.064,1.064H73.37a1.065,1.065,0,0,1-1.064-1.064V10.169h6.415ZM95.306,57.981a.063.063,0,0,1-.063.063H76.515a.063.063,0,0,1-.063-.063v-6.29a.063.063,0,0,1,.063-.063H95.243a.063.063,0,0,1,.063.063Z" />
                      <path id="Path_1204" data-name="Path 1204" d="M250.44,155.123h10.436a1.942,1.942,0,0,0,1.94-1.94V151.04a1.942,1.942,0,0,0-1.94-1.94H250.44a1.942,1.942,0,0,0-1.94,1.94v2.144A1.942,1.942,0,0,0,250.44,155.123Zm-.063-4.083a.063.063,0,0,1,.063-.063h10.436a.063.063,0,0,1,.063.063v2.144a.063.063,0,0,1-.063.063H250.44a.063.063,0,0,1-.063-.063Z" transform="translate(-173.924 -130.443)" />
                      <path id="Path_1205" data-name="Path 1205" d="M248.5,219.45a1.942,1.942,0,0,0,1.94,1.94h18.728a1.942,1.942,0,0,0,1.94-1.94v-2.144a1.942,1.942,0,0,0-1.94-1.94H250.44a1.942,1.942,0,0,0-1.94,1.94Zm1.877-2.144a.063.063,0,0,1,.063-.063h18.728a.063.063,0,0,1,.063.063v2.144a.063.063,0,0,1-.063.063H250.44a.063.063,0,0,1-.063-.063Z" transform="translate(-173.924 -188.418)" />
                      <path id="Path_1206" data-name="Path 1206" d="M248.5,285.716a1.942,1.942,0,0,0,1.94,1.94h6.29a1.942,1.942,0,0,0,1.94-1.94v-2.144a1.942,1.942,0,0,0-1.94-1.94h-6.29a1.942,1.942,0,0,0-1.94,1.94Zm1.877-2.144a.063.063,0,0,1,.063-.063h6.29a.063.063,0,0,1,.063.063v2.144a.063.063,0,0,1-.063.063h-6.29a.063.063,0,0,1-.063-.063Z" transform="translate(-173.924 -246.392)" />
                      <path id="Path_1207" data-name="Path 1207" d="M288.79,430.733h-6.219a.938.938,0,1,0,0,1.877h6.219a.938.938,0,0,0,0-1.877Z" transform="translate(-202.911 -376.835)" />
                      <path id="Path_1208" data-name="Path 1208" d="M367.478,430.733h-2.073a.938.938,0,1,0,0,1.877h2.073a.938.938,0,0,0,0-1.877Z" transform="translate(-275.38 -376.835)" />
                      <path id="Path_1209" data-name="Path 1209" d="M99.221,160.4V159.03a1.977,1.977,0,0,0,1.036-1.737v-3.109a5.09,5.09,0,0,0-5.084-5.085H88.954a5.09,5.09,0,0,0-5.084,5.085v3.109a1.977,1.977,0,0,0,1.036,1.737v1.27a7.3,7.3,0,0,0,2.485,5.482,5.611,5.611,0,0,0-4.558,5.5v3.628a3.015,3.015,0,0,0,3.012,3.011H98.282a3.015,3.015,0,0,0,3.012-3.011v-3.628a5.612,5.612,0,0,0-4.519-5.5c.1-.091.207-.185.307-.283A7.1,7.1,0,0,0,99.221,160.4Zm-13.474-6.219a3.211,3.211,0,0,1,3.207-3.208h6.219a3.211,3.211,0,0,1,3.207,3.208v3.109a.1.1,0,0,1-.1.1,3.215,3.215,0,0,1-3.143-2.565,1.98,1.98,0,0,0-1.934-1.581H90.922a1.98,1.98,0,0,0-1.934,1.581,3.216,3.216,0,0,1-3.143,2.565.1.1,0,0,1-.1-.1v-3.109Zm1.036,6.117V159.18a5.1,5.1,0,0,0,4.044-3.98.1.1,0,0,1,.095-.077H93.2a.1.1,0,0,1,.095.077,5.1,5.1,0,0,0,4.044,3.98V160.4a5.28,5.28,0,0,1-5.28,5.28h-.091A5.357,5.357,0,0,1,86.783,160.3Zm1.5,10.3a.086.086,0,0,1-.094.043.087.087,0,0,1-.08-.065L87.13,167.8a3.707,3.707,0,0,1,1.306-.237H90.31Zm3.778-2.283,1.491,2.236-1.432,1.074a.1.1,0,0,1-.118,0l-1.432-1.074Zm1.753-.753h1.874A3.707,3.707,0,0,1,97,167.8l-.982,2.778a.1.1,0,0,1-.174.022Zm5.6,7.354a1.136,1.136,0,0,1-1.135,1.134H85.845a1.136,1.136,0,0,1-1.135-1.134v-3.628a3.707,3.707,0,0,1,.834-2.345l.8,2.26a1.964,1.964,0,0,0,1.617,1.3,2.018,2.018,0,0,0,.249.016,1.958,1.958,0,0,0,1.255-.453l1.415,1.061a1.985,1.985,0,0,0,2.37,0l1.415-1.061a1.958,1.958,0,0,0,1.255.453,2.02,2.02,0,0,0,.249-.016,1.964,1.964,0,0,0,1.617-1.3l.8-2.26a3.708,3.708,0,0,1,.834,2.345v3.628Z" transform="translate(-28.987 -130.442)" />
                      <path id="Path_1210" data-name="Path 1210" d="M133.471,230.187a.938.938,0,0,0,.938-.938v-.518a.938.938,0,0,0-1.877,0v.518A.938.938,0,0,0,133.471,230.187Z" transform="translate(-72.468 -199.288)" />
                      <path id="Path_1211" data-name="Path 1211" d="M166.605,230.187a.938.938,0,0,0,.938-.938v-.518a.938.938,0,0,0-1.877,0v.518A.938.938,0,0,0,166.605,230.187Z" transform="translate(-101.456 -199.288)" />
                    </g>
                  </svg>
                </div>
                <h3>Switch </h3>
                {/* <p>Use your utility bill to donate money on plans through a better plan or provider.</p> */}
                {/* <p style={{ color: 'black' }} className={isThirdContentExpanded ? 'expand' : 'not-expand'}>Use your utility bill to donate money on plans through a better plan or provider.
                  {isThirdContentExpanded && ' '}
                </p> */}
                {/* <h3>Start</h3> */}
                <p style={{ color: 'black' }} className={isThirdContentExpanded ? 'expand' : 'not-expand'}>Switch through icause and save 
                  {isThirdContentExpanded && ' money on plans through a better plan or provider.'}
                </p>
                <button type="button" onClick={() => setIsThirdContentExpanded(!isThirdContentExpanded)} className="btn-cutom donate-read-more">
                  {isThirdContentExpanded ? 'read less' : 'read more'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}

export default HowToDonateWithReadMore;