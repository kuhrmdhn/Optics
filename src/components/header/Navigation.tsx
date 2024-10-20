import NavItems from "../element/NavItems";

export default function Navigation() {
  return (
    <nav className='w-full h-full flex justify-evenly items-center text-xs sm:text-base'>
      {navigations.map((navigation, index) => (
        <NavItems link={navigation.link} text={navigation.text} key={index} />
      ))}
    </nav>
  )
}


const navigations = [
  {
    link: "#home",
    text: "Home"
  },
  {
    link: "#about",
    text: "About Us"
  },
  {
    link: "#services",
    text: "Services"
  },
  {
    link: "#products",
    text: "Products"
  },
]