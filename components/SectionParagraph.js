import classNames from "classnames"

export default function SectionParagraph({left, children}) {
    return(
        <p className={classNames("text-lg mt-2 text-gray-600", !left && "text-center")}>{children}</p>
    )
}