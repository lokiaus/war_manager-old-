import UIContainer from "../containers/UIContainer";

export default function Navbar() {
  return (
    <UIContainer>
      <span className="font-semibold flex justify-evenly gap-2">
        <h1 className="font-extrabold flex hover:transition-shadow">
          <a href="/">WAR MANAGER</a>
        </h1>
        <a href="/Recruit">RECRUIT</a>
        <a href="/Fight">FIGHT</a>
        <a href="/Profile">PROFILE</a>
      </span>
    </UIContainer>
  );
}

/* <nav className="bg-gray-800 rounded-lg shadow m-4">
      <div className="text-sm text-gray-400 w-full mx-auto max-w-screen-xl p-4">
        
      </div>
    </nav> */
