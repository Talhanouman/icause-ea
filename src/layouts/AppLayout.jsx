import React,{useState, useEffect} from 'react';
import { Layout } from 'antd';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { COUNTRY,COUNTRY2 } from '../constants/constants';


const AppLayout = (props) => {
  const { children, history } = props;
  const [width, setWidth] = useState(window.innerWidth);
  // const geocoder = new google.maps.Geocoder();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    // if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(function (position) {
    //         geocoder.geocode({ location: { lat: position.coords.latitude, lng: position.coords.longitude } }, (googleAddress) => {
    //           var filtered_array = googleAddress[0].address_components.filter(function (address_component) {
    //             return address_component.types.includes("country");
    //           });
    //           var country = filtered_array.length ? filtered_array[0].long_name : "";
    //           // if ((country != COUNTRY)&&(country != COUNTRY2) ){
    //           //   localStorage.removeItem("loginToken");
    //           //   history.push("/auth/login")
    //           // // }
    //         })
    //       })
    //   }

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;
  return (
    <Layout>
      <Header isMobile={isMobile} history={history} />
        {children}
      <Footer history={history}/>
    </Layout>
  );
}

export default AppLayout;
