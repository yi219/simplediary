import {useRef, useState} from 'react';

const DiaryItem = ({author, content, d_date, emotion, id, onRemove, onEdit}) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent, setLocalContent] = useState(content);
    const localContentRef = useRef();

    const handleRemove = () => {
        if(window.confirm(`delete record ${author}?`)){
            onRemove(id)
        }
    }

    const handleEdit = () => {
        if(localContent.length < 1){
            localContentRef.current.focus();
            return;
        }
        onEdit(id, localContent)
        toggleIsEdit();
    }

    const handleQuitEdit = () => {
        toggleIsEdit()
        setLocalContent(content)
    }

    return <div className="DiaryItem">
        <div className="title">
            {author}
        </div>
        <div className="info">
            <span>{emotion} :) </span>
            <span className="date">{new Date(d_date).toLocaleString()}</span>
        </div>
        <div className="content">
            {isEdit ? (
            <>
                <textarea 
                    ref = {localContentRef}
                    value = {localContent}
                    onChange = {(e) => setLocalContent(e.target.value)}
                 />
            </>
            ):(
            <>{content}</>
            )}
        </div>
        {isEdit ? 
        <>
        <button onClick={handleQuitEdit}>X</button>
        <button onClick={handleEdit}>O</button></>
        :<>        
        <button onClick={handleRemove}>delete</button>
        <button onClick={toggleIsEdit}>edit</button></>
        }
    </div>
}

export default DiaryItem;