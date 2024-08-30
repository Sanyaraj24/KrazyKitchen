

import myLogo from './Kraxykitchen.png'
export default function Logo() {
  return (
    <div className='mylogo' style={{backgroundColor:"#33363a",display:"flex"}}>
      <img src={myLogo} alt="KrazyKitchen" style={{width:"60px", height:"65px",marginLeft:"480px"}}/>
      <div className='text' style={{fontFamily:"cursive", fontSize:"40px", marginLeft:"5px",color:"whitesmoke"}}>Krazy Kitchen</div>
    </div>
  )
}
