// Specials (the component that loops over the specials that come from a data source)
import React, {useState, useEffect} from "react";

import Special from "./Special";

function Specials() {

    const [specials, setSpecials] = useState([]);

    const fetchData = () => {
        fetch(process.env.REACT_APP_DB + "/specials")
          .then((response) => response.json())
          .then((data) => setSpecials(data))
          .catch((error) => alert(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul>
            {
                specials.map((special) => (
                    <li key={special.id}>
                        <Special
                            pic={special.pic}
                            dish={special.dish}
                            oldPrice={special.oldPrice}
                            newPrice={special.newPrice}
                            desc={special.desc}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default Specials;