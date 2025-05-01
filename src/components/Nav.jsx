function Nav() {
return (
    <>
    <div className="flex items-center justify-between  pl-6 pr-10 py-[2px] bg-[] rounded-full">
           <a href="#"><img src="src/assets/adp.svg" alt="adp logo" className="w-[250px]" /> </a> 
        <nav>
            <ul className="flex justify-between text-[black]">
                <li className="px-4 hover:text-[]"><a href="">Why Us</a></li>
                <li className="px-4"><a href="">Mission</a></li>
                <li className="px-4"><a href="">Work</a></li>
                <li className="px-4"><a href="">Service</a></li>
                <li className="px-4"><a href="">Pages</a></li>
            </ul>
        </nav>

        <a href="" className="text-gray-300 bg-gray-900 px-8 py-2 rounded-xl">Let's Talk</a>
    </div>
    </>
)
}

export default Nav;