const Button = (props) => {
    return (
        <div>
            <button className="px-6 py-1 text-[18px] text-white font-medium rounded-full border-2 border-black  bg-gradient-to-r from-green-400 to-blue-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white"  >
                {props.title}
            </button>
        </div>
      );
}
 
export default Button;