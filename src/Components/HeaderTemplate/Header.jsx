import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
import './Header.css'
import { BiSearch } from 'react-icons/bi'
import { TbMessage } from 'react-icons/tb'
import { AiOutlineUser } from 'react-icons/ai'
import { RiSettingsLine } from 'react-icons/ri'
import { IoAnalytics } from "react-icons/io5";
import {HiOutlineMoon ,HiOutlineLogout } from "react-icons/hi";
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'

const Header = () => {
    const{DarkTheme,setDarkTheme}=useContext(ThemeContext);
    function changeTheme(){
        setDarkTheme(!DarkTheme);
    }
    const logout=()=>{
        signOut(auth);
    }
  return (
    <header className={`${DarkTheme && "dark"}`}>
        <div className="search-bar">
            <input type="text" placeholder="search..."/>
            <BiSearch className="icon"/>
        </div>
        <div className="tools">
            <AiOutlineUser className="icon"/>
            <TbMessage className="icon"/>
            <IoAnalytics className="icon"/>

            <div className="divider"></div>

            <HiOutlineMoon className="icon" onClick={changeTheme}/>
            <RiSettingsLine className="icon"/>
            <HiOutlineLogout className="icon" onClick={logout}/>

            <div className="divider"></div>

            <div className="user">
                <img src="public/images/profile-img.jpg" alt="" className="profile-img" />
            </div>
        </div>
    </header>
  )
}

export default Header
