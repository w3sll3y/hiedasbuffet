
import toHire from '../../../assets/to-hire2.png'
import * as Styled from './styles.ts';

export function SectionTwo() {

  return (
    <Styled.Jumbotron>
      <Styled.ImageToHire src={toHire} alt="Logo do Ignite" />
      <Styled.ContainerTextJumbotron>
        <Styled.TextJumbotron>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius illo quae ipsa est sunt ad placeat sequi deserunt ab laudantium facere saepe eos amet dignissimos, odit adipisci eveniet possimus voluptas.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt debitis, quam placeat corrupti, cupiditate unde similique atque voluptas doloribus animi a ipsa reprehenderit illum fugit culpa est minus consectetur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et dolorum dolorem aspernatur eveniet repellat minus, delectus est maxime laborum maiores sapiente consequatur, debitis sequi ex error inventore illum optio.
        </Styled.TextJumbotron>
      </Styled.ContainerTextJumbotron>
    </Styled.Jumbotron>
  )
}
