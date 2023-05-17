import BgParticles from '@/components/Bg-particles'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <BgParticles />
      <Header />
      <div className="flex items-center justify-center flex-col">

        <p className="text-justify p-16 font-normal text-lg">Bem-vindo à especializada em análise de dados florestais. Nós oferecemos soluções avançadas de análise de dados para proprietários de florestas, empresas de manejo florestal, agências governamentais e outros interessados no setor florestal.
          Nossos serviços ajudam a maximizar o valor econômico da sua floresta, melhorar a produtividade e a sustentabilidade da gestão florestal, além de apoiar a tomada de decisões informadas. Utilizamos tecnologias avançadas, como sensoriamento remoto, análise de imagens e modelagem preditiva para fornecer informações precisas e confiáveis sobre o seu ativo florestal.
          Com a nossa abordagem personalizada e orientada por dados, nossos clientes podem otimizar a produção de madeira, minimizar os riscos de incêndios florestais, monitorar a saúde da floresta e muito mais. Nossa equipe de especialistas altamente capacitados, incluindo engenheiros florestais, cientistas de dados e analistas, trabalha em colaboração com você para entender suas necessidades e desenvolver soluções sob medida para suas operações.
          Trabalhamos com uma ampla variedade de clientes, desde pequenas propriedades rurais até grandes empresas do setor florestal, ajudando-os a tomar decisões informadas e a obter melhores resultados. Nosso compromisso é oferecer soluções de qualidade superior, com um serviço excepcional e um atendimento ao cliente de primeira linha.
          Não importa o tamanho da sua propriedade ou a complexidade das suas necessidades, a AgroBounty está pronta para ajudá-lo a atingir seus objetivos de manejo florestal. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços de análise de dados florestais.</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-6xl mb-4">Tecnologias</h1>
        <div className="flex justify-around w-full items-center mb-3 gap-9">
          <img className="flex max-w-48 max-h-48 rounded-3xl" src="/pbix.png" alt="PBIX" />
          <img className="flex max-w-48 max-h-48" src="/python.png" alt="PBIX" />
        </div>
      </div>
      <div className="justify-center align-middl text-center">

      </div>
      <Footer />
    </main>
  )
}
