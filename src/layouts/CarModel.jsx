const CarModel = (props) => {
    return (
        <div className="grid grid-rows-1 md:grid-cols-2">
            <div className="text-center md:p-10 self-center text-4xl">
                <h3>{props.title}</h3>
            </div>
            <div className="grid">
                <img className="justify-self-center md:justify-self-end size-68 object-scale-down rounded-full" src={props.img} alt="img" />
            </div>

        </div>
    );
}
 
export default CarModel;