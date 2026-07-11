import { useState } from "react";
import emailjs from "@emailjs/browser"; // 1. Import EmailJS

function TalkForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "", 
        phone: "",
        purpose: "",
    });
    
    // Manage submission UI states
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // 2. Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("");

        // Replace these placeholder strings with your actual EmailJS dashboard credentials
        const SERVICE_ID = "service_gmfr3ki"; 
        const TEMPLATE_ID = "template_dbo7b7m";
        const PUBLIC_KEY = "JcqotnoTaaIjwxER-";

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                setLoading(false);
                setStatusMessage("Message sent successfully! I'll get back to you soon.");
                // Reset form fields back to empty
                setFormData({ name: "", email: "", phone: "", purpose: "" });
            })
            .catch((error) => {
                setLoading(false);
                setStatusMessage("Something went wrong. Please try again.");
                console.error("EmailJS Error:", error);
            });
    };

    return(
        <div className="max-w-xl mx-auto w-full">
            {/* Bind the submission handler here */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-zinc-400 font-medium" htmlFor="Name">Name:</label>
                    <input required className="border border-zinc-800 bg-[#121212] px-4 py-2.5 rounded-xl text-white outline-none focus:border-zinc-500 placeholder-zinc-600 transition-colors duration-200" id="Name" type="text" required name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name.."/>
                </div>
                
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-zinc-400 font-medium" htmlFor="Email">Email:</label>
                    <input required className="border border-zinc-800 bg-[#121212] px-4 py-2.5 rounded-xl text-white outline-none focus:border-zinc-500 placeholder-zinc-600 transition-colors duration-200" type="email" required name="email" value={formData.email} onChange={handleChange} id="Email" placeholder="Enter Your Email.."/>
                </div>
                
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-zinc-400 font-medium" htmlFor="Phone">Phone No:</label>
                    <input required className="border border-zinc-800 bg-[#121212] px-4 py-2.5 rounded-xl text-white outline-none focus:border-zinc-500 placeholder-zinc-600 transition-colors duration-200" pattern="[0-9]{10}" maxLength={10} title="Please enter a valid 10-digit phone number." id="Phone" required name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your Phone.."/>
                </div>
                
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-zinc-400 font-medium" htmlFor="Purpose">Purpose:</label>
                    <textarea required className="border border-zinc-800 bg-[#121212] px-4 py-2.5 rounded-xl text-white outline-none focus:border-zinc-500 placeholder-zinc-600 transition-colors duration-200" id="Purpose" name="purpose" value={formData.purpose} onChange={handleChange} rows={6} placeholder="Enter Your Purpose.."></textarea>
                </div>
                
                {/* Visual Status Feedback text message */}
                {statusMessage && (
                    <p className={`text-sm font-medium ${statusMessage.includes("successfully") ? "text-emerald-400" : "text-rose-400"}`}>
                        {statusMessage}
                    </p>
                )}

                {/* Disable the button while loading to prevent double submissions */}
                <button 
                    disabled={loading}
                    type="submit" 
                    className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full mt-2 hover:bg-zinc-200 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Sending..." : "Let's Talk"}
                </button>
            </form>
        </div>  
    )
}

export default TalkForm;