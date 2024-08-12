// import React from 'react';
// import { connect } from 'react-redux';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import { Spin } from 'antd';
// import { isEmpty } from 'lodash';

// import AdminLayout from '../layouts/AdminLayout.jsx';

// import Users from '../pages/Users.jsx';
// import AgendaJobs from '../pages/AgendaJobs.jsx';
// import RateLists from '../pages/RateLists.jsx';
// import Affiliates from '../pages/Affiliates.jsx';

// import { getUser } from '../actions/users';

// const ContainerRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     <Component {...props} />
//    )} />
// );

// class AdminRoute extends React.Component {
//   state = {
//     authToken: localStorage.getItem('loginToken'),
//     loading: true
//   };

//   componentDidMount() {
//     const { authToken } = this.state;
//     const { getUser, user } = this.props;
//     if (authToken && (!user || !user._id)) {
//       getUser();
//       this.setState({ loading: false });
//     } else {
//       this.setState({ loading: false });
//     }
//   }

//   render() {
//     const { user } = this.props;
//     const { loading } = this.state;

//     const showLoading = (user.fetching || loading);
//     if (showLoading) {
//       return (<Spin tip="Please Wait" spinning={true} style={{'marginTop': '20%'}}> </Spin>);
//     }

//     if (!user._id) {
//       return (<Redirect to='/homepage' />);
//     } else if (!user.admin) {
//       return (<Redirect to='/' />);
//     }
//     return (
//       <AdminLayout>
//         <Switch>
//           <ContainerRoute exact path="/admin/" component={Users} />
//           <ContainerRoute exact path="/admin/users" component={Users} />
//           <ContainerRoute exact path="/admin/agendaJobs" component={AgendaJobs} />
//           <ContainerRoute exact path="/admin/rateLists" component={RateLists} />
//           <ContainerRoute exact path="/admin/affiliates" component={Affiliates} />
//           <Redirect from='*' to='/not-found' />
//         </Switch>
//       </AdminLayout>
//     );
//   }
// }

// const mapStateToProps = ({ user }) => ({ user });

// const mapDispatchToProps = (dispatch) => ({
//   getUser: () => {
//     return dispatch(getUser());
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AdminRoute)
