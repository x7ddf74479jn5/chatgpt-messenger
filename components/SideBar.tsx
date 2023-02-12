import { NewChat } from "./NewChat";

export const SideBar = () => {
  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div></div>
        </div>
      </div>
    </div>
  );
};
