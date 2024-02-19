function NavBar() {
  return (
    <nav className="flex justify-between bg-[#F1F1F1] py-2">
      <div className="logo cursor-pointer">
        <h1 className="font-bold text-xl"> Tasks</h1>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all ">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all ">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
