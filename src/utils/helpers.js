import { notification } from 'antd';
import { useEffect } from "react";
import {  withRouter } from "react-router-dom";

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export const initializeFacebookSDK = () => {
  window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_DEVELOPERS_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v8.0'
      });
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};

export const getCurrentUserLocation = () => {
  return new Promise((resolve, reject) => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(({ coords }) => {
    //     const { latitude, longitude } = coords;
    //     resolve({
    //       lat: latitude,
    //       lng: longitude
    //     });
    //   });
    // } else {
    //   notification.error({
    //     message: 'GET CURRENT LOCATION',
    //     description: 'getCurrentLocation feature is not supported by current Browser !'
    //   });
    //   reject('getCurrentLocation feature is not supported by current Browser !');
    // }
  });
};

export const getQueryParamFromURL = (function(a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i)
  {
      var p=a[i].split('=', 2);
      if (p.length == 1)
          b[p[0]] = "";
      else
          b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'));

function ScrollToTopMove({ history }) {
  useEffect(() => {
      const unlisten = history.listen(() => {
        document.querySelector('body').scrollTo(0,0)
      });
      return () => {
          unlisten();
      };
  }, [history]);

  return null;
}

export default withRouter(ScrollToTopMove);


export const refreshTokenSetup = (res) => {
  // Timing to renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    // saveUserToken(newAuthRes.access_token);  <-- save new token
    localStorage.setItem('authToken', newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};

export const redirectToPage = (history, url) => {
  window.location.href = url
}

export const encodeString = (value, value2) => {
  let firstEncodeValue = btoa(value+'_7ef;TjZLjBd3KTZq_=$'+value2);
  let secondEncodeValue = btoa(firstEncodeValue);
  return secondEncodeValue;
}

export const decodeString = (value) =>{
  if (!value) {
    return "";
  }

    const decodedString = atob(value);
    return decodedString;
  }