import React, { useState, useRef } from 'react';
import { useGoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { Menu, Button, Dropdown } from 'antd';

import * as actions from '../../actions/user';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { imageURL } from '../../constants/constants';

const clientId =
  '211459604873-h9f19nhomvsum9ios12bj3saei98vdfr.apps.googleusercontent.com';

function closeNav() {
  Array.from(document.querySelectorAll('.mbl-drop-down.show')).forEach(function (el) {
    el.classList.remove('show');
  });

}

const fundRaiserMenu = (history, userCheckAuth) => (
  <Menu>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/school') }} type='link'>
      <Button type='link'>
        School
      </Button>
    </Menu.Item>

    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/sports') }} type='link'>
      <Button type='link'>
        Sport Club
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/charity') }} >
      <Button type='link' >
        Charities
      </Button>
    </Menu.Item>
    <Menu.Item onClick={() => { userCheckAuth(); history.push('/community') }} style={{ padding: 0 }}>
      <Button type='link' >
        Communities
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/event-manager') }}>
      <Button type='link'>
        Events
      </Button>
    </Menu.Item>
  </Menu>
);

const howItWorksMenu = (history, userCheckAuth) => (
  <Menu>

    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/why-icause') }} >
      <Button type='link' >
        Why Icause
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/guarantee') }}>
      <Button type='link' >
        Icause Guarantee
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }} onClick={() => history.push('/auth/login')} >
      <Button type='link' >
        Sign in/ Signup
      </Button>
    </Menu.Item>
    {/* <Menu.Item style={{ padding: 0 }} onClick={() => history.push('/become-a-partner')} >
      <Button type='link' >
        Become a Partner
      </Button>
    </Menu.Item> */}
  </Menu>
);

const donateForMenu = (history, userCheckAuth) => (
  <Menu>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/health/startFundraising') }}>
      <Button type='link' >
        Health & Medical
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/animals/startFundraising') }}>
      <Button type='link' >
        Animal & Pets
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/accident/startFundraising') }}>
      <Button type='link' >
        Accident
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/bucketlist/startFundraising') }}>
      <Button type='link'  >
        Bucket List
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/inmemory/startFundraising') }}>
      <Button type='link' >
        In Memory
      </Button>
    </Menu.Item>
    <Menu.Item onClick={() => { userCheckAuth(); history.push('/environment/startFundraising') }} style={{ padding: 0 }}>
      <Button type='link' >
        Environment
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }} onClick={() => { userCheckAuth(); history.push('/travel/startFundraising') }}>
      <Button type='link' >
        Travel & Tourism
      </Button>
    </Menu.Item>
    <Menu.Item onClick={() => { userCheckAuth(); history.push('/faith/startFundraising') }} style={{ padding: 0 }}>
      <Button type='link' >
        Faith
      </Button>
    </Menu.Item>
  </Menu >
);

const WelcomeDropdwn = (history, logout, signOut) => (
  <Menu>

    <Menu.Item style={{ padding: 0 }}>
      <Button href={`${process.env.REACT_APP_BACKEND_BASE_URL}cabinet`} type='link'>
        Profile
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }}>
      <Button href={`${process.env.REACT_APP_BACKEND_BASE_URL}`} type='link'>
        Go to Dashboard
      </Button>
    </Menu.Item>
    <Menu.Item style={{ padding: 0 }}>
      <Button type='link' onClick={() => {
        signOut()
        logout();
      }}>
        Logout
      </Button>
    </Menu.Item>

  </Menu>
);

