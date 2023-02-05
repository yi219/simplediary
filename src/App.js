import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import {useRef, useState} from "react";

/*const dummyList = [
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
]*/

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author, content, emotion) => {
    const d_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      d_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data])    
  }

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? {...it, content: newContent} : it
      )
    );
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data}/>
    </div>
  );
}

export default App;
