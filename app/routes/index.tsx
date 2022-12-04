import { Footer } from '~/components/Footer'
import { FullScreenObjectiveAndDetailing } from '~/components/FullScreenObjectiveAndDetailing'
import { Header } from '~/components/Header'
import { SummaryFeature } from '~/components/SummaryFeature'

const dataSummaryFeacture = [
  {
    text: 'Visual incrível que acompanha o design da sua marca',
    imageIcon: {
      pathIcon: '/icons/palette.svg',
      alt: 'imagem de uma paleta de cores'
    }
  },
  {
    text: 'Otimizado para alcançar ótimas velociadas de carregamento',
    imageIcon: {
      pathIcon: '/icons/speedometer.svg',
      alt: 'imagem de um velocimetro'
    }
  },
  {
    text: 'Confiável e seguro e prático e moderno',
    imageIcon: {
      pathIcon: '/icons/padlock.svg',
      alt: 'imagem de um cadeado'
    }
  },
  {
    text: 'Utiliza as melhores tecnilogias para alcançar o melhor posicionamento orgânico no Google',
    imageIcon: {
      pathIcon: '/icons/chart.svg',
      alt: 'imagem de um grafico ascendente'
    }
  }
]

export default function Index() {
  return (
    <div className="h-min-[100vh] w w-screen bg-background-box-900 text-background-box-300">
      <div className="container m-auto">
        {/* header */}
        <div id="headerZone">
          <Header
            title="Precisa de uma Landing Page de que traga retorno?"
            subtitle="Nós temos aqui a Landing Page que você precisa para seu negócio!"
            mensageCTAButoon="AGENDE AGORA MESMO"
          />
        </div>
        {/* Illustrated summary of features */}
        <div id="sumaryFiaturesZone" className='py-20'>
          <SummaryFeature dataSummaryFeacture={dataSummaryFeacture} />
        </div>
        {/* objectives */}
        <div id='objectives' className='py-10'>
          <FullScreenObjectiveAndDetailing
            text="Nosso objetivo é entregar o que tem de melhor em Landing Pages profissionais para que você consiga atigir seus resultaodos."
            menssage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit tortor libero, id tincidunt sapien mattis et. Duis nec lectus blandit, posuere felis in, mollis dui. Curabitur egestas urna in elit blandit, id aliquet tellus sollicitudin. Vivamus vitae vehicula elit. Praesent sed dui tortor."
            orientationReverse={false}
            image={{ path: 'aaa.png', titleImage: 'imagem de fundo que demostra tecnologia' }}
          />
        </div>
        {/* detailing */}
        <div id='detailings' className='py-10'>
          <FullScreenObjectiveAndDetailing
            text="Landing Page é uma página que conta com todos os elementos voltados à conversão, do visitante ao Lead ou da oportunidade ao cliente. Também conhecidas como páginas de aterrissagem, páginas de conversão ou de captura, elas são item-chave nas campanhas de Marketing Digital."
            menssage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit tortor libero, id tincidunt sapien mattis et. Duis nec lectus blandit, posuere felis in, mollis dui. Curabitur egestas urna in elit blandit, id aliquet tellus sollicitudin. Vivamus vitae vehicula elit. Praesent sed dui tortor."
            orientationReverse={true}
            image={{ path: 'aaa.png', titleImage: 'imagem de fundo que demostra tecnologia' }}
          />
        </div>
        {/* depositions */}
        {/* differential */}
        {/* action form */}
        {/* faq */}
        {/* footer */}
        <Footer textCopyright="Tripular Digital - 2022 | Version 1.0.2" />
      </div>
    </div>
  )
}
