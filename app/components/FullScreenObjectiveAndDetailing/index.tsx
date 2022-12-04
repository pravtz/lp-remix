type FullScreenObjectiveAndDetailingProps = {
  text: string
  menssage: string
  orientationReverse?: boolean
}

export const FullScreenObjectiveAndDetailing = ({
  text,
  menssage,
  orientationReverse = false
}: FullScreenObjectiveAndDetailingProps) => {
  return (
    <section className="w-full md:w-[722px]">
      <div
        className={
          orientationReverse
            ? 'flex h-screen w-full items-end justify-center'
            : 'flex h-screen w-full justify-center'
        }
      >
        <div
          title="image de uma pessoa utilizando a plataforma da holder+"
          className=" h-[229px] w-[356px] sm:h-[328px] sm:w-[480px] md:h-[360px] md:w-[550px] lg:h-[578px] lg:w-[730px] "
          style={{
            backgroundImage: "url('/images/cadastro/telas.png')",
            backgroundPosition: 'center',
            opacity: 0.95,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        <div
          className={
            orientationReverse ? 'border text-right' : 'border text-left'
          }
        >
          <h2>{text}</h2>
          <p className="text-2xl text-white text-opacity-75">{menssage}</p>
        </div>
      </div>
    </section>
  )
}
