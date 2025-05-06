import React from 'react';
import { Pagination, Select } from 'antd';

interface PagingProps {
  current: number;
  pageSize: number;
  total: number;
  onChangePage: (page: number, pageSize: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
}

const PagingCommon: React.FC<PagingProps> = ({
  current,
  pageSize,
  total,
  onChangePage,
  onPageSizeChange,
}) => {
  return (
    <div className="paging-container flex">
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        showSizeChanger={false}
        onChange={(page) => {
          onChangePage(page, pageSize);
        }}
        showTotal={(total) => `Tổng cộng ${total} mục`}
      />
      <Select
        onChange={onPageSizeChange}
        options={[
          { value: 5, label: '5 / page' },
          { value: 10, label: '10 / page' },
          { value: 20, label: '20 / page' },
          { value: 50, label: '50 / page' },
        ]}
        value={pageSize}
        autoFocus={true}
      />
    </div>
  );
};

export default PagingCommon;
