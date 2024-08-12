

import React,{useState} from 'react';
import { Modal } from 'antd';
import { Link ,useParams} from "react-router-dom"

const ShareCampaignModal = (props) => {
  const [embeded,setEmbeded]=useState(false)
  const [QR,setQR]=useState(false)
  const compaign = document.getElementById("compaign");

  const {
    detail=true,
    isShareModalVisible,
    setShareModalVisibility,
    getCampaignDetails,
    shareCampaign,
    id,name,
    campaignDetails: detailed
  } = props;
  const { campaign } = detailed || {};
  const { campaign_info } = campaign || {};
  const { campaignDetails: campaignDetail } = campaign_info || {};
  const { id: campaignId, users_id,qr_url,story,title,photo1 } = campaignDetail || {};


  return (
      <Modal
        className='sahre-modal'
        title='Share Campaign'
        footer={null}
        maskClosable={false}
        visible={isShareModalVisible}
        onOk={() => setShareModalVisibility(false)}
        onCancel={() => setShareModalVisibility(false)}>
        <div className="modal-body text-center campaign-sahre">
          <h6>Do you like this? Share with your friends! </h6>
          <div className="mt-5">
            <div>
              <ul className="share_links">
                <li
                  onClick={() => {
                    // https://www.facebook.com/sharer/sharer.php?u=https://www.fivevitals.com//events/132/j
                    const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href + '/j';
                    window.open(pageUrl, '_blank');
                    shareCampaign(campaignId, users_id || navigator.userAgent, 'facebook').then(() => {
                      getCampaignDetails(campaignId);
                    })
                  }
                  }
                  className="bg_fb">
                  <a href="#!" className="share_icon" style={{ color: "blue" }} rel="tooltip" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <p>Facebook</p>
                </li>
                <li
                  onClick={() => {
                    // https://www.linkedin.com/sharing/share-offsite/?url=https://icause-ff466.web.app/
                    const pageUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}/campaign-details/${campaignId||id}`;
                    window.open(pageUrl, '_blank');
                    shareCampaign(campaignId, users_id || navigator.userAgent, 'twitter').then(() => {
                      getCampaignDetails(campaignId);
                    });
                  }}
                  className="bg_linkedin">
                  <a  className="share_icon" style={{ color: "gray" }} rel="tooltip" title="LinkedIn">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <p>Linkedin</p>
                </li>
                <li
                  // onClick={() => {
                  //   // https://www.linkedin.com/sharing/share-offsite/?url=https://icause-ff466.web.app/
                  //   const pageUrl = `mailto:?subject=${title||name}&body=${window.location.origin}/campaign-details/${campaignId||id}` ;
                  //   window.open(pageUrl, '_blank');
                  //   shareCampaign(campaignId, users_id || navigator.userAgent, 'twitter').then(() => {
                  //     getCampaignDetails(campaignId);
                  //   });
                  // }}
                  className="bg_linkedin">
                  <a href={`mailto:?subject=${title||name}&body=${window.location.origin}/campaign-details/${campaignId||id}`} className="share_icon text-dark" rel="tooltip" title="LinkedIn">
                    <i className="fa fa-envelope"></i>

                  </a>
                  <p>Email</p>
                </li>
                <li
                  onClick={() => {
                    //http://www.twitter.com/share?url=http://www.google.com/
                    // const pageUrl = `http://www.twitter.com/share?url=${window.location.origin}/campaign-details/${campaignId||id}`;
                    const pageUrl = `http://www.twitter.com/share?url=https://www.gofundme.com/c/heroes/alex-hanesakda `;
                    window.open(pageUrl, '_blank');
                    shareCampaign(campaignId, users_id || navigator.userAgent, 'twitter').then(() => {
                      getCampaignDetails(campaignId);
                    });
                  }}
                  className="bg_twitter">
                  <a  className="share_icon" style={{ color: "#266ef1" }} rel="tooltip" title="Twitter">
                    <i className=" fa fa-twitter"></i>
                  </a>
                  <p>Twitter</p>
                </li>
                <li
                 
                  className="bg_linkedin">
                  <a href={`https://web.whatsapp.com/send?text=${window.location.origin}/campaign-details/${campaignId||id}`} target="_blank" className="share_icon text-success" rel="tooltip" title="LinkedIn">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                  <p>whatsapp</p>
                </li>
                {detail&&
                <li
                  onClick={() => {
                    setEmbeded(true)
                  }}
                  className="bg_linkedin">
                  <a className="share_icon text-danger" rel="tooltip" title="Code">
                    <i className="fa fa-code"></i>
                  </a>
                  <p>Embed Code</p>
                </li>
                }
                 {detail&&
                <li
                
                  className="bg_linkedin">
                    {/* <Link to="/print"> */}
                  <a href={`/print/${campaignId}`} target="_blank"  className="share_icon text-warning" rel="tooltip" title="LinkedIn">
                    <i className="fa fa-print"></i>
                  </a>
                  <p> Print</p>
                </li>}
                {detail&&
                <li className="" onClick={()=>setQR(true)}>
                  <a  className="share_icon text-dark" rel="tooltip" title="LinkedIn">
                    <i className="fa fa-qrcode"></i>
                  </a>
                  <p> QR Code</p>
                </li>}
              </ul>
              <hr></hr>
              {embeded&&
              <div className='embed-code'>
                <div className="close-embed">
                  <div className='font-weight-bold text-left'>Copy Embed Code</div>
                  <div className="cursor-pointer font-weight-bold" onClick={()=>setEmbeded(false)}>X</div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" value={compaign&&compaign.innerHTML} id="exampleFormControlTextarea1" rows="3"></textarea>
                 <button onClick={()=>navigator.clipboard.writeText(compaign&&compaign.innerHTML)} style={{
                  width: "150px", height: "43px",marginTop:'10px', background: "#3cb64f", border: "unset", color: "#fff"
                }} > Copy HTML Code</button>
                </div>
              </div>}
              <div>
                <input style={{ height: "40px", border: "unset",outline:'none' }} type="text" className="url-input w-75 border rounded" value={`${window.location.origin}/campaign-details/${campaignId||id}`} readOnly/>&nbsp;&nbsp;
                <button onClick={()=>navigator.clipboard.writeText(`${window.location.origin}/campaign-details/${campaignId||id}`)} style={{
                  width: "100px", height: "43px", background: "#3cb64f", border: "unset", color: "#fff"
                }} > Copy</button>
              </div>
           { QR&&  <div className='qrcode-card'>
             <div className="close-embed mt-4">
                  <div className='font-weight-bold text-left'>QR Code</div>
                  <div className="cursor-pointer font-weight-bold" onClick={()=>setQR(false)}>X</div>
                </div>
                <div className='card'>
                  <img src={photo1}></img>
                  <h6>{title}</h6>
                  <p className="ml-13" dangerouslySetInnerHTML={{ __html: story || 'N/A' }}></p>
                  <h6 className='font-weight-bold text-center'>Scan QR Code</h6>
                  <img  className='qr-img' src={qr_url}></img>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </Modal>
  );
};

export default ShareCampaignModal;
