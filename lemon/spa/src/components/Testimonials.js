// Testimonials (testimonials, including star ratings, customer images and customer details)
import React, {useState, useEffect} from "react";

import Testimonial from "./Testimonial";

function Testimonials() {

    const [testimonials, setTestimonials] = useState([]);

    const fetchData = () => {
        fetch(process.env.REACT_APP_DB + "/testimonials")
          .then((response) => response.json())
          .then((data) => setTestimonials(data))
          .catch((error) => alert(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul>
        {
            testimonials.map((testimonial) => (
                <li key={testimonial.id}>
                    <Testimonial
                        pic={testimonial.pic}
                        name={testimonial.name}
                        text={testimonial.text}/>
                </li>
            ))
        }
        </ul>
    );
}

export default Testimonials;