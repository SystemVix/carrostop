import './styles.css';

export default function BarraBusca()
{
   return (
      <form className="vs-form-barra-busca">
         <input className="vs-controle-form" type="text" placeholder="Digite sua busca"/>
         <button className="vs-botao-buscar" type="submit">Buscar</button>
      </form>
   );
}