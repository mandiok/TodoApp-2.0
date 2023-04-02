/* import styled from 'styled-components';

const Header = styled.h1` 
  font-size: 200%;  
  text-align: center;
`*/ 

const Header = ({title,newClass}) => {
    return (
      <div> 
          <h1 className={newClass}>{title}</h1>
      </div>
    );
  }

export default Header;