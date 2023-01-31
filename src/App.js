import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "title1",
    content: "content1",
    emotion: 5,
    d_date: new Date().getTime() //현재 시간을 숫자로 변환하여 사용
  },
  {
    id: 2,
    author: "title2",
    content: "content2",
    emotion: 5,
    d_date: new Date().getTime() //현재 시간을 숫자로 변환하여 사용
  },
  {
    id: 3,
    author: "title3",
    content: "content3",
    emotion: 5,
    d_date: new Date().getTime() //현재 시간을 숫자로 변환하여 사용
  },
  {
    id: 4,
    author: "title4",
    content: "content4",
    emotion: 5,
    d_date: new Date().getTime() //현재 시간을 숫자로 변환하여 사용
  },

]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
