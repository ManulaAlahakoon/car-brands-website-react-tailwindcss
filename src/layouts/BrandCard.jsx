const BrandCard = (props) => {
    return ( 
        <div className="">
            <div className="grid">
                <img className="place-self-center size-40 object-cover" src={props.img} alt="img" />
            </div>
            <div className="text-center">
                <h3>{props.title}</h3>
            </div>
        </div>
     );
}
 
export default BrandCard;