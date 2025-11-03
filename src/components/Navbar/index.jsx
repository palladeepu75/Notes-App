


const logo="https://m.media-amazon.com/images/I/31fP89FrBiL.png"

export default function Navbar(){
    return(
        <header className="flex gap-3 border-b-2 border-gray-200 ">
            <div className="w-12 h-12">
                <img className="w-full h-full" src={logo}  alt="Notes Image" />
            </div>
            <h1 className="text-blue-600 text-4xl font-bold">NoteIt</h1>
        </header>
    )
}