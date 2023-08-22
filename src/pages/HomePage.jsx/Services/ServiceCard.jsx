
const ServiceCard = ({service}) => {
    const {title, img, price} = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} className="rounded-xl" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">{title}</h2>
                <p className="text-orange-500 font-semibold">Price: ${price}</p>
                
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;