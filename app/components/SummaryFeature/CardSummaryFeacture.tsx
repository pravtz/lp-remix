export type CardSummaryFeactureProps = {
    text: string
    imageIcon: {
        pathIcon: string
        alt:string

    }
}

export const CardSummaryFeacture = ({imageIcon, text}: CardSummaryFeactureProps) => {
    return (
        <div className="flex flex-col items-center flex-nowrap">
            <figure>
                <img src={imageIcon.pathIcon} alt={imageIcon.alt} />

            </figure>
            <h3>{text}</h3>
        </div>
    )
}