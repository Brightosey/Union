import "./Wishlist.scss";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import arrow from "../../assets/Icon/right-arrow.png";
import love from "../../assets/Icon/valentines-day.png";
import bouquet from "../../assets/Icon/bouquet.png";
import envelope from "../../assets/Icon/envelope-front.png";
import axios from "axios";
import debounce from "lodash.debounce";
import Modal from "../../Component/Modal/Modal";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function Wishlist() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [gif, setGif] = useState("");
  const [query, setQuery] = useState("");
  const [gifResults, setGifResults] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const fetchGifs = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
          searchTerm
        )}&api_key=${API_KEY}&limit=12`
      );
      setGifResults(response.data.data);
    } catch (error) {
      console.log("Error fetching GIFs:", error);
    }
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  const debouncedSearch = useCallback(debounce(fetchGifs, 500), []);

  useEffect(() => {
    if (query.trim()) {
      debouncedSearch(query);
    } else {
      setGifResults([]);
    }
  }, [query, debouncedSearch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim() || !gif.trim()) {
      setModalMessage("Please fill out all fields");
      setIsOpen(true);
      /* alert("Please fill out all fields"); */
      return;
    }

    const newWish = {
      name,
      message,
      gif_url: gif,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await axios.post(`${backendUrl}/api/wishes`, newWish);

      if (response.status === 201 || response.status === 200) {
        alert("Message submitted successfully!");
        setName("");
        setMessage("");
        setGif("");
        setQuery("");
        setGifResults([]);
        getWishes();
      } else {
        setModalMessage("Something went wrong: Please try again")
        setIsModalOpen(true);
       /*  alert("Something went wrong: Please try again"); */
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      setModalMessage("Failed to send wish. Please check your connection.")
      setIsModalOpen(true);
   /*    alert(
        "Failed to send wish: " +
          (error.response?.data?.message || error.message)
      ); */
    }
  };

  const getWishes = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/wishes`);
      setWishes(response.data);
    } catch (error) {
      alert("Error fetching wishes", error);
    }
  };

  useEffect(() => {
    getWishes();
  }, []);

  const handleLikes = async (id) => {
    const hasLiked = likedIds.includes(id);
    try {
      const response = await axios.patch(
        `${backendUrl}/api/wishes/${id}/like`,
        { liked: !hasLiked }
      );
      const updateLikes = response.data.likes;

      setWishes((prevWishes) =>
        prevWishes.map((wish) =>
          wish.id === id ? { ...wish, likes: updateLikes } : wish
        )
      );

      setLikedIds((prev) =>
        hasLiked ? prev.filter((likedId) => likedId !== id) : [...prev, id]
      );
    } catch (error) {
      setModalMessage("Error liking the wish", error);
      setIsOpen(true);
      /* alert("Error liking the wish", error); */
    }
  };

  return (
    <section className="wishlist">
      <section className="wishlist__header">
        <img
          src={love}
          alt="love-icon"
          className="wishlist__icon wishlist__icon--left"
        />
        <span className="wishlist__title">Well Wishes</span>
        <img
          src={bouquet}
          alt="bouquet-icon"
          className="wishlist__icon wishlist__icon--right"
        />
      </section>

      <section className="wishlist__content">
        <button className="wishlist__button" onClick={() => setIsOpen(true)}>
          <div className="wishlist__button-inner">
            <span className="wishlist__button-text">Send Wishes</span>
            <img
              src={arrow}
              alt="arrow-icon"
              className="wishlist__icon wishlist__icon--arrow"
            />
          </div>
        </button>

        {isOpen && (
          <section className="wishlist__form-panel wish-form-slide-in">
            <div className="wishlist__close" onClick={() => setIsOpen(false)}>
              <X className="wishlist__close-icon" />
            </div>
            <div className="wishlist__form-header">
              <h3 className="wishlist__form-title">Leave a Wish</h3>
              <img
                className="wishlist__form-icon"
                src={envelope}
                alt="envelope-icon"
              />
            </div>
            <div className="wishlist__form-container">
              <form className="wishlist__form" onSubmit={handleSubmit}>
                <input
                  className="wishlist__input"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <textarea
                  className="wishlist__textarea"
                  name="message"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <div className="wishlist__gif-search">
                  <input
                    type="text"
                    className="wishlist__input"
                    value={query}
                    placeholder="Search for a GIF"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>

                <div className="wishlist__gif-grid">
                  {gifResults.map((gifData) => (
                    <img
                      key={gifData.id}
                      src={gifData.images.fixed_height_small.url}
                      alt={gifData.title}
                      className={`wishlist__gif-thumb ${
                        gif === gifData.images.original.url ? "selected" : ""
                      }`}
                      onClick={() => setGif(gifData.images.original.url)}
                    />
                  ))}
                </div>

                <button className="wishlist__submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>

            <div className="wishlist__messages">
              <h3 className="wishlist__messages-title">
                Wishes ({wishes.length})
              </h3>

              {wishes.map((wish) => (
                <div className="wishlist__message" key={wish.id}>
                  <div className="wishlist__message-content">
                    <h4>{wish.name}</h4>
                    <p>{wish.message}</p>
                    {wish.gif_url && (
                      <img src={wish.gif_url} alt="gif-sticker" />
                    )}
                  </div>
                  <div
                    className="wishlist__likes"
                    onClick={() => handleLikes(wish.id)}
                  >
                    <p className="wishlist__like-count">
                      <svg
                        className="wishlist__like-icon"
                        viewBox="0 0 15 14"
                        fill={likedIds.includes(wish.id) ? "red" : "#0C1E1A"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.875 0C9.57 0 8.3175 0.617984 7.5 1.59455C6.6825 0.617984 5.43 0 4.125 0C1.815 0 0 1.84632 0 4.19619C0 7.08011 2.55 9.42997 6.4125 13.0005L7.5 14L8.5875 12.9929C12.45 9.42997 15 7.08011 15 4.19619C15 1.84632 13.185 0 10.875 0ZM7.575 11.8638L7.5 11.9401L7.425 11.8638C3.855 8.57548 1.5 6.40109 1.5 4.19619C1.5 2.6703 2.625 1.52589 4.125 1.52589C5.28 1.52589 6.405 2.2812 6.8025 3.32643H8.205C8.595 2.2812 9.72 1.52589 10.875 1.52589C12.375 1.52589 13.5 2.6703 13.5 4.19619C13.5 6.40109 11.145 8.57548 7.575 11.8638Z" />
                      </svg>{" "}
                    </p>
                    {wish.likes > 0 && (
                      <p className="wishlist__like-text">
                        {wish.likes}{" "}
                        {wish.likes === 1 && likedIds.includes(wish.id)
                          ? "Like"
                          : wish.likes > 1
                          ? "Likes"
                          : ""}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
      {isOpen && <div className="wishlist__overlay"></div>}
      <Modal
      isOpen={isModalOpen}
      message={modalMessage}
      onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default Wishlist;
