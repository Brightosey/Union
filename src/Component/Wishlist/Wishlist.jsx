import "./WishList.scss";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import arrow from "../../assets/Icon/right-arrow.png";
import love from "../../assets/Icon/valentines-day.png";
import bouquet from "../../assets/Icon/bouquet.png";
import envelope from "../../assets/Icon/envelope-front.png";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Wishlist() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [gif, setGif] = useState("");
  const [wishes, setWishes] = useState([]);
  const [likes, setLikes] = useState(wish.likes || 0);
  const [liked, setLiked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim() || !gif.trim()) {
      alert("Please fill out all fields");
      return;
    }

    const newWish = {
      name,
      message,
      gif,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await axios.post(`${backendUrl}/api/wishes`, newWish);

      if (response.status === 201 || response.status === 200) {
        alert("Message submitted successfully!");
        setName("");
        setMessage("");
        setGif("");
      } else {
        alert("Something went wrong: Please try again");
      }
    } catch (error) {
      alert("Failed to send wish: Please check your connection");
    }
  };

  const getWishes = async () => {
    try {
      const response = await axios.get(`$(backendUrl)/api/wishes`);
      setWishes(response.data);
    } catch (error) {
      alert("Error fetching wishes", error);
    }
  };

  useEffect(() => {
    getWishes();
  }, []);

  const handleLikes = async (id) => {
    try {
      setWishes((prevWishes) => {
        prevWishes.map((wish) =>
          wish.id === id ? { ...wish, likes: wish.likes + 1 } : wish
        );
      });
      await axios.patch(`${backendUrl}/api/wishes/${id}/like`);
    } catch (error) {
      alert("Error liking the wish", error);
    }
  };

  const handleLikeButton = () => {
    setLiked((prevLiked) => {
        setLikes((prevLikes) => prevLiked ? prevLikes - 1 : prevLikes + 1)
        return !prevLiked;
    })
  }

  return (
    <section>
      <section>
        <h2>
          <img src={love} alt="love-icon" />
          Well Wishes <img src={bouquet} alt="bouquet-icon" />
        </h2>
      </section>
      <section>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <X />
          ) : (
            <div>
              <img src={envelope} alt="envelope-icon" />
              <h2>Send Wishes</h2>
              <img src={arrow} alt="right-arrow-icon" />
            </div>
          )}
        </button>
        {isOpen && (
          <section>
            <h3>
              Leave a Wish <img src={envelope} alt="envelope-icon" />
            </h3>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <input
                  type="url"
                  name="gif"
                  value={gif}
                  placeholder="Place a Gif"
                  onChange={(e) => setGif(e.target.value)}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div>
              <h3>Wishes ({wishes.length})</h3>
              {wishes.map((wish) => (
                <div key={wish.id}>
                  <div>
                    <h4>{wish.name}</h4>
                    <p>{wish.message}</p>
                    {wish.gif_url && (
                      <img src={wish.gif_url} alt="gif-stickers" />
                    )}
                  </div>
                  <div>
                    <p onClick={handleLikeButton}>
                      <svg
                        width="15"
                        height="10"
                        viewBox="0 0 15 14"
                        fill=""
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.875 0C9.57 0 8.3175 0.617984 7.5 1.59455C6.6825 0.617984 5.43 0 4.125 0C1.815 0 0 1.84632 0 4.19619C0 7.08011 2.55 9.42997 6.4125 13.0005L7.5 14L8.5875 12.9929C12.45 9.42997 15 7.08011 15 4.19619C15 1.84632 13.185 0 10.875 0ZM7.575 11.8638L7.5 11.9401L7.425 11.8638C3.855 8.57548 1.5 6.40109 1.5 4.19619C1.5 2.6703 2.625 1.52589 4.125 1.52589C5.28 1.52589 6.405 2.2812 6.8025 3.32643H8.205C8.595 2.2812 9.72 1.52589 10.875 1.52589C12.375 1.52589 13.5 2.6703 13.5 4.19619C13.5 6.40109 11.145 8.57548 7.575 11.8638Z"
                          fill="#0C1E1A"
                        />
                      </svg>{" "}
                      {wish.likes} Likes
                    </p>
                    <p>likes:{wish.likes}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
    </section>
  );
}

export default Wishlist;
