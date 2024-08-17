import React, { ReactNode, MouseEvent } from 'react';

// Define the type for props
interface MenuButtonProps {
  children: ReactNode; // children prop can be any valid React node
  onClick?: (event: MouseEvent<HTMLDivElement>) => void; // Optional onClick prop
}

// Define the MenuButton component
export const MenuButton: React.FC<MenuButtonProps> = ({ children, onClick }) => {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden text-2xl uppercase leading-6 text-black"
      onClick={onClick} // Attach onClick handler
    >
      <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};
