import { useState } from "react";

function TalkForm(){

    const [formData,setFormData]=useState({
        name:"",
        emial:"",
        phone:"",
        purpose:"",
    });
    return(

        <>
            <div className="max-w-xl mx-auto w-full">
                <form action="" className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-zinc-400 font-medium" htmlFor="">Name:</label>
                        <input className="border border-zinc-800 bg-[#121212] px-4 py-2.5 rounded-xl text-white outline-none focus:border-zinc-500 placeholder-zinc-600 transition-colors duration-200" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name.."/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-zinc-400 font-medium" htmlFor="">Email:</label>
                        <input className="border border-zinc-800 bg-[#121212] px-4 py-2.5 rounded-xl text-white outline-none focus:border-zinc-500 placeholder-zinc-600 transition-colors duration-200" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email.."/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-zinc-400 font-medium" htmlFor="">Phone No:</label>
                        <input  className="border border-zinc-800 bg-[#121212] px-4 py-2.5 rounded-xl text-white outline-none focus:border-zinc-500 placeholder-zinc-600 transition-colors duration-200"type="number" typeof="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your Phone.."/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-zinc-400 font-medium" htmlFor="">Purpose:</label>
                        <textarea className="border border-zinc-800 bg-[#121212] px-4 py-2.5 rounded-xl text-white outline-none focus:border-zinc-500 placeholder-zinc-600 transition-colors duration-200" name="purpose" value={formData.purpose} onChange={handleChange} rows={6}></textarea>
                    </div>
                    <button className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full mt-2 hover:bg-zinc-200 transition cursor-pointer">Let's Talk</button>
            </form>
            </div>
        </>
    )

}

export default TalkForm;