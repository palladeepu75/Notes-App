import Navbar from "../../components/Navbar"
import { SideBar } from "../../components/Sidebar"
import { NotesCard } from "../../components/NotesCard"
import { useNotes } from "../../context/notes-context"
export const Important=()=>{
 const {important} =useNotes()
return(
  <>
  <Navbar/>
  <main className="flex gap-3">
    <SideBar/>
    <div>
         <div className="flex flex-wrap gap-6 w-screen mt-7">
                {important?.length > 0 &&
                  important.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  ))}
              </div>
            </div>
  </main>
  </>
)}