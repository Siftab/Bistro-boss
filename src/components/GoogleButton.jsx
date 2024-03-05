import { useContext } from 'react';
import {FaGoogle} from 'react-icons/fa'
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { AxiosSecure } from '../Hooks/useAxios';
import { useNavigate } from 'react-router-dom';

const GoogleButton = () => {
    const{signInWithGoogle}=useContext(AuthContext);
    const AxiosPublic=useAxiosPublic()
    const navigate=useNavigate()

const handlesubmit=()=>{
    signInWithGoogle()
    .then(res=>{console.log(res)
        AxiosPublic.post('/user',{userName:res?.user?.displayName,userEmail:res.user?.email})
                .then(res=>{console.log(res.data)
                                    navigate('/')})                })
    .catch(err=>console.log(err))

}

    return (
        <div className="w-fulls flex justify-center">
            <button className='flex items-center gap-4 btn mb-4 btn-outline' onClick={handlesubmit}><FaGoogle></FaGoogle> Google</button>
        </div>
    );
};

export default GoogleButton