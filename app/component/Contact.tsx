import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { FaInstagram } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";
import AnimatedLink from "./navbar/AnimatedLink";

interface ContactProps {
    setIsLinkActive: Dispatch<SetStateAction<boolean>>;
}

const Contact: React.FC<ContactProps> = ({ setIsLinkActive }) => {
    const form = useRef<HTMLFormElement>(null);
    const [isSendingMsg, setIsSendingMsg] = useState<boolean>(false);
    const [isMsgSent, setIsMsgSent] = useState<boolean>(false);
    const [isMsgNotSent, setIsMsgNotSent] = useState<boolean>(false);
    const socials = [
        { title: 'LinkedIn', href: 'https://www.linkedin.com/' },
        { title: 'X/Twitter', href: 'https://www.twitter.com/' },
        { title: 'Instagram', href: 'https://www.instagram.com/' },
    ];

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSendingMsg(true)
    
        emailjs.sendForm('service_pk31aoc', 'template_wgzyvn9', form.current as HTMLFormElement, 'QK7CEwiy3Rl9RTNYm')
          .then(() => {
            (e.target as HTMLFormElement).reset();
            setIsSendingMsg(false);
            setIsMsgSent(true);
            setTimeout(() => {
                setIsMsgSent(false);
            }, 3000);
          }, (error: any) => {
              setIsMsgNotSent(true);
              console.log(error.text);
              setTimeout(() => {
                setIsMsgNotSent(false);
            }, 3000);
          });
        
          setIsMsgSent(false);
    };

    return (
        <section className="relative px-32 py-20">
            <div className="font-teko text-[9rem] leading-none text-white uppercase font-semibold text-left">let&apos;s work</div>
            <div className="font-teko text-[9rem] leading-none text-white uppercase font-semibold text-center mb-20">together</div>
            <div className="flex justify-between">
                <div>
                    <p className="text-white uppercase">cell: +251 953 40 78 88</p>
                    <p className="text-white uppercase mb-6">email: dagmawinebeyu3@gmail.com</p>
                    <div className="flex gap-8 text-white text-sm">
                        {socials.map((social, i) => {
                            return (
                                <div key={i}
                                 className="relative" 
                                 onMouseEnter={() => setIsLinkActive(true)}
                                 onMouseLeave={() => setIsLinkActive(false)}>
                                    <AnimatedLink title={social.title} href={social.href} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex justify-between mb-10">
                        <input name="user_name" type="text" placeholder="NAME" className="w-[47%] text-xl text-white bg-transparent py-4 px-5 border border-solid border-white rounded-[35px]"/>
                        <input name="user_email" type="email" placeholder="EMAIL" className="w-[47%] text-xl text-white bg-transparent py-4 px-5 border border-solid border-white rounded-[35px]"/>
                    </div>
                    <textarea name="message" rows={4} cols={65} required placeholder="MESSAGE" className="text-xl text-white bg-transparent py-4 px-5 resize-none border border-solid border-white rounded-[35px]"/>
                    <button className="block flex items-center gap-1.5 text-lg text-white mx-auto mt-6 uppercase border-none outline-none" 
                        onMouseEnter={() => setIsLinkActive(true)}
                        onMouseLeave={() => setIsLinkActive(false)}
                        onClick={() => form.current?.requestSubmit()}>
                        <AnimatedLink title="send" />
                        <RiSendPlaneLine style={{ display: "inline", color: "white", fontSize: "1.25rem", marginTop: "0"}}/>
                    </button>
                </form>
            </div>
           {(isSendingMsg || isMsgSent || isMsgNotSent) && 
            <div className="absolute bottom-12 left-12 bg-slate-200 p-3 rounded-md">
                <div className="text-slate-700 text-md font-semibold uppercase">
                    {isSendingMsg && "Sending message..."}
                    {isMsgSent && "Message sent!"}
                    {isMsgNotSent && "Message not sent!"} 
                </div>
            </div>}
        </section>
    )
}

export default Contact;