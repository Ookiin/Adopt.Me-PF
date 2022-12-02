import { useState } from "react";
import stl from "../Metamask/Metamask.module.css";

export default function Metamask() {
    
    const [buttonText, setButtonText] = useState()
    const [account, setAccount] = useState(null)

    function connectWallet() {
        if(window.ethereum && window.ethereum.isMetaMask) {
            window.ethereum.request({method: "eth_requestAccounts"})
            .then(result => {
                setAccount(result[0])
            })
            .catch(error => {
                setButtonText(error.message)
            })
        } else {
            setButtonText("Necesitas tener metamask instalado")
        }
    }

    return (
        
        <button className={stl.botonmetamask} onClick={connectWallet}>{buttonText}{account}</button>
      
    )
    }