import './styles.css';
import Cabecalho from "../../componentes/Cabecalho";
import BarraBusca from '../../componentes/BarraBusca';

export default function Catalogo()
{
   return (
      <>
         <Cabecalho/>
         <main className="vs-principal-catalogo">
            <section id="vs-secao-catalogo" className="vs-conteiner">
               <div className="vs-conteiner-barra-busca">
                  <BarraBusca/>
               </div>
               <div className="vs-conteiner-cards-catalogo">
                  <div>
                     Teste
                  </div>
               </div>
            </section>
         </main>
      </>
   );
}