import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectCounterOffer, handleCounterOffer } from "../app/FormSlice";

const CounterModal : React.FC = () => {
  const counterOffer = useAppSelector(selectCounterOffer);
  const dispatch = useAppDispatch();
  return(
  <div className="flex flex-col items-start justify-center mt-1">
    <p className="text-sm font-medium text-accent-200 leading-5">#72873</p>
    <div className="mt-7 flex items-center">
      <p className="text-sm font-semibold text-black leading-4 mr-2">To</p>
      <Image src='/message2.svg' width='35' height='35' alt="" />
      <p className="text-sm font-medium text-accent-200 leading-5 ml-2">CryptoKing.near</p>
    </div>
    <form className="w-full">
      <label htmlFor="amount" className="w-full text-sm font-semibold text-black leading-4 mr-6 mt-6 block relative">
        Amount
        <div className="relative mt-3">
          <input type='text' value={counterOffer} placeholder="0.0000" onChange={(e : React.ChangeEvent<HTMLInputElement>) => dispatch(handleCounterOffer(e.target.value))} className="text-lg text-gray-300 leading-4 w-full px-4 py-3 bg-gray-900 rounded-md border border-gray-600 outline-none relative" />
          <span className="text-sm font-semibold text-gray-200 leading-5.5 bg-gray-900 h-full py-3 px-4 rounded-r-md absolute top-0 right-0 border-gray-600 border">NEAR</span>
        </div>
      </label>
    </form>
    <button className="btn btn-primary mt-7 relative">
    <svg className="absolute top-1/2 -translate-y-1/2 left-3" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8803 2.1L21.7793 3.515L23.1933 13.415L14.0013 22.607C13.8138 22.7945 13.5595 22.8998 13.2943 22.8998C13.0292 22.8998 12.7748 22.7945 12.5873 22.607L2.68732 12.707C2.49985 12.5195 2.39453 12.2652 2.39453 12C2.39453 11.7348 2.49985 11.4805 2.68732 11.293L11.8803 2.1ZM14.7083 10.586C14.8941 10.7717 15.1146 10.919 15.3573 11.0194C15.5999 11.1199 15.86 11.1716 16.1227 11.1716C16.3853 11.1715 16.6454 11.1197 16.888 11.0192C17.1307 10.9186 17.3511 10.7713 17.5368 10.5855C17.7225 10.3997 17.8698 10.1792 17.9703 9.93656C18.0707 9.69388 18.1224 9.4338 18.1224 9.17115C18.1223 8.9085 18.0705 8.64843 17.97 8.40579C17.8694 8.16315 17.7221 7.94269 17.5363 7.757C17.3506 7.57131 17.1301 7.42403 16.8874 7.32356C16.6447 7.22309 16.3846 7.1714 16.122 7.17145C15.5915 7.17154 15.0828 7.38235 14.7078 7.7575C14.3328 8.13265 14.1222 8.64141 14.1223 9.17185C14.1224 9.7023 14.3332 10.211 14.7083 10.586Z" fill="white"/>
    </svg>
      Make Offer
    </button>
  </div>
)}

export default CounterModal;