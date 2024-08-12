import React from 'react';
import { Layout } from 'antd';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const UserLayout = (props) => {
  const { children, history } = props;
  return (
    <Layout>
      <Header history={history} />
        {children}
      <Footer history={history}/>
    </Layout>
  );
}

export default UserLayout;
