import '../../App.css'
import { FaTrash } from "react-icons/fa";


const Listitem = ({text,key}) => {


    const checkColor = (target) => {
        target.classList.toggle("checked");
    }

    return(
        <div className='list-element'>
            <li className='list-item' id={key} onClick={(e) => { checkColor(e.target)}}>{text}
            </li>
            <FaTrash className='trashicon' />
        </div>
    );
}

export default Listitem;