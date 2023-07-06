const CardInfo = (props) => {
    const { title, content, link } = props;
    return <>
        <div className="card cardinfo">
            <div className="card-body cardinfo-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <div className="cardinfo-link">
                    <a href="#" className="card-link">{link}</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <line x1="2.5" y1="12" x2="22" y2="12" stroke="#2F65D5" />
                        <path d="M18.25 8.5C18.25 11 22.25 12.25 22.25 12.25C22.25 12.25 18.25 13.5 18.25 16" stroke="#2F65D5" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </>
}

export default CardInfo;