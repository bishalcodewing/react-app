import NavBar from "../../components/NavBar";
import CardInfo from "../../components/CardInfo";
import Video from '../../assets/images/video.png';

const CardData = [
    {
        title: 'Documentation',
        content: 'Comprehensive and well-organized documentation that provides users with clear instructions and valuable information.',
        link: 'Explore Documentation'
    },
    {
        title: 'Support',
        content: 'Empower your customers support team with this practical video tutorial, designed to enahcne their skills and knowledge.',
        link: 'Conatact Support Team'
    },
    {
        title: 'Video Tutorials',
        content: 'unloack your creative potnetial with this comprehensive video tutorial that guides you step-by-step through mastering a new skill.',
        link: 'Check Out Now'
    }
]

const Welcome = () => {
    return <>
        <NavBar />
        <div className="card welcome-body">
            <dv className="card-body">
                <div className="row">
                    <div className="col">
                        <h1 className="card-title welcome-title">Welcome to Pop and Convert Pro</h1>
                        <p className="card-text">We're glad you're here. This platform is designed to provide you with all the tools and resources you need to be a successful coach. Whether you're new to coaching or a seasoned pro, we're confident that you'll find everything you need here to help your athletes.</p>
                        <button type="button" className="btn btn-primary">Create New Notification</button>
                    </div>
                    <div className="col">
                        <img src={Video} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </dv>
        </div>
        <div className="row">
            {CardData.map(({ title, content, link }, index) => {
                return <>
                    <div className="col">
                        <CardInfo
                            title={title}
                            content={content}
                            link={link}
                        />
                    </div>
                </>
            })}
        </div>
    </>
}

export default Welcome;