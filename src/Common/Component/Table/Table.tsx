import React from 'react';
import { Table } from 'antd';
import './index.css';
export interface ColumnProps<T> {
  title: string;
  dataIndex: string | number;
  key: string;
  colSpan?: number;
  width?: number;
  align?: 'left' | 'right' | 'center';
  render?: (value: any, record: T) => JSX.Element;
  sorter?: ((a: T, b: T) => number) | boolean;
  filter?: Function;
  onCellClick?: Function;
}

interface CommonTableProps<T> {
  columns: ColumnProps<T>[];
  dataSource: T[];
  rowKey?: string;
  height?: number;
  border?: boolean;
  colSpan?: number;
  pagination?: boolean;
  loading?: boolean;
  onRowSelection?: (selectedRows: T[]) => void;
}
const TableCommon = <T extends Record<string, any>>({
  columns,
  dataSource,
  rowKey = 'key',
  height,
  border = false,
  pagination = false,
  loading = false,
}: CommonTableProps<T>) => {
  const rowHeight = 55; // ✅ Giả sử mỗi hàng cao khoảng 48px
  const maxVisibleRows = height ? Math.floor(height / rowHeight) : 0;
  const shouldScroll = height && dataSource.length > maxVisibleRows;

  return (
    <Table
      loading={loading}
      scroll={shouldScroll ? { y: height } : undefined}
      style={{ minHeight: height }}
      dataSource={dataSource}
      rowKey={rowKey}
      className="custom-table-wrapper"
      pagination={pagination ? { position: ['topLeft'] } : false}
      bordered={border}
    >
      {columns.map((col) => (
        <Table.Column
          key={col.key}
          dataIndex={col.dataIndex}
          title={col.title}
          align={col.align}
          sorter={col.sorter}
          onCell={(record) => ({
            onClick: () => col.onCellClick?.(record, record[col.dataIndex]), // Bắt sự kiện click vào ô
            style: { cursor: col.onCellClick ? 'pointer' : 'default' },
          })}
          render={
            col.render
              ? (value, record) => col.render?.(value, record)
              : undefined
          }
        />
      ))}
    </Table>
  );
};

export default TableCommon;
