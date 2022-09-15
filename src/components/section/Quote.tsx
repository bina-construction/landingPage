import React from "react";

import './quote.scss';
import infoJson from "../../data/data.json";

const Quote: React.FC = () => {

    return (

        <div id="quote">

            <h3 id="quote-sentence">{infoJson.quote.sentence}</h3>
            <h3 id="quote-author">-  {infoJson.quote.author}  -</h3>

        </div>

    )

}

export default Quote;