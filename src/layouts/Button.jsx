const Button = (props) => {
    return (
        <div>
            <button className="px-6 py-1 text-[18px] text-white font-medium rounded-full border-2 border-black  bg-black  hover:bg-white hover:text-black"  >
                {props.title}
            </button>
        </div>
      );
}
 
export default Button;