import "./NavButton.module.css";

function NavButton( {title, href} ) {
    return <>
    <a href={href}> {title} </a>
    </>
}

export default NavButton;