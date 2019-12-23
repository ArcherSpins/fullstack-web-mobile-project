import styled from 'styled-components';

export const NavbarContainer = styled.div`
  padding: 10px 100px;
  background-color: rgba(17, 17, 17, .8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px 0px black;
`;

export const LogoBlock = styled.div`
  max-width: 150px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const ListNavbar = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Li = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    transition: .4s;
    padding: 5px 10px;
    font-size: 14px;

    &:hover {
      color: #e0102f;
    }
  }
`;

export const UserBlock = styled.div`
  margin-left: 60px;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
