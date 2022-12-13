import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import createLike from "../../Actions/createLike"
import "./Likes.css";

const LikeButton = () => {
  const [input, setInput] = useState(14);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch()

  const handleClick = () => {
    if (isClicked) {
      setInput(input - 1);
    } else {
      setInput(input + 1);
    }
    setIsClicked(!isClicked);
    dispatch(createLike(input))
  };

  

  return (
    <div className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <div className="likes-counter">{input}</div>
    </div>
  );
};

export default LikeButton;