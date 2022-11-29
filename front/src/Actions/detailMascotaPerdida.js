import {GET_DETAIL_MASCOTA_PERDIDA} from '.';
import axios from 'axios';



const getDetailMascotaPerdida =(id) => {   
    
    return async function (dispatch) {
        try {            
            let result = await axios.get(`http://localhost:3001/animalesPerdidos/${id}`); 
            dispatch({ type: GET_DETAIL_MASCOTA_PERDIDA, payload: result.data })                                                                                                      
            console.log(result.data);            
        } catch (error) {
            return alert (error)            
        }        
    }
    
}

export default getDetailMascotaPerdida;