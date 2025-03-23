import React from 'react';
import { Account } from '../../Model/Account.model';
import TableCommon from '../../Common/Component/Table/Table';
import PagingCommon from '../../Common/Component/Paging/Paging';
import { fetchData } from '../../Hook/useFetch';

const column = [
  {
    title: 'UserName',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'FullName',
    dataIndex: 'fullName',
    key: 'fullName ',
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (img: string) => {
      return (
        <img
          width={40}
          height={40}
          src={`${process.env.REACT_APP_URL_API}${img}`}
          alt="icon"
        />
      );
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'ROLE',
    dataIndex: 'role',
    key: 'role',
  },
];

const AccountManager = () => {
  const [students, setStudent] = React.useState<Account[]>([]);
  const [pagination, setPagination] = React.useState({
    current: 1,
    pageSize: 10,
    total: 100,
  });
  const hanldeOnChange = () => {};
  React.useEffect(() => {
    fetchData(`${process.env.REACT_APP_URL_API}student/list-student`);
  }, []);

  const handlePageSizeChange = (newSize: number) => {
    console.log('Số dòng/trang mới:', newSize);
    setPagination((pre) => ({ ...pre, pageSize: newSize }));
  };

  const handlePageChange = (newSize: number) => {
    console.log('Số dòng/trang mới:', newSize);
    setPagination((pre) => ({ ...pre, current: newSize }));
  };
  React.useEffect(() => {
    const b: Account[] = [];
    for (let i = 0; i < 20; i++) {
      const a = new Account();
      a.FullName = 'Trung';
      a.Address = 'Hải Phòng';
      a.Role = 'Student';
      b.push(a);
    }
    setStudent(b);
  }, []);
  return (
    <div>
      <section>
        <PagingCommon
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={pagination.total}
          onChangePage={handlePageChange}
          onPageSizeChange={handlePageSizeChange} // Bắt sự kiện thay đổi size
        />
        <TableCommon dataSource={students} columns={column} pagination={true} />
      </section>
    </div>
  );
};

export default AccountManager;
