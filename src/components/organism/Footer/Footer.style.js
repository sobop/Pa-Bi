import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 146px;
  position: relative;
`;
export const MainFooter = styled.div`
  width: 100%;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid rgba(241, 241, 245, 0.6);
`;
export const Text = styled.div`
  height: 100px;
  margin-bottom: 30px;
  margin-top: 30px;
`;
export const Menu = styled.ul`
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
`;
export const MenuList = styled.li`
  margin: 30px 0 30px 30px;
  &: first-child {
    margin-left: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
`;
export const SubFooter = styled.div`
  width: 100%;
  text-align: center;
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
`;
