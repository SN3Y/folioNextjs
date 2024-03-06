import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

export default function Footer() {
    return(
        <nav className="flex w-screen h-[8vh] items-center text-white bg-slate-800 justify-evenly text-2xl fixed bottom-0">
        <div className="flex text-white gap-x-6">
            <Link target="_blank" href={"https://github.com/SN3Y?tab=repositories"}><FaGithub /></Link>
            <Link target="_blank" href={"https://www.frontendmentor.io/home/my-challenges?tab=completed"}><SiFrontendmentor/></Link>
        </div>
    </nav>
    )
};
