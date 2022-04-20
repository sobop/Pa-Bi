import { Link } from "react-router-dom";
import {
  MainHeader,
  Menu,
  Logo,
  MenuList,
  Search,
  SubHeader,
  Wrap,
} from "./Header.style";
import { ReactComponent as Pabi } from "./Pa-Bi.svg";
import { ReactComponent as Icon } from "./logo.svg";
import {
  BiUser,
  BiShoppingBag,
  BiPencil,
  BiHeart,
  BiCog,
} from "react-icons/bi";

export default function Header() {
  return (
    <Wrap>
      <MainHeader>
        <Menu>
          <Logo>
            <Icon />
            <Pabi />
          </Logo>
          <Search>
            <input
              className="bar"
              type={"text"}
              placeholder="동네이름, 물품명 등을 검색해보세요!"
            ></input>
          </Search>
          <MenuList>
            <BiUser />
          </MenuList>
          <MenuList>
            <BiShoppingBag size={"40px"} />
          </MenuList>
          <MenuList>
            <BiPencil />
          </MenuList>
          <MenuList>
            <BiHeart />
          </MenuList>
          <MenuList>
            <BiCog />
          </MenuList>
        </Menu>
      </MainHeader>
      <SubHeader>
        <Menu>
          <MenuList>
            <Link to="/login">로그인</Link>
          </MenuList>
          <MenuList>
            <Link to={"/login"}>로그인</Link>
          </MenuList>
        </Menu>
      </SubHeader>
    </Wrap>
  );
}
