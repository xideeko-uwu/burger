import propTypes from "prop-types";

const Typography = ({
    className,
    children,
    as,
    ...props
}) => {
    const Heading = as;


    return <Heading className={className} {...props} >
        {children}
    </Heading>
}

Typography.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    as: propTypes.oneOf([
        "h1", "h2", "h3", "h4", "h5", "h6", "p", "span"
    ]).isRequired
}

Typography.defaultProps = {
    className: "Typography-class",
    children: "Text for your Heading or paragraph",
    as: "p"
}

export default Typography