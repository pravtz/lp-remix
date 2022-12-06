type FullScreenObjectiveAndDetailingProps = {
  text: string
  menssage: string
  orientationReverse?: boolean
  image: {
    path: string
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
    <section className="relative w-full">
      <div
        className={
          orientationReverse
            ? 'flex h-screen w-full flex-row-reverse items-center '
            : 'flex h-screen w-full  items-center'
        }
      >
        <div
          data-testid="background"
          title={image.titleImage}
          className={
            orientationReverse
              ? 'relative right-20 h-full  w-[35vw]'
              : 'relative left-20 h-full  w-[35vw]'
          }
          style={{
            backgroundImage: `url(${image.path})`,
            backgroundPosition: 'center',
            opacity: 0.15,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat'
          }}
        ></div>

        <div
          className={
            orientationReverse
              ? 'h-fit w-[65vw] text-right '
              : 'h-fit w-[65vw] text-left '
          }
        >
          <h2 className="font-bold leading-[50px]">{text}</h2>
          <p className="text-2xl text-white text-opacity-75">{menssage}</p>
        </div>
      </div>
    </section>
  )
}
