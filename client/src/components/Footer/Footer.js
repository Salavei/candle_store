import './styleFooter.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div style={{ marginRight: '28px' }}><span className='GetCloserTo' >Get closer to</span><p className='FollowOurInstagram'>Follow our Instagram</p></div>
        <div><span className='Sphere'>Sphere</span><p style={{ textAlign: 'end' }} className='candle'>candle</p></div>
      </footer>
    </>
  );
}

export default Footer;