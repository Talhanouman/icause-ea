

import React, { useEffect } from 'react';
import { Pagination } from 'antd';

import SearchedCampaignResult from '../../shared/SearchedCampaignResult';

const SearchedCampaign = (props) => {

  const { resetPagination, setPage, pagination, loading, match, getSearchedCampaignByName, searchedCampaign } = props;
  const { data: searchedData, total } = searchedCampaign || {};

  const { params } = match || {};
  const searchQuery = params && params.searchedQuery ? params.searchedQuery : null;



  useEffect(() => {
    getSearchedCampaignByName(searchQuery);

    return () => resetPagination();
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps 

  return (
    <div>
      <SearchedCampaignResult loading={loading} data={searchedData} searchQuery={searchQuery} />
      {searchedData && searchedData.length > 0 &&
        <section className="trending-causes">
          <div className="container">
            <div style={{ float: 'right' }}>
              <Pagination
                onChange={(page) => {
                  setPage(page);
                  getSearchedCampaignByName(searchQuery);
                }}
                pageSizeOptions={[9]}
                showSizeChange={false}
                size='small'
                current={pagination?.pageNumber}
                defaultPageSize={pagination?.pageSize}
                total={total}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
              />
            </div>
          </div>
        </section>
      }
    </div>
  );
};

export default SearchedCampaign;
