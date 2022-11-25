import "./FloatingUI.css";
import { Link } from "react-router-dom";

export default function FloatingUI() {
    return (
        
        <div id="container-floating">

<Link to = "/adoptcat">
  <div class="nd4 nds"><img class="reminder" alt=""/>
    <p class="letter"></p>
  </div>
  </Link>

  
  <Link to = "/adoptdog">
  <div class="nd3 nds">
   <p class="letter"></p>
  </div>
  </Link>
  
  <Link to = "/tepuedeinteresar">
  <div class="nd1 nds">
    <p class="letter"></p>
  </div>
  </Link>


  <div id="floating-button">
    <p class="plus"></p>
  </div>
</div>

    )
}