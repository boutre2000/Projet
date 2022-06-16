import { FaUserInjured } from "react-icons/fa";

export  default function isAuth() {

    const userString = localStorage.getItem('userId');
    const userId = JSON.parse(userString);
    return userId
   
};