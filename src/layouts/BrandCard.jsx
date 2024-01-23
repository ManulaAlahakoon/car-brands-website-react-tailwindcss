const BrandCard = (props) => {
    return ( 
        <div className="">
            <div>
                <img className="size-40 object-cover" src={props.img} alt="img" />
            </div>
            <div>
                <h3>{props.title}</h3>
            </div>
        </div>
     );
}
 
export default BrandCard;