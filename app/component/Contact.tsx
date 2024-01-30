import React, { Dispatch, SetStateAction, useRef } from "react";
import emailjs from "@emailjs/browser";
// import { FaInstagram } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";

interface ContactProps {
    setIsLinkActive: Dispatch<SetStateAction<boolean>>;
}

const Contact: React.FC<ContactProps> = ({ setIsLinkActive }) => {
    const form = useRef<HTMLFormElement>(null);
    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pk31aoc', 'template_wgzyvn9', form.current as HTMLFormElement, 'QK7CEwiy3Rl9RTNYm')
          .then(() => {
            (e.target as HTMLFormElement).reset();
          }, (error: any) => {
              console.log(error.text);
          });
    };

    return (
        <section className="px-32 py-20">
            <div className="font-teko text-[9rem] leading-none text-white uppercase font-semibold text-left">let&apos;s work</div>
            <div className="font-teko text-[9rem] leading-none text-white uppercase font-semibold text-center mb-20">together</div>
            <div className="flex justify-between">
                <div>
                    <p className="text-white uppercase">cell: +251 953 40 78 88</p>
                    <p className="text-white uppercase mb-6">email: dagmawinebeyu3@gmail.com</p>
                    <div className="flex gap-8 text-white">
                        <a href="" className="flex items-center text-sm uppercase gap-1"
                        onMouseEnter={() => setIsLinkActive(true)}
                        onMouseLeave={() => setIsLinkActive(false)}>
                            LinkedIn
                        </a>
                        <a href="" className="flex items-center text-sm uppercase gap-1"
                        onMouseEnter={() => setIsLinkActive(true)}
                        onMouseLeave={() => setIsLinkActive(false)}
                        >
                            X/Twitter
                        </a>
                        <a href="" className="flex items-center text-sm uppercase gap-1"
                        onMouseEnter={() => setIsLinkActive(true)}
                        onMouseLeave={() => setIsLinkActive(false)}
                        >
                            Instagram
                        </a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex justify-between mb-10">
                        <input name="user_name" type="text" placeholder="NAME" className="w-[47%] text-xl text-white bg-transparent py-4 px-5 border border-solid border-white rounded-[35px]"/>
                        <input name="user_email" type="email" placeholder="EMAIL" className="w-[47%] text-xl text-white bg-transparent py-4 px-5 border border-solid border-white rounded-[35px]"/>
                    </div>
                    <textarea name="message" rows={4} cols={65} required placeholder="MESSAGE" className="text-xl text-white bg-transparent py-4 px-5 resize-none border border-solid border-white rounded-[35px]"/>
                    <button className="block text-lg text-white mx-auto mt-6 uppercase border-none outline-none" 
                        onMouseEnter={() => setIsLinkActive(true)}
                        onMouseLeave={() => setIsLinkActive(false)}
                        onClick={() => form.current?.requestSubmit()}>
                        send <RiSendPlaneLine style={{ display: "inline", color: "white", fontSize: "1.25rem", marginTop: "-4px"}}/>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;