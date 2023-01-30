import {useRef, useState} from "react";
//id는 유일한 값, name은 중복 가능

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    })

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const authorRef = useRef();
    const contentRef = useRef();

    const handleSubmit = () => {
        if(state.author.length < 1){
            authorRef.current.focus();
            //alert("No title");
            return;
        }
        if(state.content.length < 1){
            contentRef.current.focus();
            //alert("No content");
            return;
        }
        alert("Saved!");
    }

    //하나의 state, 하나의 상태 변화 함수
    return <div className="DiaryEditor">
        <h2>Today</h2>
        <div>
            <input ref = {authorRef} name = "author" value = {state.author} onChange = {handleChangeState}/>
        </div>
        <div>
            <textarea ref = {contentRef} name = "content" value = {state.content} onChange = {handleChangeState}/>
        </div>
        <div>
            <select name = "emotion" value = {state.emotion} onChange = {handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>SAVE</button>
        </div>
    </div>;



    //하나의 state 생성
    /*return <div className="DiaryEditor">
        <h2>Today</h2>
        <div>
            <input value = {state.author} onChange = {(e) => {
                setState({
                    author: e.target.value,
                    content: state.content
                });
                }}/>
        </div>
        <div>
            <textarea value = {state.content} onChange = {(e) => {
                setState({
                    ...state,
                    //author: state.author,
                    content: e.target.value
                })
            }}/>
        </div>
    </div>;*/

    //각각 state 생성
    /*const [author, setAuthor] = useState("") //공백 문자열
    const [content, setContent] = useState("") 

    return <div className="DiaryEditor">
        <h2>Today</h2>
        <div>
            <input value = {author} onChange = {(e) => {
                console.log(e.target.value)
                setAuthor(e.target.value)
                }}/>
        </div>
        <div>
            <textarea value = {content} onChange = {(e) => {
                setContent(e.target.value)
            }}/>
        </div>
    </div>;
    */
}

export default DiaryEditor;