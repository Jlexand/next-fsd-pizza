import React from 'react';
import {Header} from "../Header";


type WrapperProps = {
    children?: React.ReactNode;
};
const MainLayout: React.FC<WrapperProps> = ({children}) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          { children }
      </div>
    </div>
  );
};

export default MainLayout;
