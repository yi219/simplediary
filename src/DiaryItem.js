const DiaryItem = ({author, content, d_date, emotion, id}) => {
    return <div className="DiaryItem">
        <div className="title">
            {author}
        </div>
        <div className="info">
            <span>{emotion} :) </span>
            <span className="date">{new Date(d_date).toLocaleString()}</span>
        </div>
        <div className="content">
            {content}
        </div>
    </div>
}

export default DiaryItem;