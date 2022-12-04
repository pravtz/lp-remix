type FooterProps = {
    
    textCopyright: string
}

export const Footer = ({textCopyright}: FooterProps) => {
    return (
        <div>
            <p>{textCopyright}</p>
        </div>
    )
}