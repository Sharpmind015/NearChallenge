import Image from "next/image";
import Link from "next/link";

const ExperienceModalBody : React.FC = () => (
  <div className="flex flex-col items-center justify-center mt-6">
    <Link href='https://nearlabs.app/app/docu_s...'>
      <a target='_blank' className="rounded-md bg-blue-500 px-3 py-4 text-sm text-blue-100 leading-5">https://nearlabs.app/app/docu_s...</a>
    </Link> 
    <button className="mt-4 flex items-center">
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.98047 4V16C8.98047 16.5304 9.19118 17.0391 9.56626 17.4142C9.94133 17.7893 10.45 18 10.9805 18H18.9805C19.5109 18 20.0196 17.7893 20.3947 17.4142C20.7698 17.0391 20.9805 16.5304 20.9805 16V7.242C20.9804 6.97556 20.9272 6.71181 20.8238 6.46624C20.7204 6.22068 20.569 5.99824 20.3785 5.812L17.0635 2.57C16.6898 2.20466 16.188 2.00007 15.6655 2H10.9805C10.45 2 9.94133 2.21071 9.56626 2.58579C9.19118 2.96086 8.98047 3.46957 8.98047 4V4Z" stroke="#587BE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.9805 18V20C16.9805 20.5304 16.7698 21.0391 16.3947 21.4142C16.0196 21.7893 15.5109 22 14.9805 22H6.98047C6.45004 22 5.94133 21.7893 5.56626 21.4142C5.19118 21.0391 4.98047 20.5304 4.98047 20V9C4.98047 8.46957 5.19118 7.96086 5.56626 7.58579C5.94133 7.21071 6.45004 7 6.98047 7H8.98047" stroke="#587BE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p className="text-sm font-semibold text-blue-100 leading-5 ml-2">Copy link</p>
    </button>
    <div className="flex mt-9">
      <div>
        <Image src="/twitter.png" alt="" width="24" height="24" />
      </div>
      <div className="ml-6">
        <Image src="/discord.png" alt="" width="24" height="24" />
      </div>
      <div className="ml-6">
        <Image src="/telegram.png" alt="" width="24" height="24" />
      </div>
    </div>
  </div>
)

export default ExperienceModalBody;