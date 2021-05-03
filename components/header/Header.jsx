import HeaderNav from "components/header/HeaderNav"
import HeaderLogo from "components/header/HeaderLogo"

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <HeaderNav />
      <HeaderLogo />
    </header>
  )
}

export default Header
