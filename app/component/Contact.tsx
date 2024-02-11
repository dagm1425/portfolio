"use client";

import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { FaInstagram } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";
import AnimatedLink from "./navbar/AnimatedLink";
import { motion, useInView } from "framer-motion";

interface ContactProps {
    setIsLinkActive: Dispatch<SetStateAction<boolean>>;
}

const Contact: React.FC<ContactProps> = ({ setIsLinkActive }) => {
    const form = useRef<HTMLFormElement>(null);
    const [isSendingMsg, setIsSendingMsg] = useState<boolean>(false);
    const [isMsgSent, setIsMsgSent] = useState<boolean>(false);
    const [isMsgNotSent, setIsMsgNotSent] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);
    const title = useRef<HTMLDivElement>(null);
    const isInView = useInView(title, { once: true });
    const socials = [
        { title: 'LinkedIn', href: 'https://www.linkedin.com/in/dagmawi-nebeyu-9898901a0/' },
        { title: 'X/Twitter', href: 'https://twitter.com/NebeyuDagmawi/' },
        { title: 'Instagram', href: 'https://www.instagram.com/dagmawinebeyu3/' },
    ];
    const titleVariants = {
        initial: {
            opacity: 0,
            rotateX: 90,
            translateY: "60vh",
            translateX: -20,
        },
        animate: {
            opacity: 1,
            rotateX: 0,
            translateY: 0,
            translateX: 0,
            transition: {
                opacity: { duration: 0.35 },
                duration: 0.65,
                ease: [.215,.61,.355,1],
                delay: 1.2, 
            }
        },
    };

    useEffect( () => {
        const resize = () => {
            setWidth(window.innerWidth)
          }
    
        window.addEventListener("resize", resize)
        resize();
    
        return () => {
          window.removeEventListener("resize", resize);
        }
    }, []);

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
        <section id="contact" className="relative">
            {/* <div className="font-teko text-[9rem] leading-none text-white uppercase font-semibold text-left">let&apos;s work</div> */}
            {/* <div className="font-teko text-[9rem] leading-none text-white uppercase font-semibold text-center mb-20">together</div> */}
            <div ref={title} className="px-4 sm:px-20 lg:px-32 perspective-[120px] perspective-origin-top overflow-hidden">
                <motion.div variants={titleVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                    <h1 className="font-teko text-6xl sm:text-9xl leading-none text-white uppercase font-semibold text-left">let&apos;s work</h1>
                </motion.div>
                <motion.div variants={titleVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                    <h1 className="font-teko text-6xl sm:text-9xl leading-none text-white uppercase font-semibold text-right lg:text-center mb-16 sm:mb-20">together</h1>
                </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-8 lg:gap-0 px-6 sm:px-20 lg:px-32">
                <div className="mb-4 sm:mb-0">
                    <p className="text-white uppercase">cell: +251 953 40 78 88</p>
                    <p className="text-white uppercase mb-3 sm:mb-6">email: dagmawinebeyu3@gmail.com</p>
                    <div className="flex gap-8 text-white text-sm">
                        {socials.map((social, i) => {
                            return (
                                <div key={i}
                                 className="relative border-b" 
                                 onMouseEnter={() => setIsLinkActive(true)}
                                 onMouseLeave={() => setIsLinkActive(false)}>
                                    <AnimatedLink title={social.title} href={social.href} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex w-full justify-between gap-4 sm:gap-8 mb-6 sm:mb-10">
                        <input name="user_name" type="text" placeholder="NAME" className="w-[47%] text-xl text-white bg-transparent py-2 px-4 sm:py-4 sm:px-5 border border-solid border-white rounded-[35px]"/>
                        <input name="user_email" type="email" placeholder="EMAIL" className="w-[47%] text-xl text-white bg-transparent py-2 px-4 sm:py-4 sm:px-5 border border-solid border-white rounded-[35px]"/>
                    </div>
                    <textarea name="message" rows={4} cols={width < 728 ? 35 : width < 1024 ? 45 : 65} required placeholder="MESSAGE" className="text-xl text-white bg-transparent py-2 px-4 sm:py-4 sm:px-5 resize-none border border-solid border-white rounded-[35px]"/>
                    <button className="block flex items-center gap-1.5 text-lg text-white mx-auto mt-4 sm:mt-6 uppercase border-none outline-none" 
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
            <p className="text-sm text-center text-white uppercase p-2 mt-20">2024 © Edition</p>
        </section>
    )
}

export default Contact;