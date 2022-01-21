import Image from "next/image";

const AcceptModal : React.FC = () => (
  <div className="flex flex-col items-start justify-center mt-1">
    <p className="text-sm font-medium text-accent-200 leading-5">#72873</p>
    <div className="mt-7 flex items-center">
      <p className="text-sm font-semibold text-black leading-4 mr-2">From</p>
      <Image src='/message2.svg' width='35' height='35' alt="" />
      <p className="text-sm font-medium text-accent-200 leading-5 ml-2">CryptoKing.near</p>
    </div>
    <p className="mt-5">
      <span className="text-sm font-semibold text-black leading-4 mr-6">Amount</span>
      <span className="text-sm font-semibold text-gray-100 leading-4 bg-gray-700 py-2 px-3">0.3647 NEAR</span>
    </p>
    <button className="btn btn-primary mt-7">Confirm & Accept Offer</button>
    <p className="text-center mt-3 text-gray-300 font-medium leading-4 text-12px">by clicking confirm you must agree to homepage <span className="text-accent-100">Terms & condition</span></p>
  </div>
)

export default AcceptModal;