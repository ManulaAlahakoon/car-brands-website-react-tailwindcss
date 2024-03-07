import { useState } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri";


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    
    const handleChange = ()=>{
        setMenu(!menu)
    }

    const closeMenu = () => {
        setMenu(false)
    }
    return ( 
        <div className="fixed w-full z-10">
            <div>
                <div className="flex flex-row justify-between p-5 lg:px-32 bg-gradient-to-r from-rose-100 to-teal-100">
                    <div className="flex flex-row items-center cursor-pointer gap-2">
                        <span >
                            <IoCarSportSharp className="size-10" />
                        </span>
                        <h1 className="text-[24px]">XtremeAuto</h1>
                    </div>
                    <nav className="hidden md:flex flex-row items-center gap-16">
                        <Link to="Brands" spy={true} smooth={true} duration={500} className="cursor-pointer first-letter:text-[20px]">Brands</Link>
                        <Link to="Models" spy={true} smooth={true} duration={500} className="cursor-pointer first-letter:text-[20px]">Models</Link>
                        <Link to="Wonder" spy={true} smooth={true} duration={500} className="cursor-pointer first-letter:text-[20px]">Wonder</Link>
                    </nav>
                    <div className="hidden md:flex">
                        <Button title="Grab" />
                    </div>

                    <div className="md:hidden flex items-center">
                        {menu ? (
                                <AiOutlineClose size='25' onClick={handleChange}/>

                        ): (
                                <RiMenu4Fill size='25' onClick={handleChange} />

                        )}
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0":"-translate-x-full"} md:hidden flex flex-col gap-8 bg-gradient-to-r from-rose-100 to-teal-100  text-black text-center text-[24px] absolute top-20 py-16 w-full h-screen transition duration-500 `}>
                    <Link to="Brands" spy={true} smooth={true} duration={500} className="cursor-pointer first-letter:text-[24px]" onClick={closeMenu}>Brands</Link>
                    <Link to="Models" spy={true} smooth={true} duration={500} className="cursor-pointer first-letter:text-[24px]" onClick={closeMenu}>Models</Link>
                    <Link to="Wonder" spy={true} smooth={true} duration={500} className="cursor-pointer first-letter:text-[24px]" onClick={closeMenu}>Wonder</Link>
                    <Button title="Grab" />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;

