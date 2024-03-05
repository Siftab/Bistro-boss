import axios from 'axios';
import React from 'react';

const useAxiosPublic = () => {
    const AxiosPublic= axios.create({
        baseURL:'http://localhost:5000'
    })

    return AxiosPublic
};

export default useAxiosPublic;