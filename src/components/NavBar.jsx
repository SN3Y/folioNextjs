import Link from "next/link";

export default function NavBar() {
    return(
        <nav className="flex w-screen h-[8vh] items-center text-white bg-slate-800 justify-around fixed top-0">
            <Link href={"/"} className="text-2xl font-bold hover:text-slate-500 duration-500">SN3YZ</Link>
            <div className="flex text-white gap-x-4">
                <Link href={"/about"} className="hover:text-white duration-300 text-purple-200" >About Me</Link>
                <Link href={"/skills"} className="hover:text-white duration-300 text-purple-200" >Skills</Link>
                <Link href={"/contact"} className="hover:text-white duration-300 text-purple-200" >Contact</Link>
            </div>
        </nav>
    )
};
