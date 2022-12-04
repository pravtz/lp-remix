type HeaderProps = {
  title: string
  subtitle: string
  mensageCTAButoon: string
}

export const Header = ({ title, subtitle, mensageCTAButoon }: HeaderProps) => {
  return (
    <div className="flex h-[522px] items-center justify-end">
      <div className="md:w-[50vw]">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="mt-4">
          <button className="button-solid">{mensageCTAButoon}</button>
        </div>
      </div>
    </div>
  )
}
