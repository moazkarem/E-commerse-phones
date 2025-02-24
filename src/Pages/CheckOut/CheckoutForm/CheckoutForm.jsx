
const CheckoutForm = () => {
  return (
   <>
     <h2 className="text-[#a9afc3] mb-8">Checkout Details</h2>
        <form>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="flex flex-col items-start gap-4">
              <label className="capitalize text-sm ps-2 text-[#a9afc3]">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-full bg-transparent  border outline-none text-sm text-[#a9afc3] mb-6"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <label className="capitalize text-sm ps-2 text-[#a9afc3]">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-full bg-transparent  border outline-none text-sm text-[#a9afc3] mb-6"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <label className="capitalize text-sm ps-2 text-[#a9afc3]">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-full bg-transparent  border outline-none text-sm text-[#a9afc3] mb-6"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="flex flex-col items-start gap-4">
              <label className="capitalize text-sm ps-2 text-[#a9afc3]">
                Home Address
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-full bg-transparent  border outline-none text-sm text-[#a9afc3] mb-6"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <label className="capitalize text-sm ps-2 text-[#a9afc3]">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-full bg-transparent  border outline-none text-sm text-[#a9afc3] mb-6"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <label className="capitalize text-sm ps-2 text-[#a9afc3]">
              City Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-full bg-transparent  border outline-none text-sm text-[#a9afc3] mb-6"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <label className="capitalize text-sm ps-2 text-[#a9afc3]">
              Add Note
            </label>
            <textarea
              type="text"
              className="w-full h-[300px] px-4 py-3 rounded-[12px] bg-transparent  border outline-none text-sm text-[#a9afc3] mb-6"
            />
          </div>
        </form>
   </>
  )
}

export default CheckoutForm