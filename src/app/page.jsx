import { FaCode, FaDownload } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io5";
import { SiMysql, SiPostgresql, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return(
    <div className="flex items-center w-[80vw] max-sm:w-[90vw] h-[84vh] md:h-[75vh] rounded-xl overflow-hidden duration-1000">
      <div className="flex max-sm:grid w-full max-sm:h-[100vh] h-full rounded-xl overflow-hidden">
        <div className="grid place-items-center h-full max-sm:h-[40vh] max-sm:items-end w-1/2 max-sm:w-full bg-slate-50 p-4">
          <div className="w-1/4 overflow-hidden max-sm:my-6 h-1/3 cursor-pointer hover:animate-pulse rounded-full shadow-sky-900">
            <Link href={"/about"}><FaCode className="h-full w-full text-slate-700"/></Link>
            </div>
          <div className='text-slate-900 h-full'>
            <h1 className='text-2xl text-center font-bold mb-2'>Sneyder Santos</h1>
            <p className='w-full text-center'>
              Systems Engineer student 💻 <br />
              passionate Developer ✨ <br />
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-slate-800 max-sm:w-full max-sm:h-[60vh]">
          <div className= "grid bg-slate-800 h-1/2 text-slate-200 max-sm:p-2 md:p-4 items-center justify-center overflow-hidden">
            <ul className="grid gap-y-2">
              <li className="flex font-bold gap-x-4 text-nowrap">
                Languages:
                <span className="font-light text-nowrap">Javascript, Typescript</span>
              </li>
              <li className="flex font-bold gap-x-4">
                Web Technologies:
                <span className="font-light flex gap-x-2 items-center cursor-pointer">
                  <Link target="_blank" href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}><FaHtml5/></Link>
                  <Link target="_blank" href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}><IoLogoCss3/></Link>
                  <Link target="_blank" href={"https://v2.tailwindcss.com/"}><SiTailwindcss/></Link>
                  <Link target="_blank" href={"https://getbootstrap.com/"}><FaBootstrap/></Link>
                </span>
              </li>
              <li className="flex font-bold gap-x-4">
                Version Control Systems:
                <span className="font-light flex gap-x-2 items-center">
                  <Link target="_blank" href={"https://github.com/"}><IoLogoGithub/></Link>
                  </span>
              </li>
              <li className="flex font-bold gap-x-4 items-center">
                Frameworks:
                <span className="font-light flex gap-x-2 items-center">
                  <Link target="_blank" href="https://es.react.dev/"><FaReact/></Link>
                  <Link target="_blank" href={"https://nextjs.org/"}><TbBrandNextjs/></Link>
                  <Link target="_blank" href={"https://nodejs.org/en"}><TbBrandNodejs/></Link>
                </span>
              </li>
              <li className="flex font-bold gap-x-4 items-center">
                IDE:
                <span className="font-light flex gap-x-2 items-center">
                  <Link target="_blank" href={"https://code.visualstudio.com/"}><SiVisualstudiocode/></Link>
                </span>
              </li>
              <li className="flex font-bold gap-x-4 items-center">
                Databases:
                <span className="font-light flex gap-x-2 items-center">
                  <Link className="font-extrabold text-2xl flex items-center" target="_blank" href={"https://www.mysql.com/"}><SiMysql/></Link>
                  <Link target="_blank" href={"https://www.postgresql.org/"}><SiPostgresql/></Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-500 h-1/2 pt-6">
              <div className="flex h-full w-full max-sm:items-start justify-center items-center">
                <div className="grid justify-center place-items-center text-center">
                  <h1 className="text-2xl font-bold">Download CV Resume</h1>
                  <Link target="_blank" className="flex hover:text-slate-600 w-fit text-4xl justify-center" href={`resume.pdf`} download><FaDownload/></Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
