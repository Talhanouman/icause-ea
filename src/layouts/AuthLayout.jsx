import React,{useEffect,useState} from 'react';
import { Layout } from 'antd';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { COUNTRY,COUNTRY2 } from '../constants/constants';

const AuthLayout = (props) => {
  const { children, history } = props;
  const [currentCountry, setCurrentCountry] = useState("")
  // const geocoder = new google.maps.Geocoder();

  useEffect(()=>{
    if (true) {
      // if (navigator.geolocation) {
      //     navigator.geolocation.getCurrentPosition(function (position) {
      //       geocoder.geocode({ location: { lat: position.coords.latitude, lng: position.coords.longitude } }, (googleAddress) => {
      //         var filtered_array = googleAddress[0].address_components.filter(function (address_component) {
      //           return address_component.types.includes("country");
      //         });
      //         var country = filtered_array.length ? filtered_array[0].long_name : "";
      //         setCurrentCountry(country)
      //         // if (country !== "Australia") {
      //         //   localStorage.removeItem("loginToken");
      //         //   // history.push("/auth/login")
      //         // }
      //       })
      //     })
      // }
    }
    
  },[])

  console.log("current Country",currentCountry)

  return (
    <Layout>
      {/* {(currentCountry==COUNTRY||currentCountry==COUNTRY2)? */}
      <>
      <Header history={history}/>
      {children}
      <Footer history={history}/>
      </>
      {/* :<div>{children}</div>} */}
    </Layout>
  );
}

export default AuthLayout;
