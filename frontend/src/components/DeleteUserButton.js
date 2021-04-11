import react from "react";
import DeleteImg from './DeleteUser.png';

function DeleteUserButton(){


    return(
        <button className="DeleteUserButton">
            <img src = {DeleteImg} alt = "Delete"/>
        </button>
    )
}

export default DeleteUserButton;