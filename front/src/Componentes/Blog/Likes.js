// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import createLike from "../../Actions/createLike"
// import "./Likes.css";
// import getLikes from "../../Actions/getLikes"

// const LikeButton = () => {

//   const lik = useSelector((state) => state.likes)
//   const dispatch = useDispatch()
//   console.log("likes", lik)

//   useEffect(() => {
//     dispatch(getLikes())
//   }, [dispatch])

//   const [input, setInput] = useState(0);
//   const [lala, setLala] = useState({
//     likes: ""
//   })
//   console.log("input", input)

//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     if (isClicked) {
//       setLala(input - 1);
//     } else {
//       setInput(input + 1);
//     }
//     setIsClicked(!isClicked);
//   };

  

//   return (
//     <div className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
//       <div className="likes-counter">{input}</div>
//     </div>
//   );
// };

// export default LikeButton;