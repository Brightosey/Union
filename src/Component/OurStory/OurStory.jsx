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
        <div className="our-story__content">
          <p className="our-story__date">May 12, 2019</p>
          <p className="our-story__heading">When we first met</p>
          <p className="our-story__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt, justo at ullamcorper gravida, elit lorem gravida magna, sit amet accumsan lorem mi vel ipsum. Aenean porta nunc vitae justo fringilla, at dignissim magna hendrerit. Suspendisse potenti. Praesent ac sem in lectus volutpat convallis. Duis porttitor tellus nec tortor viverra, nec mattis arcu viverra. In at orci eu lacus pharetra luctus. Integer volutpat nisl ne

          </p>
        </div>
        <div className="our-story__figure">
          <div className="our-story__image">
            <img src={couple2} alt="image" />
          </div>
        </div>
      </article>

      <article className="our-story__item">
        <div className="our-story__content">
          <p className="our-story__date">June 21, 2019</p>
          <p className="our-story__heading">Our first date</p>
          <p className="our-story__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt, justo at ullamcorper gravida, elit lorem gravida magna, sit amet accumsan lorem mi vel ipsum. Aenean porta nunc vitae justo fringilla, at dignissim magna hendrerit. Suspendisse potenti. Praesent ac sem in lectus volutpat convallis. Duis porttitor tellus nec tortor viverra, nec mattis arcu viverra. In at orci eu lacus pharetra luctus. Integer volutpat nisl ne

          </p>
        </div>
        <div className="our-story__figure">
          <div className="our-story__image">
            <img src={couple3} alt="image" />
          </div>
        </div>
      </article>

      <article className="our-story__item">
        <div className="our-story__content">
          <p className="our-story__date">May 12, 2024</p>
          <p className="our-story__heading">Marriage Proposal</p>
          <p className="our-story__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt, justo at ullamcorper gravida, elit lorem gravida magna, sit amet accumsan lorem mi vel ipsum. Aenean porta nunc vitae justo fringilla, at dignissim magna hendrerit. Suspendisse potenti. Praesent ac sem in lectus volutpat convallis. Duis porttitor tellus nec tortor viverra, nec mattis arcu viverra. In at orci eu lacus pharetra luctus. Integer volutpat nisl ne

          </p>
        </div>
        <div className="our-story__figure">
          <div className="our-story__image">
            <img src={couple4} alt="image" />
          </div>
        </div>
      </article>

      <article className="our-story__item">
        <div className="our-story__content">
          <p className="our-story__date">June 21, 2024</p>
          <p className="our-story__heading">Our Engagement</p>
          <p className="our-story__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt, justo at ullamcorper gravida, elit lorem gravida magna, sit amet accumsan lorem mi vel ipsum. Aenean porta nunc vitae justo fringilla, at dignissim magna hendrerit. Suspendisse potenti. Praesent ac sem in lectus volutpat convallis. Duis porttitor tellus nec tortor viverra, nec mattis arcu viverra. In at orci eu lacus pharetra luctus. Integer volutpat nisl ne

          </p>
        </div>
        <div className="our-story__figure">
          <div className="our-story__image">
            <img src={couple5} alt="image" />
          </div>
        </div>
      </article>
      <article className="our-story__next">
          <h2 className="our-story__next-heading">
            Celebrate this next milestone with us
          </h2>
      </article>
    </section>
  );
}

export default OurStory;
