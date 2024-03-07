import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
    return ( 
        <div>
            <hr className="border-1 border-black"></hr>
        <div className="flex flex-col items-center text-lg ">
            <div className="flex justify-center items-center gap-x-4 px-8 py-2">
                <p>A project by Manula Alahakoon</p>
                <a href="https://www.linkedin.com/in/manula-alahakoon-925843273/" target="_blank"><BsLinkedin/></a>
                <a href="https://github.com/ManulaAlahakoon" target="_blank"><VscGithub/></a>
            </div>
                <p>2024 Feb</p>
            </div>
        </div>
     );
}
 
export default Footer;