import React,{useState} from 'react'
import moment from 'moment';
import ShareCampaignModal from '../shared/ShareCampaignModal';
import DonateBtn from '../DonateBtn';
import { useHistory } from 'react-router';
import ReactTooltip from 'react-tooltip';


function CampaignCard({id,daysGone,formattedStory,formattedTitle,formattedAddress,end_date,amount,progress,cover}) {
  const [isShareModalVisible, setShareModalVisibility] = useState(false);
  const history = useHistory();
  return (<>
        <div key={id} className="card trending-cause-card trending-cause-card-2">
            <div className="img">
                            {cover &&
                              <img src={cover} className="img-fluid" alt="" />
                            }
                            <div></div>
                            <div className="abs-center donate-container">
                           <DonateBtn onClick={()=>history.push(`/donate-money/${id}`)}/>
                           </div>
                            {/* <a href={`/donate-money/${id}`} style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a> */}
                          </div>
                          <div className="desc">
                            {/* <div className="text-card"> <span>{formattedAddress}</span> <span>{daysGone}</span> </div> */}
                            
                          <div className='share-icon'>
                      <a style={{ color: 'black' }} href={`/campaign-details/${id}`}>
                        <h1 data-tip="Click to read the story">{formattedTitle}</h1>
                         <ReactTooltip />
                        {/* <p data-tip="Click to read the story" style={{ color: 'black' }} >{formattedStory}</p> */}
                        {/* <ReactTooltip /> */}
                      </a>
                        {/* <button className='btn btn-share' onClick={()=>setShareModalVisibility(true)}><i className='fa fa-share'></i></button> */}
                        </div>
                        <div className='days-left'> <span><i className='fa fa-clock-o'></i> {daysGone}</span> </div>
                              <div className=" m-0 last-donaction"> <span><i class="fa fa-usd mr-2" aria-hidden="true"></i>Last donation</span> <span>{end_date ? moment(end_date).fromNow() : ''}</span> </div>
                              <div className="progres">
                              
                                <div className="progress-inner">
                                  <div className="progress-bar" role="progressbar" style={{ width: (typeof(progress) === 'string' && progress.includes('%'))  ? `${progress}` : `${progress || 0}%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="treanding-cause-bottom align-items-center">
                                  <h4 className="left-text-s mb-0"><span style={{ color: 'black' }}>Raised</span>${amount}</h4>
                                  <div className='share-icon'><button className='btn btn-share' onClick={()=>setShareModalVisibility(true)}><i className='fa fa-share'></i></button></div>
                                  {/* <h4 className="left-right-s">{(typeof(progress) === 'string' && progress.includes('%')) ? `${progress}` : `${progress || 0}%` }</h4> */}
                              </div>
                                
                              </div>
                        
                          </div>
        </div>
	     <ShareCampaignModal
					detail={false}
          name={formattedTitle}
          id={id}
					isShareModalVisible={isShareModalVisible}
					setShareModalVisibility={setShareModalVisibility}
				/>
</>  )
}

export default CampaignCard;