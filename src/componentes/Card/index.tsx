import './styles.css';
import carroImagem from '../../recursos/audi.png';
import BotaoComprar from '../BotaoComprar';

export default function Card()
{
   return (
      <>
         <div className="vs-card">
            <img src={carroImagem} alt="Carro"/>
            <h3>Audi Supra TT</h3>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eveniet.
            </p>
            <BotaoComprar/>
         </div>         
      </>      
   );
}
