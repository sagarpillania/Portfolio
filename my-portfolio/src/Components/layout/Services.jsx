import Cards from "../ui/Cards";
import { servicesData } from "../../Data/portfolioData";

function Services(){

    return(
        <>
        <div>
            <div className="flex justify-center items-center flex-col gap-2 mt-2 text-white font-bold">
                <h1 className="text-3xl">Services</h1>
                <h4 className="text-xs">Designing clean scalable responsive websites</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  p-8">
                {servicesData.map((service, index) => (
                <Cards 
                    key={index}
                    title={service.title}
                    description={service.description}
                    tags={service.tags}
                />
                ))}
            </div>
        </div>
        </>
    )
}

export default Services;