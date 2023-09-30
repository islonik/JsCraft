import address from '../assets/address.png';
import hours from '../assets/opening-hours.png';
import phone from '../assets/phone.webp';
import money from '../assets/money.webp';

function Home() {
    return (
        <home>
            <div id="home">
                <article>
                    <b>We are providing a discount of 30% on your Birthday!</b><br/><br/>
                    Book your party today! Just send us an email!
                </article>
                <article>
                    <img src={hours} /><br/>
                    <b>Opening hours</b><br/><br/>
                    Monday-Friday:<br/>2pm - 10pm<br/><br/>
                    Saturday:<br/>2pm - 11pm<br/><br/>
                    Sunday:<br/>2pm - 9pm
                </article>
                <article>
                    <img src={address} /><br/>
                    <b>Address</b><br/><br/>
                    7500 W North Ave<br/>
                    Elmwood Park<br/>
                    60707
                </article>
                <article>
                    <img src={phone} /><br/>
                    <b>Phone</b><br/><br/>
                    708-452-6000
                </article>
                <article>
                    <img src={money} /><br/>
                    <b>Price</b><br/><br/>
                    $
                </article>
            </div>
        </home>
    );
}

export default Home;