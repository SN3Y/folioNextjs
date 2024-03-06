export default function page() {
  return(
    <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-[90vw] mb-6 shadow-lg rounded-xl">
      <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-center">
                          <div className="relative">
                              <img src="profile2.jpg" className="border-2 align-middle top-[-50px] rounded-full shadow-xl max-w-32 h-32 w-32 absolute left-[-62px]"/>
                          </div>
                      </div>
                      <div className="w-full text-center mt-20">
                      </div>
                  </div>
                  <div className="text-center mt-2">
                      <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Sneyder Santos</h3>
                      <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                          Colombia
                      </div>
                  </div>
                  <div className="mt-6 py-6 border-t border-slate-200 text-center">
                      <div className="flex flex-wrap justify-center">
                          <div className="w-full px-4">
                              <p className="font-light leading-relaxed text-slate-600 mb-4">A developer who finds interest in solving and making easier the daily tasks, I'm immerse into Front End development beacuse the beauty I found in create visual Interfaces and the seriousness of the user experience (UX) <br />♦ Currently I'm coursing last semester of Systems Engineer <br />♦ In my free time I like to play the guitar</p>
                          </div>
                      </div>
                  </div>
      </div>
    </div>
  )
};
