// Testimonial renders a single testimonial.
import '../assets/css/Testimonial.css';

const Testimonial = ({ pic, name, text}) => {
    return (
        <div className="testimonial">
            <img className="testimonial-pic" src={pic} alt={"Testimonial from " + name}/>
            <span className="testimonial-name">{name}</span>
            <span className="testimonial-description">{text}</span>
        </div>
    );
}

export default Testimonial;