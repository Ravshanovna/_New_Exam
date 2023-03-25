import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
export default function Info() {
    const params = useParams()
    const [Data , setData] = useState({})
    useEffect(() => {
        axios.get(`https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick/${params.id}`)
        .then((res)=>{
            setData({...res.data})
        })
    }, []);
  return (
    <div>
        {
            (Data.length > 0)?
            <>
                
            </>
            :
            <>loading...</>
        }
    </div>
  )
}
