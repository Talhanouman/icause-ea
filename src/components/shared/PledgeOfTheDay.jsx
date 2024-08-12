

import React from 'react';
import { Spin } from 'antd';
import { useHistory } from 'react-router';
import { imageURL } from '../../constants/constants';
import DonateBtn from '../DonateBtn';

const PledgeOfTheDay = (props) => {
  const { data, loading, type } = props;
  const history = useHistory();
  
  let pledge = {};
  if (type === 'other') {
    pledge = data;
  } else {
    if (data && data.length) {
      pledge = data[0];
    }
  }
  const { title, story, id, funded, progress, photo1, photo2, photo3 } = pledge || {};
  var cover = photo2 ? `${photo2}` : `${imageURL}pledge-of-the-day.png`;
  if(photo1){
    cover = photo1;
  }
  else if(photo2){
    cover = photo1;
  }
  else if(photo3){
    cover = photo3;
  }
  else{
    cover = `${imageURL}pledge-of-the-day.png`
  }
  
  return (
    <div>
      <Spin spinning={loading}>
        {
          id ?
            <section className="pledge-of-the-day home-sec-2">
              <div className="container-lg container">
                <div className="row mx-0">
                  <div className="col-lg-4 col-md-4 col-sm-5 col-5 text-center  mb-md-0 px-md-3 px-0 z-index" >
                    <div className="img">
                      <img className="w-100" src={cover} alt="" />
                    </div>
                  </div>
                  {/* <div className="col-xl-1"></div> */}
                  <div className="col-lg-7  col-md-7 col-sm-7 col-7 pledge-text-col z-index">
                    <h5>THE PLEDGE OF THE MONTH</h5>
                    <h3 className="smbold">{title || 'N/A'}</h3>
                    <p className="">{story || 'N/A'}</p>
                    <div className="progres w-50">
                      <div className="progress-inner">
                        <div className="progress-bar" role="progressbar" style={{ width: (typeof(progress) === 'string' && progress.includes('%'))  ? `${progress}` : `${progress || 0}%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h4 className="left-text">${funded || 0}<span className="">raised</span></h4>
                      <h4 className="left-right">{(typeof(progress) === 'string' && progress.includes('%'))  ? `${progress}` : `${progress || 0}%` }</h4>
                    </div>
                    <DonateBtn onClick={() => history.push(`/donate-money/${id}`)}/>
                  </div>
                </div>
              </div>
            </section> : ''
        }
      </Spin>
    </div>
  );
};

export default PledgeOfTheDay;
