import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline"

const HeaderNav = () => {
  return (
    <div className="flex flex-grow justify-evenly max-w-2xl">
      <NavItem title="Home" Icon={HomeIcon} />
      <NavItem title="Trending" Icon={LightningBoltIcon} />
      <NavItem title="Verified" Icon={BadgeCheckIcon} />
      <NavItem title="Collections" Icon={CollectionIcon} />
      <NavItem title="Search" Icon={SearchIcon} />
      <NavItem title="Account" Icon={UserIcon} />
    </div>
  )
}

const NavItem = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title?.toUpperCase()}
      </p>
    </div>
  )
}

export default HeaderNav
