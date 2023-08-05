import { CardPost, PostContainer } from './styles'

import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'

const Posts = () => {
  return (
    <PostContainer>
      <div className="container">
        <CardPost>
          <img src={foto1} alt="" />
          <p>Entendendo o Alzheimer</p>
          <a
            href="https://pay.kiwify.com.br/PNuxEgb"
            target="_blank"
            rel="noreferrer"
          >
            <button>Saiba mais</button>
          </a>
        </CardPost>
        <CardPost>
          <img src={foto2} alt="" />
          <p>Perguntas sobre o Alzheimer</p>
          <a
            href="https://pay.kiwify.com.br/PNuxEgb"
            target="_blank"
            rel="noreferrer"
          >
            <button>Saiba mais</button>
          </a>
        </CardPost>
        <CardPost>
          <img src={foto3} alt="" />
          <p>Cuidando de quem cuida</p>
          <a
            href="https://pay.kiwify.com.br/PNuxEgb"
            target="_blank"
            rel="noreferrer"
          >
            <button>Saiba mais</button>
          </a>
        </CardPost>
      </div>
    </PostContainer>
  )
}

export default Posts
