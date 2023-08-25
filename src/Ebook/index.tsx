import { EbookContainer, EbookCover, EbookLink } from './styles'

import capa from '../assets/capa-ebook.jpeg'

const Ebook = () => {
  return (
    <EbookContainer>
      <div className="container">
        <EbookCover>
          <img src={capa} alt="" />
        </EbookCover>
        <EbookLink>
          <h3>Conheça nosso E-Book!</h3>
          <p>
            Um livro para facilitar a sua vida e de seus familiares, um guia
            completo para cuidar daqueles que um dia cuidaram de nós.
          </p>
          <a
            href="https://pay.kiwify.com.br/bepy0xO"
            target="_blank"
            rel="noreferrer"
          >
            <button>Aprenda agora</button>
          </a>
        </EbookLink>
      </div>
    </EbookContainer>
  )
}

export default Ebook
