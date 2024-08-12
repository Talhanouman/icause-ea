import React, { useEffect,useState } from 'react';
import { Input, Spin, Button } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import MetaTags from 'react-meta-tags';
import SelectSearch, {fuzzySearch} from 'react-select-search';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import FeaturedEventsSection from './FeaturedEventsSection';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useHistory } from 'react-router';
import { imageURL } from '../../../../constants/constants';

const localizer = momentLocalizer(moment)

const customCalendarToolbar = ({ onNavigate, label }) => {
  return (
    <div>
      <div>
        <Button icon={<ArrowLeftOutlined />} style={{ float: 'left', border: '0px solid' }} onClick={() => onNavigate('PREV')}></Button>
        <Button onClick={() => onNavigate('TODAY')}>TODAY</Button>
        <span>{label}</span>
        <Button icon={<ArrowRightOutlined />} style={{ float: 'right', border: '0px solid' }} onClick={() => onNavigate('NEXT')}></Button>
      </div>
    </div>
  );
};

const EventManager = (props) => {
  const { 
    eventManager, 
    user, 
    getCategories,
    getEventTypes,
    resetFilters, 
    setSearchFilter, 
    getFeaturedEvents,
    searchEvents,
    getCustomerReviews
  } = props;
  const { 
    searchedEvents, 
    featuredEvents, 
    loading, 
    event_types,
    loadingForSearch } = eventManager;
  const { data } = featuredEvents || {};

  let mostRecentlyAddedEvent = searchedEvents && searchedEvents.length ? searchedEvents[0] : {};
  // const { story } = mostRecentlyAddedEvent || {};
  // const mostRecentlyAddedEventDescription = story ? (story >= 200 ? `${story.substring(0, 200)}...` : story) : '';
  const [options, setOptions] = useState([]);
  const history = useHistory();
  const eventsToBeShownOnCalendar = searchedEvents && searchedEvents.length ? searchedEvents.map((event) => {
    const { id, title, start_date, end_date, created_at } = event;
    if (moment(created_at) > moment(searchedEvents[0].created_at)) {
      mostRecentlyAddedEvent = {
        ...event
      };
    }
    return {
      id,
      title: title || '',
      allDay: true,
      start: start_date ? moment(start_date, 'YYYY-MM-DD h:mm a').toDate() : moment().toDate(),
      end: end_date ? moment(end_date, 'YYYY-MM-DD h:mm a').toDate() : moment().toDate(),
    };
  }) : []

  useEffect(() => {
    getCustomerReviews();
    getEventTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCategories().then(({ payload }) => {
      const { categories } = payload;
      const firstCategory = categories && categories.length && categories[0];
      
      if (firstCategory && firstCategory.id) {
        setSearchFilter({ key: 'type', value: firstCategory.id });
        searchEvents();
      }
    });
    getFeaturedEvents();
    return () => resetFilters();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 

  useEffect(() => {
  if(event_types && event_types.length){
    let values = [];
    event_types.forEach((entry) => {
      let obj = {
        name: entry.category,
        value: entry.category
      }
      values.push(obj);
  });
  setOptions(values);
  }
  },[event_types])

    const getSelectedValue = (value)=> {
     setSearchFilter({ key: 'type', value })
    }

 // const categoryOptions = categories && categories.map(({ id, name }) => <Option key={id} value={id}>{name}</Option>);

  return (
    <div className="event-manager-wrap event-manager-pg-wrap">
       <MetaTags>
            <meta name="description" content="The Icause event manager makes planning your event easier. Manage registration, communications, and so much more in one simple platform." />
      </MetaTags>
      <section className="news-banner event-manage-banner header-banner">
      <div className="container-fluid p-0">
        <OwlCarousel className="owl-carousel owl-theme event-banner-slider news-banner-slider event-manage-slider" loop={true} margin={0} dots={false} responsive={{ 0: { items: 1 } }} nav={true}>
          <div className="item item-1">
            <div className="container mb-md-5 pb-md-5 ">
              <div className="banner-text">
                <h1 className="title">
                icause for events
                  {/* Start An Event! */}
                  </h1>
                <p className="text">
                Take the sweat out of event planning  
                  {/* Event Planning Just Got Easier. */}
                  </p>
                <button type="button" className="btn btn-success mt-5" onClick={() => history.push('/user/create-event')}>create event</button>
              </div>
            </div>
          </div>
          <div className="item item-1">
            <div className="container mb-md-5 pb-md-5 ">
              <div className="banner-text">
              <h1 className="title">
                icause for events
                  {/* Start An Event! */}
                  </h1>
                <p className="text">
                Take the sweat out of event planning  
                  {/* Event Planning Just Got Easier. */}
                  </p>
                <button type="button" className="btn btn-success mt-5" onClick={() => history.push('/user/create-event')}>create event</button>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
      <section className="donate-section iCause-Partners pt-4 event-manager-sec-2">
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-7 col-md-12 pl-md-5 custom-text-width'>
              <h3 className="main-heading">Event planning </h3>
              
              <p>Our Event Manager makes planning your next event a breeze – create, manage and fundraise all in one easy location.</p>
              <p>The Event Manager tool is a one-stop platform for event registration and fundraising. You can manage your communications, merchandise, ticketing and fundraising donations through your event manager dashboard. If you are a charity or organisation with a fundraising event coming up, choose our Event Manager to make your event a success.</p>
              {/* <p className="pt-3">Our Event Manager tool is a one-stop platform for event registration and fundraising. It makes planning your next event a breeze – create, manage, and fundraise all in one easy location. You can manage your communications, merchandise, ticketing, and fundraising donations through your event manager dashboard. If you are a charity or organisation with a fundraising event coming up, choose our Event Manager to make your event a success.</p> */}
              
              <button
              onClick={() => {               
                history.push('/learn-more-event');               
            }}   
               type="button" className="gen-btn">LEARN MORE</button>
            </div>
            <div className='col-lg-5 col-md-12 trending-causes pt-0 pb-0'>
              <div className="card mt-0"> <img src={`${imageURL}event.PNG`} className="w-100" alt="" /> </div>
            </div>
          </div>
        </div>
      </section>
      <section className="search-event event-manager-sec-3 pb-5 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="search-box topnav">
                <div className="form-group icon-wrap">
                  <label htmlFor="">Search Event by name</label>
                  <Input onChange={({ target }) => setSearchFilter({ key: 'name', value: target.value })} type="text" className="form-control" placeholder="Search.." /> <i className="fa fa-search icon"></i> </div>
                {/* <div className="form-group">
                  <label htmlFor="">Search Event by type</label><br></br>
                  <Select value={filters.type} onChange={(value) => setSearchFilter({ key: 'type', value })} style={{ width: '100%' }} placeholder='Select Event Type'>
                    {categoryOptions}
                  </Select>
                </div> */}

                <div className="form-group">
                  <label htmlFor="">Search Event by type</label><br></br>
                  <SelectSearch
                     options={options}
                     search
                     filterOptions={fuzzySearch}
                     emptyMessage="Not found"
                     style={{ width: '100%' }} 
                     placeholder='Search or Select Event Type'
                     onChange={getSelectedValue}
                    />
                </div>

                <div className="card-box">
                <p className="heading font-playfair">Recent Events</p>
                </div>
                  <div className="card event-card">
                    <div className="img">
                      <img src={`${imageURL}search-box2.png`} className="img-fluid w-100" alt="" />
                    </div>
                    {/* <h6>{mostRecentlyAddedEvent && mostRecentlyAddedEvent.title ? mostRecentlyAddedEvent.title : ''}</h6>
                    <p dangerouslySetInnerHTML={{ __html: mostRecentlyAddedEventDescription || '' }}></p> */}
                    <div className="text-m d-flex  "> <span>{mostRecentlyAddedEvent && mostRecentlyAddedEvent.address ? mostRecentlyAddedEvent.address : ''}</span><span className="ml-4">{mostRecentlyAddedEvent && mostRecentlyAddedEvent.created_at ? moment(mostRecentlyAddedEvent.created_at).format('LL') : ''}</span> </div>
                  </div>
                <div className="btn-wraper event-btns-wrap mt-4">
                  <button onClick={() => history.push('/user/create-event')} type="button" className="btn btn-success">CREATE EVENT</button>
                  <button onClick={() => searchEvents()} type="button" className="event-btn btn-dark">SHOW EVENTS</button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 event-calender-wrap">
              <Spin spinning={loadingForSearch}>
                <div>
                  <Calendar
                    components={{
                      toolbar: customCalendarToolbar
                    }}
                    views={['month']}
                    className="event-calender"
                    localizer={localizer}
                    events={eventsToBeShownOnCalendar}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '450px' }}
                  />
                </div>
              </Spin>
              {/* <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/calnder.PNG" className="img-fluid w-100" alt="" /> */}
            </div>
          </div>
        </div>
      </section>

      <FeaturedEventsSection data={data} loading={loading} />

      <section className="Join event-manager-sec-4 bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h5>LET'S MAKE THIS HAPPEN</h5>
              <h2 className="main-heading text-center ff-poppins">Join our up coming event...</h2>
              <p>Every great change starts with a single action. If you’re ready to start raising funds, simply click the button to start planning your event today!</p>
              {/* <p>Every great change starts with a single action. If you’re ready to start raising funds, simply click the button to create your iCause campaign today.</p> */}
              <button
                onClick={() => {
                  if (user && user.id) {
                    history.push('/homepage');
                  } else {
                    history.push('/auth/login');
                  }
                }}
                type="button" 
                className="btn btn-success">
                  GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="Join event-manager-sec-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="main-heading text-center">Why choose Us?</h2>
              <p>For organizations like charities, our Event Manager is the perfect tool for fundraising events. You can manage team members, attendees or competitors, fundraising promotions, automated emails, and direct donations. You have complete control and visibility through your online portal to make your event a huge success. </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Best-fundraising-website pt-0 event-manager-sec-6">
        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className="box box-second p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="52.883" height="52.002" viewBox="0 0 52.883 52.002">
                  <g id="outline" transform="translate(-15.999 -15.999)">
                    <path id="Path_1624" data-name="Path 1624" d="M16.9,57.6a.881.881,0,0,0,1.127.668l5.2-1.624a4.261,4.261,0,0,0,2.1,4.956c.026.014.052.026.079.037l8.377,3.421.781,2.342a.881.881,0,0,0,.836.6H44.2a.88.88,0,0,0,.333-.065l15.426-6.3c.027-.011.053-.023.079-.037A4.262,4.262,0,0,0,62.183,56.8l4.673,1.46a.881.881,0,0,0,1.127-.668l.881-4.407a.881.881,0,0,0-.586-1.009L65.635,51.3a.881.881,0,0,0-.557,0l-2.25.75-6.4-4L54.314,39.59a4.842,4.842,0,0,0-2.535-3.16c-.039-.02-5.814-1.763-5.814-1.763v-2.3a.891.891,0,0,0,0-.089,5.276,5.276,0,0,0,1.767-3.941V24.813a5.277,5.277,0,0,0-1.841-4.005l-.246-1.229A4.453,4.453,0,0,0,38.127,17.3a12.276,12.276,0,0,0-3.619,8.737v.249a4.585,4.585,0,0,1-2.046,3.823l-.206.137a.881.881,0,0,0,.095,1.522l.683.342a6.37,6.37,0,0,0,5.7-.008q.089.088.182.171v2.391S33.14,36.409,33.1,36.429a4.842,4.842,0,0,0-2.535,3.16L28.451,48.05l-6.4,4L19.8,51.3a.881.881,0,0,0-.557,0l-2.644.881a.881.881,0,0,0-.586,1.009Zm17.451,5.79L26.105,60.02a2.5,2.5,0,0,1,.63-4.615,2.537,2.537,0,0,1,.521-.067h0a2.469,2.469,0,0,1,1.434.42l.036.023,11.216,6.708-.974.195-2.422-.807a.881.881,0,0,0-.9.213ZM30.04,54.51l1.1-.344a3.322,3.322,0,0,0,1.97-1.677L35.7,47.321l.574.717v1.191a6.159,6.159,0,0,1-.317,1.951l-.52,1.559-.815,2.447-1.291,1.291Zm5.984,11.728-.508-1.525.992-.992,2.127.709a.881.881,0,0,0,.452.028l3.543-.709.5,2.488ZM43,61.878l-.483.1-.028-.019-7.6-4.546,1.125-1.125a.883.883,0,0,0,.213-.345l.681-2.041H47.975l.681,2.041a.883.883,0,0,0,.213.345l1.3,1.3Zm4.254-10.141.133.4H37.493l.133-.4a7.921,7.921,0,0,0,.407-2.508V48.61h8.814v.619a7.922,7.922,0,0,0,.407,2.509Zm1.356-2.509V48.038l.574-.717,2.584,5.168a3.322,3.322,0,0,0,1.97,1.677l1.416.442-3.422,2.047-1.47-1.47-.815-2.447-.52-1.558A6.16,6.16,0,0,1,48.61,49.228Zm11.836,9.3a2.474,2.474,0,0,1-1.194,1.491L44.858,65.9l-.55-2.75L56.628,55.78l.036-.023a2.5,2.5,0,0,1,3.781,2.772Zm-10.074-18.1V37.815l.673.219A3.082,3.082,0,0,1,52.6,40.017l2.2,8.807a.881.881,0,0,0,.388.534l7.051,4.407a.881.881,0,0,0,.746.089l2.365-.789,1.627.542-.537,2.683-5.767-1.8a4.223,4.223,0,0,0-2.889-.9l-3.527-1.1a1.55,1.55,0,0,1-.92-.782l-2.973-5.946a5.2,5.2,0,0,0,0-5.331ZM45.966,28.338a3.526,3.526,0,1,1-7.051,0V25.012a14.216,14.216,0,0,0,7.051,2.414Zm-1.054,7.915.173.035v3.067L42.44,41.338,39.8,39.355V36.288l.173-.035a.881.881,0,0,0,.709-.864V33.323a5.276,5.276,0,0,0,3.526,0v2.066a.881.881,0,0,0,.709.864Zm1.054-11.441v.847a12.426,12.426,0,0,1-6.522-2.434.876.876,0,0,0-.114-.071,3.525,3.525,0,0,1,6.636,1.658Zm-8.814,0v3.526a5.255,5.255,0,0,0,.532,2.31,4.611,4.611,0,0,1-3.271.132,6.343,6.343,0,0,0,1.858-4.492V26.04a10.524,10.524,0,0,1,3.1-7.491,2.689,2.689,0,0,1,4.489,1.171,5.285,5.285,0,0,0-6.711,5.092ZM36.123,41.166a.881.881,0,0,0,.148-.489V37.261l1.763-.518V39.8a.881.881,0,0,0,.353.705l3.526,2.644a.881.881,0,0,0,1.058,0L46.495,40.5a.881.881,0,0,0,.353-.705V36.743l1.763.518v3.417a.881.881,0,0,0,.148.489,3.452,3.452,0,0,1-.177,4.086L47.3,46.847H37.576L36.3,45.252A3.452,3.452,0,0,1,36.123,41.166Zm-16.6,11.9,2.365.788a.881.881,0,0,0,.746-.089l7.051-4.407a.881.881,0,0,0,.388-.534l2.2-8.807a3.082,3.082,0,0,1,1.558-1.983l.673-.218v2.609a5.2,5.2,0,0,0,0,5.331L31.536,51.7a1.55,1.55,0,0,1-.919.782l-3.518,1.1a4.191,4.191,0,0,0-2.08.664c-.048.007-6.585,2.044-6.585,2.044L17.9,53.607Z" transform="translate(0)"/>
                    <path id="Path_1625" data-name="Path 1625" d="M395.458,155.525h-2.777a4.4,4.4,0,0,0-.607-1.377l-1.171-1.756a.881.881,0,0,0-1.467,0l-1.171,1.756a4.4,4.4,0,0,0-.607,1.377h-2.777a.881.881,0,0,0-.788,1.276l1.032,2.064a3.506,3.506,0,0,0,3.153,1.949h3.783a3.506,3.506,0,0,0,3.153-1.949l1.032-2.064a.881.881,0,0,0-.788-1.276Zm-8.756,2.551-.394-.788h1.257a4.358,4.358,0,0,0,.633,1.76A1.752,1.752,0,0,1,386.7,158.076Zm4.35-1.367a2.627,2.627,0,0,1-.775,1.87l-.107.107-.107-.107a2.626,2.626,0,0,1-.774-1.87v-.116a2.637,2.637,0,0,1,.444-1.467l.437-.656.437.656a2.637,2.637,0,0,1,.444,1.467Zm2.587,1.367a1.752,1.752,0,0,1-1.5.972,4.357,4.357,0,0,0,.633-1.76h1.257Z" transform="translate(-327.458 -121.017)"/>
                    <path id="Path_1626" data-name="Path 1626" d="M27.458,163.526H24.681a4.4,4.4,0,0,0-.607-1.377L22.9,160.393a.881.881,0,0,0-1.467,0l-1.171,1.756a4.4,4.4,0,0,0-.607,1.377H16.882a.881.881,0,0,0-.788,1.276l1.032,2.064a3.506,3.506,0,0,0,3.153,1.949h3.783a3.506,3.506,0,0,0,3.153-1.949l1.032-2.064a.881.881,0,0,0-.788-1.276ZM18.7,166.077l-.394-.788h1.257a4.356,4.356,0,0,0,.633,1.76A1.752,1.752,0,0,1,18.7,166.077Zm4.35-1.367a2.627,2.627,0,0,1-.775,1.87l-.107.107-.107-.107a2.626,2.626,0,0,1-.774-1.87v-.116a2.637,2.637,0,0,1,.444-1.467l.437-.656.437.656a2.637,2.637,0,0,1,.444,1.467Zm2.587,1.367a1.752,1.752,0,0,1-1.5.972,4.357,4.357,0,0,0,.633-1.76h1.257Z" transform="translate(-0.001 -128.137)"/>
                  </g>
                </svg>

                  <h4>Easy Set-up</h4>
                  <p>Use a fundraising templates or create your own online. </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className="box box-second p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="51.734" height="51.843" viewBox="0 0 51.734 51.843">
                  <g id="image_gr_2" transform="translate(0 0.117)">
                    <g id="Group_213" data-name="Group 213" transform="translate(0 16.68)">
                      <g id="Group_212" data-name="Group 212">
                        <path id="Path_1627" data-name="Path 1627" d="M48.4,160a3.341,3.341,0,0,0-3.338,3.338v9.312a2.5,2.5,0,0,1-.874,1.9l-3.737,3.2a2.5,2.5,0,0,1-1.629.6H35.884l3.228-3.632a3.717,3.717,0,0,0,.94-2.472v-.188a3.721,3.721,0,0,0-6.486-2.49l-4.508,5.009a9.159,9.159,0,0,0-2.357,6.14v9.315H25.033v-9.315a9.163,9.163,0,0,0-2.356-6.14l-4.508-5.009a3.721,3.721,0,0,0-6.487,2.489v.188a3.719,3.719,0,0,0,.94,2.472l3.228,3.632H12.916a2.5,2.5,0,0,1-1.629-.6l-3.737-3.2a2.5,2.5,0,0,1-.874-1.9v-9.312a3.338,3.338,0,0,0-6.675,0v10.515a9.2,9.2,0,0,0,2.976,6.766l5.684,5.21a4.183,4.183,0,0,1,1.353,3.076v1.135H8.344v5.007H43.39v-5.007H41.721V188.9a4.182,4.182,0,0,1,1.353-3.076l5.684-5.21a9.2,9.2,0,0,0,2.976-6.766V163.338A3.341,3.341,0,0,0,48.4,160ZM25.033,193.377H10.013v-1.669H20.026v-1.669H11.682V188.9A5.856,5.856,0,0,0,9.788,184.6L4.1,179.388a7.525,7.525,0,0,1-2.435-5.536V163.338a1.669,1.669,0,0,1,3.338,0v9.312a4.166,4.166,0,0,0,1.457,3.167l3.738,3.2a4.173,4.173,0,0,0,2.714,1h4.417l1.235,1.389,1.247-1.109-5.946-6.69a2.053,2.053,0,0,1-.518-1.363v-.188a2.052,2.052,0,0,1,3.577-1.373l4.508,5.009a7.492,7.492,0,0,1,1.928,5.023v9.315H21.7v1.669h3.338Zm25.033-19.525a7.525,7.525,0,0,1-2.435,5.536l-5.684,5.21a5.856,5.856,0,0,0-1.894,4.306v1.135H31.708v1.669H41.721v1.669H26.7v-1.669h3.338v-1.669H28.37v-9.315A7.5,7.5,0,0,1,30.3,175.7l4.508-5.009a2.053,2.053,0,0,1,3.578,1.373v.188a2.05,2.05,0,0,1-.519,1.363l-5.946,6.69,1.247,1.109,1.235-1.388h4.417a4.174,4.174,0,0,0,2.715-1l3.737-3.2a4.164,4.164,0,0,0,1.458-3.167v-9.312a1.669,1.669,0,0,1,3.338,0v10.515Z" transform="translate(0 -160)"/>
                      </g>
                    </g>
                    <g id="Group_215" data-name="Group 215" transform="translate(22.529 3.329)">
                      <g id="Group_214" data-name="Group 214">
                        <path id="Path_1628" data-name="Path 1628" d="M219.338,38.675a1.669,1.669,0,1,1,1.669-1.669h1.669a3.335,3.335,0,0,0-2.5-3.219V32H218.5v1.787a3.331,3.331,0,0,0,.834,6.557,1.669,1.669,0,1,1-1.669,1.669H216a3.335,3.335,0,0,0,2.5,3.219V47.02h1.669V45.232a3.331,3.331,0,0,0-.834-6.557Z" transform="translate(-216 -32)"/>
                      </g>
                    </g>
                    <g id="Group_217" data-name="Group 217" transform="translate(15.02 -0.008)">
                      <g id="Group_216" data-name="Group 216">
                        <path id="Path_1629" data-name="Path 1629" d="M154.848,0A10.848,10.848,0,1,0,165.7,10.848,10.86,10.86,0,0,0,154.848,0Zm0,20.026a9.179,9.179,0,1,1,9.179-9.179A9.19,9.19,0,0,1,154.848,20.026Z" transform="translate(-144)"/>
                      </g>
                    </g>
                    <g id="Group_219" data-name="Group 219" transform="translate(40.052 3.329)">
                      <g id="Group_218" data-name="Group 218">
                        <path id="Path_1630" data-name="Path 1630" d="M389.841,32a5.841,5.841,0,1,0,5.841,5.841A5.847,5.847,0,0,0,389.841,32Zm0,10.013a4.172,4.172,0,1,1,4.172-4.172A4.177,4.177,0,0,1,389.841,42.013Z" transform="translate(-384 -32)"/>
                      </g>
                    </g>
                    <g id="Group_221" data-name="Group 221" transform="translate(43.39 6.667)">
                      <g id="Group_220" data-name="Group 220">
                        <path id="Path_1631" data-name="Path 1631" d="M419.338,65.669V64h-1.669v1.669H416v1.669h1.669v1.669h1.669V67.338h1.669V65.669Z" transform="translate(-416 -64)"/>
                      </g>
                    </g>
                    <g id="Group_223" data-name="Group 223" transform="translate(0 3.329)">
                      <g id="Group_222" data-name="Group 222">
                        <path id="Path_1632" data-name="Path 1632" d="M5.841,32a5.841,5.841,0,1,0,5.841,5.841A5.847,5.847,0,0,0,5.841,32Zm0,10.013a4.172,4.172,0,1,1,4.172-4.172A4.177,4.177,0,0,1,5.841,42.013Z" transform="translate(0 -32)"/>
                      </g>
                    </g>
                    <g id="Group_225" data-name="Group 225" transform="translate(3.338 6.667)">
                      <g id="Group_224" data-name="Group 224">
                        <path id="Path_1633" data-name="Path 1633" d="M35.338,65.669V64H33.669v1.669H32v1.669h1.669v1.669h1.669V67.338h1.669V65.669Z" transform="translate(-32 -64)"/>
                      </g>
                    </g>
                    <g id="Group_227" data-name="Group 227" transform="translate(31.433 10.088)">
                      <g id="Group_226" data-name="Group 226" transform="translate(0 0)">
                        <rect id="Rectangle_285" data-name="Rectangle 285" width="1.855" height="1.855"/>
                      </g>
                    </g>
                    <g id="Group_229" data-name="Group 229" transform="translate(18.446 10.088)">
                      <g id="Group_228" data-name="Group 228" transform="translate(0 0)">
                        <rect id="Rectangle_286" data-name="Rectangle 286" width="1.855" height="1.855"/>
                      </g>
                    </g>
                    <g id="Group_231" data-name="Group 231" transform="translate(11.952 -0.117)">
                      <g id="Group_230" data-name="Group 230" transform="translate(0)">
                        <rect id="Rectangle_287" data-name="Rectangle 287" width="2.783" height="1.855"/>
                      </g>
                    </g>
                    <g id="Group_233" data-name="Group 233" transform="translate(11.952 3.594)">
                      <g id="Group_232" data-name="Group 232" transform="translate(0 0)">
                        <rect id="Rectangle_288" data-name="Rectangle 288" width="2.783" height="1.855"/>
                      </g>
                    </g>
                    <g id="Group_235" data-name="Group 235" transform="translate(14.735 1.738)">
                      <g id="Group_234" data-name="Group 234" transform="translate(0 0)">
                        <rect id="Rectangle_289" data-name="Rectangle 289" width="0.928" height="1.855"/>
                      </g>
                    </g>
                    <g id="Group_237" data-name="Group 237" transform="translate(11.024 1.738)">
                      <g id="Group_236" data-name="Group 236" transform="translate(0 0)">
                        <rect id="Rectangle_290" data-name="Rectangle 290" width="0.928" height="1.855"/>
                      </g>
                    </g>
                    <g id="Group_239" data-name="Group 239" transform="translate(37.928 16.582)">
                      <g id="Group_238" data-name="Group 238" transform="translate(0 0)">
                        <rect id="Rectangle_291" data-name="Rectangle 291" width="1.855" height="1.855" transform="translate(0 0)"/>
                      </g>
                    </g>
                    <g id="Group_241" data-name="Group 241" transform="translate(37.928 20.292)">
                      <g id="Group_240" data-name="Group 240" transform="translate(0 0)">
                        <rect id="Rectangle_292" data-name="Rectangle 292" width="1.855" height="1.855" transform="translate(0)"/>
                      </g>
                    </g>
                    <g id="Group_243" data-name="Group 243" transform="translate(39.783 18.437)">
                      <g id="Group_242" data-name="Group 242" transform="translate(0 0)">
                        <rect id="Rectangle_293" data-name="Rectangle 293" width="1.855" height="1.855" transform="translate(0 0)"/>
                      </g>
                    </g>
                    <g id="Group_245" data-name="Group 245" transform="translate(37 18.437)">
                      <g id="Group_244" data-name="Group 244" transform="translate(0 0)">
                        <rect id="Rectangle_294" data-name="Rectangle 294" width="0.928" height="1.855" transform="translate(0 0)"/>
                      </g>
                    </g>
                  </g>
                </svg>

                  <h4>Complete control</h4>
                  <p>Add and manage team members in one place. </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className="box box-second p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="51.643" viewBox="0 0 58 51.643">
                  <g id="image_gr_3" transform="translate(0 -28.057)">
                    <g id="Group_247" data-name="Group 247" transform="translate(3.632 72.767)">
                      <g id="Group_246" data-name="Group 246">
                        <path id="Path_1634" data-name="Path 1634" d="M32.914,422.74a.85.85,0,0,0-.85.85v5.234a.85.85,0,0,0,1.7,0V423.59A.85.85,0,0,0,32.914,422.74Z" transform="translate(-32.064 -422.74)"/>
                      </g>
                    </g>
                    <g id="Group_249" data-name="Group 249" transform="translate(0 49.85)">
                      <g id="Group_248" data-name="Group 248">
                        <path id="Path_1635" data-name="Path 1635" d="M30.388,223.8l.556-.524a.85.85,0,1,0-1.165-1.236L17.343,233.757a35.708,35.708,0,0,1-1.117-6.17,7.388,7.388,0,0,0-7.2-7.146,7.388,7.388,0,0,0-7.2,7.146,32.812,32.812,0,0,1-1.449,7.2A1.752,1.752,0,0,0,1.275,237a14.939,14.939,0,0,0,2.894.96l-2.194,1.1A3.555,3.555,0,0,0,0,242.259v7.182a.85.85,0,0,0,1.7,0v-7.182a1.864,1.864,0,0,1,1.036-1.677l2.838-1.419.987.938a3.574,3.574,0,0,0,4.93-.006l1.691-1.637a2.684,2.684,0,0,0,.382.028h.183a2.653,2.653,0,0,0,1.834-.731L26.137,227.8l1.207,1.207L14.026,242.328a4.453,4.453,0,0,0-1.313,3.169v3.944a.85.85,0,0,0,1.7,0V245.5a2.765,2.765,0,0,1,.815-1.968l15.008-15.008a2.679,2.679,0,0,0,.7-2.531ZM5.448,236.49a14.082,14.082,0,0,1-3.462-1.029c-.046-.021-.028-.077-.024-.088a24.837,24.837,0,0,0,.941-3.515,6.315,6.315,0,0,0,2.545,3.694Zm4.865,2.379a1.874,1.874,0,0,1-2.583,0l-.79-.75a1.758,1.758,0,0,0,.206-.829v-.9a6.317,6.317,0,0,0,3.806-.017,2.661,2.661,0,0,0,.647,1.255Zm-1.291-3.9a4.6,4.6,0,0,1-4.6-4.6.848.848,0,0,0-1.122-.8c.1-.715.176-1.359.212-1.86a6.306,6.306,0,0,1,1.717-3.959,5.276,5.276,0,0,1,7.584,0,6.3,6.3,0,0,1,1.717,3.959c.038.537.119,1.238.235,2.016a7.561,7.561,0,0,0-4.353-3.321,10.652,10.652,0,0,0-3.231-.512.849.849,0,0,0-.588.26l-1.532,1.589a.85.85,0,1,0,1.223,1.179L7.56,227.6c1.1.054,4.63.465,6,3.489A4.588,4.588,0,0,1,9.022,234.97Zm5.389,1.55a.962.962,0,0,1-.666.266h-.183a.968.968,0,0,1-.967-.967c0-.015,0-.12,0-.26a6.274,6.274,0,0,0,2.543-3.7,26.685,26.685,0,0,0,.828,3.194Zm14.623-9.2-.488.488-1.171-1.171,1.6-1.5.317,1.27A.971.971,0,0,1,29.034,227.32Z" transform="translate(0 -220.441)"/>
                      </g>
                    </g>
                    <g id="Group_251" data-name="Group 251" transform="translate(23.61 28.057)">
                      <g id="Group_250" data-name="Group 250" transform="translate(0 0)">
                        <path id="Path_1636" data-name="Path 1636" d="M240.143,28.057H211.085a2.669,2.669,0,0,0-2.666,2.666V52.746a.85.85,0,1,0,1.7,0V30.723a.968.968,0,0,1,.966-.967h29.058a.968.968,0,0,1,.967.967v23.61a.968.968,0,0,1-.967.967H218.68a.85.85,0,0,0,0,1.7h21.463a2.669,2.669,0,0,0,2.666-2.666V30.723A2.669,2.669,0,0,0,240.143,28.057Z" transform="translate(-208.419 -28.057)"/>
                      </g>
                    </g>
                    <g id="Group_253" data-name="Group 253" transform="translate(31.782 31.689)">
                      <g id="Group_252" data-name="Group 252" transform="translate(0 0)">
                        <path id="Path_1637" data-name="Path 1637" d="M299.575,62.844H298.9l1.274-1.274a.85.85,0,0,0-1.2-1.2L297.7,61.643V60.97a.85.85,0,1,0-1.7,0v2.372l-.667.667a9.033,9.033,0,1,0,1.2,1.2l.667-.667h2.372a.85.85,0,1,0,0-1.7Zm-2.666,8.114a7.336,7.336,0,1,1-2.784-5.74l-5.14,5.14a.85.85,0,0,0,1.2,1.2l2.539-2.539a3.656,3.656,0,0,1,.551,1.939,3.691,3.691,0,1,1-3.691-3.691.85.85,0,1,0,0-1.7,5.39,5.39,0,1,0,5.39,5.39A5.342,5.342,0,0,0,293.95,67.8l1.376-1.376A7.285,7.285,0,0,1,296.909,70.958Z" transform="translate(-280.564 -60.12)"/>
                      </g>
                    </g>
                  </g>
                </svg>

                  <h4>Promote your event</h4>
                  <p>Use automated emails and social sharing to reach your supporters. </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className="box box-second p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="49.002" height="49.002" viewBox="0 0 49.002 49.002">
                  <g id="image_gr_4" transform="translate(-16 -16)">
                    <rect id="Rectangle_295" data-name="Rectangle 295" width="5" height="1" transform="translate(38 57)"/>
                    <path id="Path_1638" data-name="Path 1638" d="M17.633,145.838a.2.2,0,0,1,.2-.2H20.9V144H17.838A1.84,1.84,0,0,0,16,145.838v11.23h1.633Z" transform="translate(0 -114.933)"/>
                    <path id="Path_1639" data-name="Path 1639" d="M63.369,53.568h-14.7V46.762a2.851,2.851,0,0,0-1.759-2.639l-3.141-1.309v-16.2H42.134V28.25H38.051a3.27,3.27,0,0,1-3.267-3.267v-2.45H33.151v.817h-4.7a1.84,1.84,0,0,0-1.826,1.633H25.8V22.942a5.315,5.315,0,0,1,5.309-5.309h5.717a5.315,5.315,0,0,1,5.309,5.309v2.042h1.633V22.942A6.95,6.95,0,0,0,36.826,16H31.109a6.95,6.95,0,0,0-6.942,6.942v2.317a2.862,2.862,0,0,0-1.633,2.583v1.633a2.862,2.862,0,0,0,1.633,2.583V42.815l-3.141,1.308a2.851,2.851,0,0,0-1.759,2.639v6.806H17.633v-9.8H16V59.9a1.84,1.84,0,0,0,1.838,1.838H35.371l-.408,1.633H32.334V65H48.668V63.369H46.039l-.408-1.633H57.652V60.1H17.838a.2.2,0,0,1-.2-.2V55.2H63.369v4.7a.2.2,0,0,1-.2.2H59.285v1.633h3.879A1.84,1.84,0,0,0,65,59.9V37.234H63.369ZM43.947,61.735l.408,1.633H36.647l.408-1.633Zm3.088-14.973v6.806h-6.2L41.9,52.512a.817.817,0,0,0,.214-.776l-.618-2.474,2.474-.619a.817.817,0,0,0,.422-1.324l-3.3-3.853,5.2,2.164A1.222,1.222,0,0,1,47.035,46.762ZM32.187,53.568,30.152,43.395l3.3,2.644a.817.817,0,0,0,1.021,0l3.3-2.644L35.748,53.568ZM31.93,37.945l1.212.606a1.846,1.846,0,0,0,1.652,0L36,37.936l1.114,3.9-3.149,2.52-3.149-2.519Zm10.2,4.189L38.463,40.6l-.977-3.42,1.7-.863a3.861,3.861,0,0,0,2.127-3.461V29.884h.817ZM28.25,25.188a.2.2,0,0,1,.2-.2h4.7a4.906,4.906,0,0,0,4.9,4.9h1.633V32.86a2.236,2.236,0,0,1-1.231,2l-4.4,2.226a.2.2,0,0,1-.184,0L29.492,34.9a2.234,2.234,0,0,1-1.241-2.008v-.053L31.969,34.7a.816.816,0,0,0,.365.086h2.45V33.151H32.527L28.25,31.013Zm-4.083,2.654a1.226,1.226,0,0,1,1.225-1.225h1.225V30.7H25.392a1.226,1.226,0,0,1-1.225-1.225ZM25.8,32.334h.817v.557a3.858,3.858,0,0,0,2.144,3.47l1.682.841-.972,3.4L25.8,42.134ZM20.9,46.762a1.222,1.222,0,0,1,.754-1.131l5.2-2.164-3.3,3.853a.817.817,0,0,0,.422,1.324l2.474.619-.619,2.474a.817.817,0,0,0,.214.776L27.1,53.568H20.9Zm8.505,6.806-1.884-1.884.7-2.818a.817.817,0,0,0-.594-.99l-1.984-.5L28.6,43.94l1.926,9.628Zm8.008,0,1.926-9.628,2.948,3.44-1.985.5a.817.817,0,0,0-.594.99l.7,2.818-1.884,1.884Z"/>
                    <rect id="Rectangle_296" data-name="Rectangle 296" width="2" height="2" transform="translate(30 27)"/>
                    <path id="Path_1640" data-name="Path 1640" d="M304.13,74.453a.817.817,0,0,0,.682.368h5.061a9.8,9.8,0,1,0-4.557-4.067l-1.255,2.928A.817.817,0,0,0,304.13,74.453ZM313.8,57.67a8.167,8.167,0,1,1-3.407,15.592.817.817,0,0,0-.341-.075h-4l.933-2.178a.817.817,0,0,0-.064-.763A8.169,8.169,0,0,1,313.8,57.67Z" transform="translate(-258.594 -35.953)"/>
                    <rect id="Rectangle_297" data-name="Rectangle 297" width="8" height="1" transform="translate(51 26)"/>
                    <rect id="Rectangle_298" data-name="Rectangle 298" width="5" height="2" transform="translate(49 29)"/>
                    <rect id="Rectangle_299" data-name="Rectangle 299" width="5" height="2" transform="translate(56 29)"/>
                    <rect id="Rectangle_300" data-name="Rectangle 300" width="8" height="1" transform="translate(51 33)"/>
                  </g>
                </svg>

                  <h4>Ticketing</h4>
                  <p>Our API integration and ticketing function make event registration easy. </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className="box box-second p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="49.948" height="38.568" viewBox="0 0 49.948 38.568">
                  <path id="image_gr_5" d="M49.5,70.456l-8.938-9.862a6.933,6.933,0,0,0-5.129-2.274H14.465a6.932,6.932,0,0,0-5.14,2.287L7.479,62.653a.732.732,0,1,0,1.087.98l1.845-2.047a5.466,5.466,0,0,1,4.054-1.8h3.448a7.37,7.37,0,0,0,14.122,0h3.4a5.467,5.467,0,0,1,4.044,1.793l8.938,9.862a.258.258,0,0,1,0,.34l-5.014,5.846a.257.257,0,0,1-.34.045l-4.156-2.837V70.887a.732.732,0,0,0-1.463,0V72.54H30.261c-.089-.105-.18-.209-.276-.309l.578-1.155a1.534,1.534,0,0,0-1.372-2.22H26.655a.732.732,0,1,0,0,1.463h2.536a.071.071,0,0,1,.064.1l-4.217,8.435a.071.071,0,0,1-.127,0l-4.217-8.435a.071.071,0,0,1,.064-.1H23.2a.732.732,0,1,0,0-1.463H20.757a1.534,1.534,0,0,0-1.372,2.22l.578,1.156c-.1.1-.187.2-.276.309H12.443V70.887a.732.732,0,1,0-1.463,0V74.87l-4.1,2.8a.257.257,0,0,1-.34-.045L1.525,71.779a.258.258,0,0,1,.006-.341l4.727-5.243a.732.732,0,1,0-1.087-.98L.445,70.456a1.724,1.724,0,0,0-.031,2.275l5.015,5.846a1.719,1.719,0,0,0,2.276.3l3.276-2.236V95.168A1.722,1.722,0,0,0,12.7,96.888H37.192a1.722,1.722,0,0,0,1.721-1.721V87.489a.732.732,0,0,0-1.463,0v7.679a.258.258,0,0,1-.257.257H35.979V90.988a1.221,1.221,0,0,0-1.219-1.219H32.814a1.221,1.221,0,0,0-1.219,1.219v4.437H12.7a.258.258,0,0,1-.257-.257V82.117h7.869a6.909,6.909,0,0,0,9.322,0h7.814v1.919a.732.732,0,0,0,1.463,0V76.6l3.331,2.274a1.718,1.718,0,0,0,2.276-.3l5.015-5.846a1.724,1.724,0,0,0-.031-2.276ZM24.974,63.58a5.934,5.934,0,0,1-5.515-3.8h4.783v.7a.732.732,0,1,0,1.463,0v-.7h4.783a5.933,5.933,0,0,1-5.515,3.8Zm8.084,27.653h1.458v4.193H33.058ZM12.443,74h6.3a6.894,6.894,0,0,0,.356,6.651H12.444V74Zm7.072,3a5.479,5.479,0,0,1,1.155-3.356L23.6,79.51a1.534,1.534,0,0,0,2.745,0l2.933-5.865A5.4,5.4,0,0,1,30.433,77a5.459,5.459,0,0,1-10.918,0Zm11.337,3.65A6.894,6.894,0,0,0,31.208,74h6.241v6.651Z" transform="translate(0 -58.32)"/>
                </svg>
                  <h4>Merchendise</h4>
                  <p>Add your merchandise products to boost fundraising. </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className="box box-second p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="59.763" height="37.85" viewBox="0 0 59.763 37.85">
                  <g id="image_gr_6" transform="translate(-16 -104)">
                    <path id="Path_1641" data-name="Path 1641" d="M375.941,280a3.96,3.96,0,0,0-1.995.535,3.984,3.984,0,1,0,0,6.9A3.984,3.984,0,1,0,375.941,280Zm-3.984,5.976a1.992,1.992,0,1,1,1.992-1.992A1.992,1.992,0,0,1,371.957,285.975Zm3.984,0a1.993,1.993,0,0,1-.5-.065,3.973,3.973,0,0,0,0-3.854,1.991,1.991,0,1,1,.5,3.919Z" transform="translate(-308.147 -154.086)"/>
                    <path id="Path_1642" data-name="Path 1642" d="M225,241.992h3.984a1,1,0,1,0,0-1.992H225a1,1,0,1,0,0,1.992Z" transform="translate(-182.103 -119.067)"/>
                    <path id="Path_1643" data-name="Path 1643" d="M289,241.992h3.984a1,1,0,0,0,0-1.992H289a1,1,0,0,0,0,1.992Z" transform="translate(-238.134 -119.067)"/>
                    <path id="Path_1644" data-name="Path 1644" d="M353,241.992h3.984a1,1,0,1,0,0-1.992H353a1,1,0,1,0,0,1.992Z" transform="translate(-294.166 -119.067)"/>
                    <path id="Path_1645" data-name="Path 1645" d="M440.546,145.848a1,1,0,0,0,1.336-.445,9.459,9.459,0,0,0,0-8.859,1,1,0,1,0-1.782.889,7.474,7.474,0,0,1,0,7.079A1,1,0,0,0,440.546,145.848Z" transform="translate(-371.205 -28.009)"/>
                    <path id="Path_1646" data-name="Path 1646" d="M376.282,157.675a1,1,0,0,0,1.409,0,3.467,3.467,0,0,0,0-5.393,1,1,0,1,0-1.411,1.406,1.53,1.53,0,0,1,0,2.578A1,1,0,0,0,376.282,157.675Z" transform="translate(-315.168 -42.014)"/>
                    <path id="Path_1647" data-name="Path 1647" d="M20.98,141.85H34.925a4.989,4.989,0,0,0,4.881-3.984H70.783a4.986,4.986,0,0,0,4.98-4.98V108.98a4.986,4.986,0,0,0-4.98-4.98H30.941a4.987,4.987,0,0,0-4.913,4.167,8.692,8.692,0,0,0-4.484,2.451,8.991,8.991,0,0,0-2.556,6.331v3.984H17a1,1,0,0,0-1,1V136.87a4.986,4.986,0,0,0,4.98,4.98Zm9.961-35.858H70.783a2.992,2.992,0,0,1,2.988,2.988v23.905a2.992,2.992,0,0,1-2.988,2.988H39.905v-1.992H48.87a1,1,0,1,0,0-1.992H39.905V129.9h3.984a1,1,0,1,0,0-1.992H39.905v-5.976a1,1,0,0,0-1-1H36.917v-3.984a2.992,2.992,0,0,0,2.988-2.988v-1.992a2.992,2.992,0,0,0-2.988-2.988H32.933a2.983,2.983,0,0,0-.712.086,8.906,8.906,0,0,0-4.1-1.078A2.993,2.993,0,0,1,30.941,105.992Zm3.686,4.98h2.29a1,1,0,0,1,1,1v1.992a1,1,0,0,1-1,1h-.226A8.948,8.948,0,0,0,34.627,110.972Zm.006,3.984h-1.7a1,1,0,0,1-1-1v-1.992a.989.989,0,0,1,.2-.594A7,7,0,0,1,34.633,114.957Zm-6.681-4.98a6.94,6.94,0,0,1,2.429.437,2.97,2.97,0,0,0-.437,1.555v1.992a2.992,2.992,0,0,0,2.988,2.988h1.992v3.984H27.953Zm-6.972,6.972a7.01,7.01,0,0,1,1.987-4.938,6.718,6.718,0,0,1,2.993-1.777v10.7H20.98Zm-2.988,5.976H37.913V136.87a2.992,2.992,0,0,1-2.988,2.988H20.98a2.992,2.992,0,0,1-2.988-2.988Z" transform="translate(0 0)"/>
                    <path id="Path_1648" data-name="Path 1648" d="M82.986,279.845v4.11a1,1,0,0,0,1.992,0v-4.11a3.984,3.984,0,1,0-1.992,0Zm1-5.85a1.992,1.992,0,1,1-1.992,1.992A1.992,1.992,0,0,1,83.982,273.995Z" transform="translate(-56.03 -147.086)"/>
                    <path id="Path_1649" data-name="Path 1649" d="M410.988,147.984a5.291,5.291,0,0,0-1.288-3.692,1,1,0,0,0-1.409,1.409,3.5,3.5,0,0,1,.7,2.284,3.451,3.451,0,0,1-.716,2.3l.011-.011h0a1,1,0,0,0,1.409,1.409h0A5.291,5.291,0,0,0,410.988,147.984Z" transform="translate(-343.193 -35.02)"/>
                  </g>
                </svg>

                  <h4>Security guarantee</h4>
                  <p>
                  Our payment and privacy guarantee gives you peace of mind.
                    {/* Use a fundraising templates or create your own online.  */}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* <section className="Best-fundraising-website event-manager-sec-7" >
     <CustomerReviews
        data={customerReviews}
        loading={loading}
      />
     </section> */}

    </div>

  );
};

export default EventManager;
