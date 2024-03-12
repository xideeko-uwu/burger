import { Fragment } from "react"
import Image from "./Image"
import LogoIcon from "../images/Logo.svg"

const Logo = ({ className }) => {
    return (
        <Fragment>
            <a href="/" className={className}>
                <Image 
                    src={LogoIcon} 
                    srcSet={LogoIcon} 
                    alt={`Logo`}
                />
            </a>
        </Fragment>
    )
}

export default Logo;