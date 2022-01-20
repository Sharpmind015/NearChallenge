import {FC} from 'react';

interface Props {
  children: JSX.Element
}

const Container : FC<Props> = ({children}) => {
  return (
    <div className="mobile-container">
      {children}
    </div>
  )
} 

export default Container;