import { Link } from "react-router-dom";
import {
  MainHeader,
  Menu,
  Logo,
  Name,
  IconList,
  MenuList,
  SubHeader,
  Wrap,
  Category,
  Search,
} from "./Header.style";
import { ReactComponent as Pabi } from "./Pa-Bi.svg";
import { ReactComponent as Icon } from "./logo.svg";
import {
  BiUser,
  BiShoppingBag,
  BiPencil,
  BiHeart,
  BiCog,
  BiMenu,
  BiChevronDown,
} from "react-icons/bi";
import MenuListData from "./MenuListData";
export default function Header() {
  return (
    <Wrap>
      <MainHeader>
        <Logo>
          <Link to="/">
            <Icon />
          </Link>
        </Logo>
        <Name>
          <Link>
            <Pabi />
          </Link>
        </Name>
        <Search>
          <input
            className="bar"
            type={"text"}
            placeholder="동네 이름, 물품명 등을 검색하세요."
          ></input>
        </Search>
        <Menu>
          <IconList>
            <Link to="mypage">
              <BiUser />
            </Link>
          </IconList>
          <IconList>
            <Link to="/">
              <BiShoppingBag />
            </Link>
          </IconList>
          <IconList>
            <Link to="/">
              <BiPencil />
            </Link>
          </IconList>
          <IconList>
            <Link to="/">
              <BiHeart color={"red"} />
            </Link>
          </IconList>
          <IconList>
            <Link to="/">
              <BiCog />
            </Link>
          </IconList>
        </Menu>
      </MainHeader>
      <SubHeader>
        <Category>
          <BiMenu />
          카테고리
          <BiChevronDown />
        </Category>
        <MenuData />
      </SubHeader>
    </Wrap>
  );
}

const MenuData = () => {
  const menuList = MenuListData.map((props) => (
    <MenuList>
      <Link to={props.link}>{props.name}</Link>
    </MenuList>
  ));
  return <Menu>{menuList}</Menu>;
};
