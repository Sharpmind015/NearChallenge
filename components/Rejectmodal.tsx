
const RejectModal : React.FC = () => (
  <div className="flex flex-col items-start justify-center mt-1">
    <p className="text-sm font-medium text-accent-200 leading-5">#72873</p>
    <form className="w-full">
      <label htmlFor="reason" className="w-full text-sm font-semibold text-black leading-4 mr-6 mt-6 block relative">
        Reason
        <div className="relative mt-3">
          <select className="text-sm font-semibold text-gray-200 leading-4 w-full px-4 py-3 bg-gray-900 rounded-md border border-gray-600 outline-none relative appearance-none">
          <option value="Not For Sale">Not For Sale</option>
          </select>
          <svg className="absolute top-1/2 -translate-y-1/2 right-5" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.83001 0H1.99852C1.17838 0 0.706958 0.932936 1.19347 1.5932L5.10921 6.90742C5.50888 7.44983 6.31966 7.44983 6.71932 6.90742L10.6351 1.5932C11.1216 0.932935 10.6502 0 9.83001 0Z" fill="#C4C4C4"/>
          </svg>
        </div>
      </label>
    </form>
    <button className="btn btn-secondary mt-7 relative">
      Reject Offer
    </button>
  </div>
)

export default RejectModal;