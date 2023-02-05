import DiaryItem from "./DiaryItem";

const DiaryList = ({onRemove, onEdit, diaryList}) => {
    return <div className="DiaryList">
        <h2>{diaryList.length} Records.</h2>
        <div>
            {diaryList.map((it) => (
                <DiaryItem key = {it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
            ))
            }
        </div>
    </div>
}

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;