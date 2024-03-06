import projects from '../data/projects'
import SkillCard from "@/components/SkillCard";

export default function page() {
    return(
      <div className="grid duration-1000 w-[80vw] max-sm:w-[90vw] h-[80vh] md:h-[75vh] rounded-xl overflow-hidden relative">
        <div className="grid items-start max-sm:h-[78vh] rounded-xl overflow-y-scroll no-scrollbar gap-y-2 bg-slate-800 justify-center p-4">
          <div className='grid justify-center text-center'>
          <h1 className='font-bold text-2xl mb-4'>Technical skills</h1>
          <div className='justify-center text-start items-center flex w-full gap-x-2'>
            <ul className='grid px-4'>
              
              <li>» Responsive Design</li>
              <li>» SCRUM knowledge</li>
              <li>» Software Quality Assurance (SQA)</li>
              <li>» Scalable Code</li>
              <li>» Version Control with GitHub</li>
            </ul>
            <ul className='grid px-4'>
              <li>» MVC</li>
              <li>» JSON </li>
              <li>» APIs Creation & Consume</li>
              <li>» CRUD Apps development</li>
              <li>» Databases Integration</li>
              
            </ul>
            </div>
          <h1 className="text-center text-2xl my-4 font-bold">Some projects preview</h1>

          </div>
          <div className="flex h-full flex-wrap justify-center w-fit gap-2">
            {
              projects.map(project => {
                return(
                  <SkillCard key={project.id} title={project.title} link={project.link} img={project.img} skills={project.skills} description={project.description}/>
                )
              })
            }
          </div>
      </div>
    </div>
    )
};
