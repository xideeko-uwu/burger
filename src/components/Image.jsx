import { Fragment } from "react";

const Image = ({alt, className, srcSet, src, type}) => {
    return (
        <Fragment>
            <div className={className}>
                <picture>
                    <source srcSet={srcSet} type={type} />
                    <img src={src} alt={alt} />
                </picture>
            </div>
        </Fragment>
    )
}

export default Image;