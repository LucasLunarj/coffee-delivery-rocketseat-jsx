import { HeaderContainer, LocationContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <p>Rio de Janeiro, RJ</p>
        </LocationContainer>
        <div>
          <NavLink to="/checkout">
            <button>
              <ShoppingCart weight="fill" size={22} />
            </button>
          </NavLink>
        </div>
      </div>
    </HeaderContainer>
  );
}
