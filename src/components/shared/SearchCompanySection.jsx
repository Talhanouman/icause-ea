import React, { useState, useEffect } from 'react';
import DataListInput from "react-datalist-input";
import { useHistory } from 'react-router';
import { COMPANY_TYPES } from '../../constants/constants';

const SearchCompanySection = (props) => {

  const { companyType, filter, states, getCompanyListingsByPostcode , handleClear} = props;
  const companyNameToBeShown = COMPANY_TYPES.find(({ name }) => name === companyType);
  const [items, setItems] = useState([]);
  const history = useHistory();
  const pathName = history?.location?.pathname;

  useEffect(() => {
    if (states?.length) {
      prepareData(states)
    }
  }, [states])

  const setSearchFilter = ((value) => {
    const { setSearchFilter, getCompanyTypeListings, companyType, user, getStatesByPostCode } = props;
    setItems([]);
    setSearchFilter(value);
    if (value !== '') {
      getStatesByPostCode();
    }

    if (value === '') {
      setItems([]);
      getCompanyTypeListings(companyType, user && user.id ? user.id : navigator.userAgent);
      handleClear()
    }
  });

  const onSelect = (selectedItem) => {
    getCompanyListingsByPostcode(companyType, +(selectedItem.postcode))
    setItems([]);
  }

  const prepareData = (data) => {
    let mappedData = data?.map((oneItem) => ({
      // required: what to show to the user
      label: oneItem.code,
      // required: key to identify the item within the array
      key: oneItem.id,
      // feel free to add your own app logic to access those properties in the onSelect function
      someAdditionalValue: oneItem.postcode,
      // or just keep everything
      ...oneItem,
    }));
    setItems(mappedData);
    let input = document.getElementsByClassName('autocomplete-input')[0];
    input.blur();
    setTimeout(() => {
      input.click();
    }, 100)

  }

  const matchHandler = (currentInput, item) => {
    return true;
  }


  return (
    <section className="banner school-listing-banner faq-banner gen-banner">
      <div className="container">
        <div className="row  ">
          <div className="col-12">
            <div className="banner-text-box text-center text-wrap">
              <h1 className="mb-3">{companyNameToBeShown.pluralName} Directory </h1>
              {}
              <p>
                {
                  pathName === "/school-listing" ? "Support Your School Fundraising Campaign."
                    : pathName === "/sport-listing" ? "Aussie Sports club needs your Support!"
                      : pathName === "/charity-listing" ? "There is someone In Needs of Your Help!"
                        // : pathName === "/community-listing" ? "Start Your Journey To Support A Community Cause!"
                          : ""
                }
              </p>
              <div className="search-box">
                <DataListInput
                  placeholder={
                    (pathName === "/charity-listing" || pathName === '/community-listing') ?
                      `Search ${companyNameToBeShown.title}`
                      : `Search Your Local ${companyNameToBeShown.title}.`
                  }
                  items={items}
                  onSelect={onSelect}
                  match={matchHandler}
                  onInput={setSearchFilter}
                  value={filter && filter.name ? filter.name : ''}
                  type="search"
                  inputClassName="form-control"
                  suppressReselect={false}
                />
                <svg id="search_1_" className="search-icon" data-name="search (1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <g id="Group_6443" data-name="Group 6443" transform="translate(0)">
                    <path id="Path_36602" data-name="Path 36602" d="M.122,18.7l5.81-5.81A7.932,7.932,0,1,1,7.11,14.068L1.3,19.878a.417.417,0,0,1-.589,0l-.589-.589A.417.417,0,0,1,.122,18.7Zm11.961-4.533a6.25,6.25,0,1,0-6.25-6.25A6.257,6.257,0,0,0,12.083,14.167Z" transform="translate(0 0)" />
                  </g>
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchCompanySection;