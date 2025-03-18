import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const Users = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const {isError, user} = useSelector((state => state.auth));

  useEffect(() =>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() =>{
    if(isError){
      navigate("#home")
    }
    if(user && user.role !== "admin"){
      navigate("/login");
    }
  }, [isError,user ,navigate]);
}

export default Users;