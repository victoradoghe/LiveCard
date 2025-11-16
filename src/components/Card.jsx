import { WpfSimCardChip } from './chipIcon'
import { RiVisaLine } from './Visaicon'
import { MdiContactlessPaymentCircleOutline } from './paymenticon'

export const Card = ({CardHolder, CardNumber, ExpDate, CVC}) => {
  return(
    <div>

      <div className='card'>

        <div className="card-back bg-[url('/src/assets/img/backofcard.png')] bg-cover bg-center w-[336px] h-[212px] rounded-[12px]  absolute mt-[-213px] ml-[120px]">
         <div className='absolute mt-[88px] ml-71'>
          <span className='text-white'> {CVC || "000"} </span>
         </div>
        </div>

        <div className="card-front bg-[url('/src/assets/img/cardbody.png')] absolute bg-cover bg-center  w-[336px] h-[212px] rounded-[12px]
         mt-[-80px] ml-[70px]
         border-1 border-black-500">
          
        <div className='absolute  grid grid-cols-2 gap-56 ml-5 mt-3'>
          <MdiContactlessPaymentCircleOutline/>
          <RiVisaLine/>
        </div>

        <div className="mt-[110px]">
          <span className='text-white ml-5 text-xl tracking-[3px]' fl>{CardNumber || "0000 0000 0000 0000"}</span>
        </div>

        <div className='grid grid-cols-2'>
          <div className='ml-5 flex flex-col space-y-[px] mt-5'>
            <label htmlFor="Card holder name" className='text-white text-[6px]'>Card holder name</label>
            <span className='text-white text-[10px]'>{CardHolder || "Joseph Paul"}</span>
          </div>

            <div className='mt-[19px] flex flex-col space-y-[px]'>
              <label htmlFor="Expiry Date" className='text-white text-[6px]'>Expiry Date</label>
              <span className='text-white text-[10px]'>{ExpDate || "00/00"}</span>
            </div>

            <div className=' ml-70 mt-[-29px]'>
              <WpfSimCardChip/>
            </div>

          </div>
         </div>
      </div>
    </div>
  )
}