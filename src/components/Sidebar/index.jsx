import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const getStyles = ({ isActive }) => {
    const styles="rounded-tr-full rounded-br-full flex align-center gap-1 px-2 py-1"
    return isActive
      ? `text-white bg-blue-500 ${styles}`
      : `hover:text-white hover:bg-blue-500 ${styles}`;
  };
  return (
    <>
      <aside className="flex flex-col gap-3 w-36 border-r-4 border-gray-100 h-screen p-2">
        <NavLink className={getStyles} to={"/"}>
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </NavLink>
        <NavLink className={getStyles} to={"/archive"}>
          <span className="material-symbols-outlined">archive</span>
          <span>Archive</span>
        </NavLink>
        <NavLink className={getStyles} to={"/important"}>
            <span className="material-symbols-outlined">label_important</span>
            <span>Important</span>
        </NavLink>
        <NavLink className={getStyles} to={"/bin"}>
          <span className="material-symbols-outlined">delete</span>
          <span>Bin</span>
        </NavLink>
      </aside>
    </>
  );
};

