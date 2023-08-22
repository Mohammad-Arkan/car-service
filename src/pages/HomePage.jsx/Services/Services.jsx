import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div>
             <div className='w-1/2 mx-auto text-center space-y-4 py-20'>
                  <p className='text-orange-500 font-bold'>Service</p>
                  <h1 className="text-5xl font-bold">Our Service Area</h1>
                  <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.  </p>   
            </div>
            <div className="grid grid-cols-3">
                {
                   services.map(service => <ServiceCard 
                   key={service._id}
                   service = {service}
                   ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;