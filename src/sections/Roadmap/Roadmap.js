import React, { useContext } from 'react'
import { UserContext } from '../../App';
import './Roadmap.css'

const timelineData = [
    {
        stage: 'Stage 1',
        items: [
            'Bakso Token Launch',
            'Bakso Dapp Released',
            'Referrals Smart Contract',
            'Strategic Partnerships',
            'Soup Kitchen Launch',
        ],
       
    },
    {
        stage: 'Stage 2',
        items: [
            'No Loss Lottery',
            'Launch Pad',
            'Ambassador Program ',   
        ],
       
    },
    {
        stage: 'Stage 3',
        items: [
            'Major Exchange Listing',
            'Airdrop Event',
            'Staking',
           
        ],
       
    },
    
]

const TimelineItem = ({ data, idx, isDark }) => (
    
    <div className={`timeline-item itemNo${idx+1} ${isDark?'dark':''}`}>
        <div className={`timeline-item-content ${isDark?'dark':''}`}>
            <h3>
                {data.stage}
         </h3>
           
            <ul>
                {data.items.map((item,index) => (
                    <li key={index}>{item} </li>
                ))}
            </ul>
            {/* <span className="circle"><img src={logoImg} alt="logoImg" className='img-fluid' /></span> */}
        </div>
    </div>
);

const Timeline = () => {
    const { isDark } = useContext(UserContext);
    return (
        <section className='timeline' id='roadmap'>
            <div className="container">
                <div className="row">
                <div className={`col-lg-12 roadmapTitle ${isDark?'dark':''}`}>
                        <h3>
                         Roadmap
                         </h3>
                    </div>
                    {
                        timelineData.length > 0 && (
                            <div className={`timeline-container  ${isDark?'dark':''}`}>
                                {timelineData.map((data, idx) => (
                                    <TimelineItem data={data} key={idx} idx={idx} isDark={isDark} />
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
    


export default Timeline;
