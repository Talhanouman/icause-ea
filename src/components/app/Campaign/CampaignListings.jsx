

import React, { useEffect } from 'react';
import { Pagination } from 'antd';

import RecentCauses from '../../shared/RecentCauses';

const CampaignListings = (props) => {
  const { resetPagination, setPage, getRecentCauses, pagination, recentCauses, loading, history } = props;
  const { data: recentCauseList, total } = recentCauses || {};
  
  useEffect(() => {
    getRecentCauses();

    return () => resetPagination();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 

  return (
    <div>
      <RecentCauses history={history} loading={loading} data={recentCauseList} />
      <section className="trending-causes">
        <div className="container">
          <div style={{ float: 'right' }}>
              <Pagination
                onChange={(page) => {
                  setPage(page);
                  getRecentCauses();
                }}
                pageSizeOptions={[9]}
                showSizeChange={false}
                size='small' 
                current={pagination.pageNumber} 
                defaultPageSize={pagination.pageSize}
                total={total}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
              />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CampaignListings;
