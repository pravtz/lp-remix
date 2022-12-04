import { CardSummaryFeacture, type CardSummaryFeactureProps } from "./CardSummaryFeacture"

type SummaryFeatureProps ={
    dataSummaryFeacture: CardSummaryFeactureProps[]
}

export const SummaryFeature = ({dataSummaryFeacture}: SummaryFeatureProps) => {
    return (

        <div className="flex w-full justify-center gap-3">
            {dataSummaryFeacture.map((item, index) => {
                return (
                    <CardSummaryFeacture
                        key={index}
                        imageIcon={item.imageIcon}
                        text={item.text}
                    />
                )
            })}

        </div>
    )
}