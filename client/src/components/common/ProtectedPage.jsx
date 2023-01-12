import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModelOpen } from "../../redux/features/authModalSlice";

const ProtectedPage = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setAuthModelOpen(!user));
  }, [user, dispatch]);

  return user ? children : null;
};

export default ProtectedPage;
