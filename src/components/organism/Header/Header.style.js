import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 146px;
  position: relative;
  z-index: 9;
`;
export const MainHeader = styled.div`
  width: 100%;
  height: 89px;
  background-color: #fff;
  position: fixed;
  border-bottom: 1px solid rgba(241, 241, 245, 0.6);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Search = styled.div`
  display: flex;
  width: 460px;
  height: 44px;
  margin-right: 300px;
  font-size: 30px;
`;
export const Menu = styled.ul`
  display: flex;
  font-size: 30px;
`;
export const Logo = styled.div`
  color: red;
  margin-right: 50px;
`;
export const MenuList = styled.li`
  margin-left: 50px;
`;

export const SubHeader = styled.div`
  position: fixed;
  top: 90px;
  background-color: #fff;
  width: 100%;
  height: 56px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 12%);
`;
