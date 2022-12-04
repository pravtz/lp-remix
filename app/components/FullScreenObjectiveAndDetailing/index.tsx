

type FullScreenObjectiveAndDetailingProps = {
  text: string
  menssage: string
  orientationReverse?: boolean
  image: {
    path: string,
    titleImage: string
  }
}

export const FullScreenObjectiveAndDetailing = ({
  text,
  menssage,
  orientationReverse = false,
  image
}: FullScreenObjectiveAndDetailingProps) => {
  return (
    <section className="w-full relative">
      <div
        className={
          orientationReverse
            ? 'flex h-screen w-full items-center flex-row-reverse '
            : 'flex h-screen w-full  items-center'
        }
      >
        <div
          title={image.titleImage}
          className={orientationReverse ? 'relative w-[35vw] right-20  h-full' : 'relative w-[35vw] left-20  h-full'}
          style={{
            backgroundImage: `url(${image.path})`,
            backgroundPosition: 'center',
            opacity: 0.15,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',

          }}
        ></div>

        <div
          className={
            orientationReverse ? 'w-[65vw] text-right h-fit ' : 'w-[65vw] text-left h-fit '
          }
        >
          <h2 className="font-bold leading-[50px]">{text}</h2>
          <p className="text-2xl text-white text-opacity-75">{menssage}</p>
        </div>
      </div>
    </section>
  )
}
