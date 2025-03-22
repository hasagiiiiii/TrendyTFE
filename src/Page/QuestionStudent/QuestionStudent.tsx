import React from 'react';
import getCookie from '../../Common/Function/Cookie';
import { Button, Card, Checkbox, CheckboxChangeEvent, Radio } from 'antd';
import { fetchData } from '../../Hook/useFetch';
import './index.css';
import ModalCommon from '../../Common/Component/Modal/Modal.component';
import { useNavigate } from 'react-router-dom';
const initialFormValue: QuestionItem[] = [
  {
    question_text: '',
    id: -1,
    answer: [
      {
        answer_text: '',
        id: 0,
      },
      {
        answer_text: '',
        id: 0,
      },
      {
        answer_text: '',
        id: 0,
      },
      {
        answer_text: '',
        id: 0,
      },
    ],
  },
];

export interface Payload {
  quiz_id: number;
  answers: { answer_id: number; question_id: number }[];
}
export interface QuestionItem {
  id: number;
  question_text: string;
  answer: { answer_text: string; id: number }[];
}

const QuestionStudent = () => {
  const id_quizze = getCookie('idQuizze');
  const [question, setQuestion] =
    React.useState<QuestionItem[]>(initialFormValue);
  const [answers, setAnswer] = React.useState<Payload>({
    quiz_id: id_quizze,
    answers: [],
  });
  React.useEffect(() => {
    hanmdleCallQuestion();
  }, []);
  const hanmdleCallQuestion = () => {
    fetchData(`${process.env.REACT_APP_URL_API}getQuestion`, 'POST', {
      id_quizze,
    }).then((data) => setQuestion(data.data));
  };
  const onChecked = (questionId: number, e: CheckboxChangeEvent) => {
    setAnswer((prev) => {
      const updatedAnswers = prev.answers.map((ans) =>
        ans.question_id === questionId
          ? { ...ans, answer_id: parseInt(e.target.value) }
          : ans
      );

      // Nếu chưa có câu hỏi trong danh sách, thêm mới vào
      const isQuestionAnswered = updatedAnswers.some(
        (ans) => ans.question_id === questionId
      );
      if (!isQuestionAnswered) {
        updatedAnswers.push({
          answer_id: parseInt(e.target.value),
          question_id: questionId,
        });
      }

      return { ...prev, answers: updatedAnswers };
    });
  };
  const hanldeSubmit = () => {
    fetchData(`${process.env.REACT_APP_URL_API}submit-quiz`, 'POST', {
      answers,
    }).then((data) => {
      if (data.result === 0) {
        ModalCommon.showSucce({
          title: <h1> Hoàn thành bài kiểm tra</h1>,
          content: <h1>Số điểm {data.data}</h1>,
          width: 480,
          afterClose: () => [window.history.back()],
        });
      }
    });
  };
  return (
    <div className="flex" style={{ gap: 20 }}>
      <div className="flex" style={{ gap: 10 }}>
        {question.map((item, index) => {
          return (
            <Card key={index} className="question">
              <h3>{item.question_text}</h3>
              <Radio.Group>
                {item.answer.map((as, index) => {
                  return (
                    <Radio
                      value={as.id}
                      onChange={(e) => onChecked(item.id, e)}
                      key={index}
                    >
                      {as.answer_text}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </Card>
          );
        })}
      </div>
      <Card style={{ width: '20%' }}>
        <h1>Time</h1>
        <Button onClick={() => hanldeSubmit()} className="btn">
          Nộp bài
        </Button>
      </Card>
    </div>
  );
};

export default QuestionStudent;
