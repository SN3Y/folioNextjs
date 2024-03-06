import EmailTemplate from "@/components/EmailTemplate";

export default function page() {
    return(
        <div className="flex duration-1000 items-center w-[80vw] max-sm:w-[90vw] h-[80vh] md:h-[75vh] border-white rounded-xl  max-md:overflow-hidden">
        <div className="flex max-sm:grid w-full max-sm:h-[100vh] h-full rounded-xl bg-slate-500 items-center justify-center">
          <div className="p-4">
            <EmailTemplate/>
          </div>
        </div>
      </div>
    )
};
