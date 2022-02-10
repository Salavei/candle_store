import './styleCandles.css';
import candel3 from './images/candel3.svg'
import candel4 from './images/candel4.svg'

const Candles = () => {
  return (
    <>
      <section className='ContainerCandel_1'>
        <div className='ContainerPictureCandle'>
          <div className='Sqare'>
            <img src={candel3} style={{ margin: '70px 55px' }} />
          </div>
        </div>
        <div className='textBlock'>
          <a>Annette</a>
          <p><span>Состав:</span> соевый воск. Женское тело, 10см, в молочном цвете<p><span>Объем:</span> 100 мл</p> <p><span>Цена: 25 BYN</span></p></p>
          <button>Customize</button>
        </div>
      </section>

      <section className='ContainerCandel_2'>
        <div className='textBlock' style={{ width: "293px" }}>
          <a>Berry Punch</a>
          <p><span>Состав:</span> апельсин, яблоко, малина, клубника, земляника, кубинский ром, корица, ваниль.<p><span>Объем:</span> 200 мл</p> <p><span>Цена: 30 BYN</span></p></p>
          <button>Customize</button>
        </div>
        <div className='ContainerPictureCandle'>
          <div className='Sqare'>
            <img src={candel4} style={{ margin: '70px 55px' }} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Candles;