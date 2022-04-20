import { Link } from "react-router-dom";
import {
  MainHeader,
  Menu,
  Logo,
  Name,
  IconList,
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
  BiMenu,
} from "react-icons/bi";

export default function Header() {
  return (
    <Wrap>
      <MainHeader>
        <Menu>
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
              placeholder="동네이름, 물품명 등을 검색해보세요!"
            ></input>
          </Search>
          <IconList>
            <Link to="mypage">
              <BiUser size={"40px"} />
            </Link>
          </IconList>
          <IconList>
            <Link>
              <BiShoppingBag size={"40px"} />
            </Link>
          </IconList>
          <IconList>
            <Link>
              <BiPencil size={"40px"} />
            </Link>
          </IconList>
          <IconList>
            <BiHeart size={"40px"} color={"red"} />
          </IconList>
          <IconList>
            <BiCog size={"40px"} />
          </IconList>
        </Menu>
      </MainHeader>
      <SubHeader>
        <Menu>
          <MenuList>
            <BiMenu size={"30px"} />
          </MenuList>
          <MenuList>카테고리</MenuList>
          <MenuList>
            <Link to="/">인기매물</Link>
          </MenuList>
          <MenuList>
            <Link to="/">임박매물</Link>
          </MenuList>
          <MenuList>
            <Link to="/">팝니다</Link>
          </MenuList>
          <MenuList>
            <Link to="/">이벤트</Link>
          </MenuList>
          <MenuList>
            <Link to="/">경매종료상품</Link>
          </MenuList>
          <MenuList>
            <Link to="/login">로그인</Link>
          </MenuList>
          <MenuList>
            <Link to="/register">회원가입</Link>
          </MenuList>
          <MenuList>
            <Link to="/login">고객센터</Link>
          </MenuList>
        </Menu>
      </SubHeader>
    </Wrap>
  );
}
