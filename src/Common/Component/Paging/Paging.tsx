import React from 'react';
import { Pagination } from 'antd';

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
    <div className="paging-container">
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        showSizeChanger
        onChange={onChangePage}
        onShowSizeChange={(current, newSize) => {
          onPageSizeChange?.(newSize); // Bắt event khi thay đổi pageSize
        }}
        pageSizeOptions={['5', '10', '20', '50']}
        showTotal={(total) => `Tổng cộng ${total} mục`}
      />
    </div>
  );
};

export default PagingCommon;
