import { Submition } from "./Submitted";
export const Form = ({CardHolder, CardNumber, ExpDate, CVC, SetCardHolder, SetCardNumber, SetExpDate, SetCVC, onSubmit}) => {


  const HandleSubmit = (e) => {
    e.preventDefault();

    // Only submit if all fields are filled
    if (CardHolder && CardNumber && ExpDate && CVC) {
      onSubmit(); // Notify parent
    } else {
      alert("Please fill in all fields!");
    }
  };

  const HandleCardNumber = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    {value.length > 16 ? value = value.slice(0,16) : ""}
    
    const FormattedValue = value.replace(/(.{4})/g, '$1 ').trim(); // Add space after every 4 digits

    SetCardNumber(FormattedValue)
  }

  const HandleCvc = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    {value.length > 3 ? value = value.slice(0,3) : ""}
    SetCVC(value)
  }

  const HandleExpiry = (e) => {
  let value = e.target.value.replace(/\D/g, ""); // Allow only digits

  // Limit to 4 digits
  value = value.slice(0, 4);

  // Insert slash after 2 digits
  if (value.length > 2) {
    let day = value.slice(0, 2);
    let month = value.slice(2);

    // Restrict month to 12
    if (Number(month) > 12) {
      month = "12";
    }

    value = `${day}/${month}`;
  }

  SetExpDate(value);
};



  const HandleCardHolder = (e) => {
    let value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Remove non-letter characters
    {value.length > 20 ? value = value.length.slice(0,20) : ""}
    SetCardHolder(value)
  }

   const IsComplete = CardHolder && CardNumber && ExpDate && CVC;
  return(
    <div>
      <div className='mt-40'>

        <div className="form-div flex justify-center form-section">
          <form onSubmit={HandleSubmit} className=' flex flex-col space-y-2'>

            <label htmlFor="Card Holder Name">Card Holder Name</label>
            <input value={CardHolder} onChange={HandleCardHolder} SetName type="text" placeholder='Joseph Paul' className='w-100 h-[32px] border-1 border-black-500 rounded p-4' />

            <label htmlFor="">Card Number</label>
            <input value={CardNumber} onChange={HandleCardNumber} type="text" placeholder='E.g  1234 5678 9000 1234' className='w-100 h-[32px] border-1 border-black-500 rounded p-4'/>

            <label htmlFor="">Exp. Date </label>
            <input value={ExpDate} onChange={HandleExpiry} type="text" placeholder='DD/MM' className='w-100 h-[32px] border-1 border-black-500 rounded p-4'/>

            <label htmlFor="" className='font-jetmono'>CVC</label>
            <input value={CVC} onChange={HandleCvc} type="text" placeholder="123" className='w-100 h-[32px] border-1 border-black-500 rounded p-4'/>

            <div className="form-btn">
              <button disabled = {!IsComplete} type="submit" className="btn text-white bg-black w-80 h-10 ml-10 rounded hover: transition duration-500 ">Submit</button>
            </div>
          </form>
        </div>
        <br />
      </div>
    </div>
  )
}
