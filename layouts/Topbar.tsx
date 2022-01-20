import {FC} from 'react';
import { ReactComponent as ArrowSvg } from "../public/arrow.svg";


const Topbar : FC = () => {
  return (
    <header className="flex justify-between items-center bg-gray-700">
      <ArrowSvg />
    </header>
  )
} 

export default Topbar;