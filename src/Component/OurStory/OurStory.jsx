import "./OurStory.scss";
import couple2 from "../../assets/Images/couple2.jpg";
import couple3 from "../../assets/Images/couple3.jpg";
import couple4 from "../../assets/Images/couple4.jpg";
import couple5 from "../../assets/Images/couple5.jpg";

function OurStory() {
  return (
    <section className="our-story">
      <h1 className="our-story__title">Our Story</h1>

      <article className="our-story__item">
        <div className="our-story__date">
          <p>May 12, 2019</p>
        </div>
        <div className="our-story__content">
          <div className="our-story__image">
            <img src={couple2} alt="image" />
          </div>
          <p className="our-story__heading">When we first met</p>
          <p className="our-story__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
      </article>

      <article className="our-story__item">
        <div className="our-story__date">
          <p>June 21, 2019</p>
        </div>
        <div className="our-story__content">
          <div className="our-story__image">
            <img src={couple3} alt="image" />
          </div>
          <p className="our-story__heading">Our first date</p>
          <p className="our-story__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
      </article>

      <article className="our-story__item">
        <div className="our-story__date">
          <p>May 12, 2024</p>
        </div>
        <div className="our-story__content">
          <div className="our-story__image">
            <img src={couple4} alt="image" />
          </div>
          <p className="our-story__heading">Marriage Proposal</p>
          <p className="our-story__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
      </article>

      <article className="our-story__item">
        <div className="our-story__date">
          <p>June 21, 2024</p>
        </div>
        <div className="our-story__content">
          <div className="our-story__image">
            <img src={couple5} alt="image" />
          </div>
          <p className="our-story__heading">Our Engagement</p>
          <p className="our-story__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
      </article>
      <article className="our-story__next">
        {/* <div className="our-story__next-container"> */}
          <h2 className="our-story__next-heading">
            Celebrate this next milestone with us
          </h2>
      {/*   </div> */}
      </article>
    </section>
  );
}

export default OurStory;
