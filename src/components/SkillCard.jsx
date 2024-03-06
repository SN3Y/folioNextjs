import Image from "next/image";
import Link from "next/link";

export default function SkillCard({title, img, link, skills, description}) {
  return(
    <div className="grid hover:border items-center justify-center p-2 gap-3 rounded-md bg-sky-900">
        <h1 className="text-center font-bold">{title}</h1>
        <Link className="grid group w-64 h-fit overflow" target="_blank" href={link} >
            <img className="w-full border rounded-md hover:border-yellow-300 hover:border-2" src={img} alt="project-preview" />
        </Link>
        <figcaption className="text-center font-bold">{skills}</figcaption>
        <figcaption className="text-xs text-center w-64">{description}</figcaption>
    </div>
  )  
};