const Header = (props) => {
  const { user, logout, checkUserLoginStatusOnDashboard, isMobile } = props;
  const [searchKeyword, setSearchKeyword] = useState('');
  const [userToken, setUserToken] = useState(null);
  const [inputClassName, setInputClassName] = useState(null);
  const [checkUser, setCheckUser] = useState(true);
  const [sidebar, setSideBar] = useState(false);
  const inputRef = useRef(null);
  const history = useHistory();
  const onGoogleLogoutSuccess = (res) => {

  };

  const onGooleLogoutFailure = () => {
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onGoogleLogoutSuccess,
    onGooleLogoutFailure
  });

  const getEnterKeyOnInput = (event) => {
    if (searchKeyword === '') return;
    if ((event === "searchIcon" || event.key === 'Enter') && searchKeyword) {
      setSearchKeyword('')
      redirectToPage(`/searched-campaigns/${searchKeyword}`);
    }
  }
  let userImage = null;
  if (user && user.id) {
    if (user.avatar) {
      userImage = user.avatar
    } else {
      userImage = `${imageURL}avatar.png`;
    }
  }

  const redirectToPage = (url) => {
    history.push(url)
  }
  // const userToken = localStorage.getItem("loginToken")

  useEffect(() => {
    if (user && user.id && userToken && checkUser
      && history.location.pathname !== "/auth/login"
      && history.location.pathname !== "/auth/verification"
    ) {
      setCheckUser(false);
    }
    else{
      if(localStorage.getItem("loginToken") && !user.loginToken){
        setUserToken(localStorage.getItem("loginToken"))
      }
      else{
        if(user.loginToken){
          setUserToken(user.loginToken)
          return
        }
        setUserToken(null)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkUser, user, userToken])

  const checkUserLoginStatus = (user) => {
    checkUserLoginStatusOnDashboard(user).then((status) => {
      let login_status = status?.user?.login_status;
      if (login_status) {

      } else {
        logout();
        signOut();
      }
    })
  }

  const userCheckAuth = () => {
    setCheckUser(true)
  }

  return (
    <div id="scrollTo">
      <header id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <div className="d-flex align-items-center mb-2 mb-sm-0">
              <Button onClick={() => history.push('/')} className="navbar-brand" type='link'>
                <img src={`${imageURL}logo.png`} className="img-fluid" alt="" />
              </Button>
              {!isMobile && <div id="expanding-search">
                <span
                  onClick={(e) => {
                    getEnterKeyOnInput('searchIcon');
                    setInputClassName('inputexpended');
                    inputRef.current.focus();
                  }}
                  className="search-icon-expand search--icon">
                  {/* <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/search 12x.png" className="img-fluid" alt="" /> */}
                  <svg id="search_1_" data-name="search (1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g id="Group_6443" data-name="Group 6443" transform="translate(0)">
                      <path id="Path_36602" data-name="Path 36602" d="M.122,18.7l5.81-5.81A7.932,7.932,0,1,1,7.11,14.068L1.3,19.878a.417.417,0,0,1-.589,0l-.589-.589A.417.417,0,0,1,.122,18.7Zm11.961-4.533a6.25,6.25,0,1,0-6.25-6.25A6.257,6.257,0,0,0,12.083,14.167Z" transform="translate(0 0)" />
                    </g>
                  </svg>
                </span>

                <input
                  ref={inputRef}
                  className={inputClassName}
                  value={searchKeyword}
                  type="search"
                  placeholder="search"
                  onKeyDown={(e) => { getEnterKeyOnInput(e) }}
                  onChange={(event) => {
                    setSearchKeyword(event.target.value)
                  }}
                  onBlur={() => { setInputClassName(''); }}
                />

              </div>}
            </div>
            <button className="navbar-toggler" onClick={closeNav} type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto ">

                <li className="nav-item ">
                  <Dropdown overlay={() => fundRaiserMenu(history, userCheckAuth)}>
                    <a href='dsa' style={{ fontSize: 15, marginRight: 50, color: 'black' }} className="ant-dropdown-link" onClick={e => { setCheckUser(true); e.preventDefault() }}>
                      Fundraise
                    </a>
                  </Dropdown>
                </li>

                <li className="nav-item">
                  <Dropdown overlay={() => howItWorksMenu(history, userCheckAuth)}>
                    <a href='dsa' style={{ fontSize: 15, marginRight: 50, color: 'black' }} className="ant-dropdown-link" onClick={e => { setCheckUser(true); e.preventDefault() }}>
                      How It Works ?
                    </a>
                  </Dropdown>
                </li>

                <li className="nav-item">
                  <Dropdown overlay={() => donateForMenu(history, userCheckAuth)}>
                    <a href='dsa' style={{ fontSize: 15, marginRight: 30, color: 'black' }} className="ant-dropdown-link" onClick={e => { setCheckUser(true); e.preventDefault() }}>
                      Donate For
                    </a>
                  </Dropdown>
                </li>
                <span className="nav-pipe">|</span>
                <li className="nav-item blog-nav">
                  <Button style={{ paddingTop: '0px' }} onClick={() => { setCheckUser(true); history.push('/blogs') }} className="nav-link" type='link'>
                    Blog
                  </Button>
                </li>
                {(user && user.id && user.loginToken && history.location.pathname !== "/auth/login") &&
                  userToken &&
                  <li className="nav-item pro-dd-li">
                    <Dropdown overlay={() => WelcomeDropdwn(history, logout, signOut)}>
                      <a href='dsa' style={{ fontSize: 15, marginRight: 30, color: 'black' }} className="ml-2 ant-dropdown-link profile-seting" onClick={e => { setCheckUser(true); e.preventDefault() }}>
                        {`Hi ${user.first_name}`}
                      </a>
                    </Dropdown>
                  </li>
                }
              </ul>
              <button className="btn btn-success ml-2 my-sm-0 text-uppercase custom-height custom-btn header-signup " onClick={() => history.push(
                "/auth/signup"
              )}>Start Fundraising  </button>
              &nbsp;&nbsp;&nbsp;
              {(!userToken || history.location.pathname === "/auth/login") &&
              <div className='hover-opction'>
                <button
                  onClick={() => {
                    history.push('/auth/login')
                  }}
                   style={{padding:'0px 50px'}} className="header-login btn btn-success my-2  my-sm-0 text-uppercase custom-height custom-btn-style "
                >
                  Join Us
                </button>
                <div className='hover-view'>
                <ul>
                  <li><a onClick={() => { history.push('/auth/login')}}>Login</a></li>
                  <li><a onClick={() => history.push('/auth/signup')}>Sign Up</a></li>
                </ul>
                </div>
                </div>
              }
               
            </div>

            {/*  #region Mobile Menu  */}
            <div style={{ paddingTop: '8px' }} className={user && user.id ? 'collapse navbar-collapse mobile-menu loggedIn ' : 'collapse navbar-collapse mobile-menu loggedOut'} id="navbarSupportedContent2">
              <ul className="navbar-nav ml-auto ">
                {user && user.id &&
                  <li className="nav-item">
                    <img className="w-100" src={userImage} alt="userImage" />
                  </li>
                }
                <li className='mob-logo nav-item'> <span><img src="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png"></img></span></li>
                <li className="nav-item ">

                  {/* <span className="floating-text">cancel</span> */}
                  <span className="mbl-menu-close" aria-hidden="true" data-toggle="collapse" data-target="#navbarSupportedContent2">&times;</span>
                  <a data-toggle="collapse" data-target="#funddrop" href='dsa' style={{ fontSize: 15, marginRight: 50, color: 'black' }} className="ant-dropdown-link" onClick={e => { userCheckAuth(); e.preventDefault() }}>
                    Fundraise
                  </a>
                  <ul className="mbl-drop-down collapse" id="funddrop">
                    <Menu>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/school') }}>
                          School
                        </Button>
                      </Menu.Item>

                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/sports') }}>
                          Sport Club
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/charity') }}>
                          Charities
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/community') }}>
                          Communities
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" onClick={() => { userCheckAuth(); history.push('/event-manager') }} type='link'>
                          Events
                        </Button>
                      </Menu.Item>
                    </Menu>
                  </ul>
                </li>

                <li className="nav-item">
                  <a data-toggle="collapse" data-target="#howwork" href='dsa' style={{ fontSize: 15, marginRight: 50, color: 'black' }} className="ant-dropdown-link" onClick={e => { userCheckAuth(); e.preventDefault() }}>
                    How It Works?
                  </a>
                  <ul className="mbl-drop-down collapse" id="howwork">
                    <Menu>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/why-icause') }}>
                          Why Icause
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/guarantee') }}>
                          Icause Guarantee
                        </Button>
                      </Menu.Item>
                        <Menu.Item style={{ padding: 0 }}>
                        <Button  data-target="#navbarSupportedContent2" type='link' onClick={() => {  userCheckAuth(); history.push('/auth/login') }}>
                          Sign in/ Signup
                        </Button>
                      </Menu.Item>
                      {/* <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/auth/login') }}>
                          Sign in/ Signup
                        </Button>
                      </Menu.Item> */}
                      <Menu.Item style={{ padding: 0 }}  data-target="#navbarSupportedContent2" type='link' onClick={() => history.push('/become-a-partner')} >
                        <Button type='link' >
                          Become a Partner
                        </Button>
                      </Menu.Item>
                    </Menu>
                  </ul>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" data-target="#donatfor" href='dsa' style={{ fontSize: 15, marginRight: 30, color: 'black' }} className="ant-dropdown-link" onClick={e => { userCheckAuth(); e.preventDefault() }}>
                    Donate For
                  </a>
                  <ul className="mbl-drop-down collapse" id="donatfor">
                    <Menu>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/health/startFundraising') }}>
                          Health & Medical
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/animals/startFundraising') }}>
                          Pets & Animals
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/accident/startFundraising') }}>
                          Accident
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/bucketlist/startFundraising') }}>
                          Bucket List
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/inmemory/startFundraising') }}>
                          In Memory
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/environment/startFundraising') }}>
                          Environment
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/travel/startFundraising') }}>
                          Travel
                        </Button>
                      </Menu.Item>
                      <Menu.Item style={{ padding: 0 }}>
                        <Button data-toggle="collapse" data-target="#navbarSupportedContent2" type='link' onClick={() => { userCheckAuth(); history.push('/faith/startFundraising') }}>
                          Faith
                        </Button>
                      </Menu.Item>
                    </Menu >
                  </ul>
                </li>
                <li className=" border-0 nav-item">
                  <Button data-toggle="collapse" data-target="#navbarSupportedContent2" style={{ paddingTop: '0px' }} onClick={() => { userCheckAuth(); history.push('/blogs') }} className="nav-link" type='link'>
                    Blog
                  </Button>
                </li>
                <li className="nav-item mobie-serach">
                  <div className='row align-items-center'>
                    <div className='col-10'>
                      <div className="form-group m-0">
                        <input
                          ref={inputRef}
                          className={"form-control"}
                          value={searchKeyword}
                          type="search"
                          placeholder="Search"
                          // onKeyDown={(e) => { getEnterKeyOnInput(e) }}
                          onChange={(event) => {
                            setSearchKeyword(event.target.value)
                          }}
                          onBlur={() => { setInputClassName(''); }}
                        />
                      </div>
                    </div>
                    <div aria-hidden="true" data-toggle="collapse" data-target="#navbarSupportedContent2" onClick={async () => {
                      await setSearchKeyword('')
                      redirectToPage(`/searched-campaigns/${searchKeyword}`)
                    }} className='col-2 px-0'>
                      <button className='btn bg-transparent'><i className='fa fa-search'></i></button>
                    </div>

                  </div>

                </li>
                <li className="nav-item">
                  {user && user.id &&
                    <a className="dashboard" href={`${process.env.REACT_APP_BACKEND_BASE_URL}`}>Go to Dashboard</a>
                  }
                </li>
                <div className="mob-admin">
                  <li className={`li ${user && user.id ? "logout-btn" : ""}`}>
                    <a href="#!" className="btn  btn-outline-success" onClick={() => {
                      if (user && user.id && userToken) {
                        signOut()
                        logout();
                      } else {
                        history.push('/auth/login')
                      }
                    }}>
                      {/* {user && user.id ? <i className="pr-3 fas fa-sign-out-alt"></i> : <i className="pr-3 fas fa-sign-in-alt"></i>} */}
                      {user && user.id ? 'Logout' : 'Login'}
                    </a>
                  </li>
                  {!userToken &&
                    <li className="li">
                      <a href="#!" className="btn  btn-success" onClick={() => {
                        if (user && user.id) {
                          signOut()
                          logout();
                        } else {
                          history.push('/auth/signup')
                        }
                      }}>Sign up </a>
                    </li>
                  }
                </div>
              </ul>
            </div>
            {/* #endregion */}
          </div>
          <button onClick={() => history.push(
            // '/starting_fund'
            "/auth/signup"
          )} type="button" className="btn btn-success  mbl-nav-btn">Start fundraising</button>
        </nav>

      </header>
      <div className="header-space"></div>
    </div>
  );
};

export default connect(({ user, donateMoney }) => ({ user, donateMoney }), actions)(Header);