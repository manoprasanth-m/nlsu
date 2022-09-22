import React from 'react';
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-title">SPOOKY TALES</h3>
            
        </div>

    {props.allconfess.length === 0 && <p className="widget-message">Please Hold on   <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_dkz94xcg.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;"  loop controls autoplay></lottie-player> </p> }

        {props.allconfess.map((items, index) =>{
            return (
                <Option 
                key={items._id} 
                optionText={items.confess}
                time={items.createdAt}
                count={index + 1}
                deleteConfess={props.deleteConfess}
                />
            )
        })
        }
    </div>
)

export default Options
