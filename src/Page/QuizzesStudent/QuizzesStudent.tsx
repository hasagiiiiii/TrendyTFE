import React from 'react';
import TableCommon from '../../Common/Component/Table/Table';
import { Button } from 'antd';

import { fetchData } from '../../Hook/useFetch';
import { Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import ModalCommon from '../../Common/Component/Modal/Modal.component';
import { QuizzesItem } from '../../PageAdmin/Quizzes/store/Quizzes.store.reducer';

const QuizzesStudent: React.FC<{
  idCourse: number;
  dispatch: Dispatch;
  navigate: NavigateFunction;
  onDestroy: Function;
}> = ({ idCourse, dispatch, navigate, onDestroy }) => {
  const [quizzesList, setQuizzesList] = React.useState<QuizzesItem[]>([]);
  React.useEffect(() => {
    hanldeGetQuizze();
  }, []);
  const hanldeGetQuizze = () => [
    fetchData(`${process.env.REACT_APP_URL_API}quizzes`, 'POST', {
      idCourse,
    }).then((data) =>
      // dispatch(QuizzesStoreReducer.actions.getAllQuizzes(data.data))
      setQuizzesList(data.data)
    ),
  ];
  const hanldeDoubleClick = (record: QuizzesItem, index: number) => {
    console.log(record);
    onDestroy();
    document.cookie = `idQuizze=${record.id};path=/`;
    navigate(`Quizzes`);
  };
  const columns = [
    // {
    //   title: 'STT',
    //   dataIndex: 'id',
    //   key: 'id',
    //   sorter: (a: { id: number }, b: { id: number }) => a.id - b.id, // ✅ Sắp xếp theo số
    // },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'created_at',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date: string) => {
        let da = new Date(date).toLocaleString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });
        return <p>{da}</p>;
      },
    },
  ];
  return (
    <TableCommon
      height={400}
      onDBClick={hanldeDoubleClick}
      dataSource={quizzesList}
      columns={columns}
    />
  );
};

export default QuizzesStudent;
