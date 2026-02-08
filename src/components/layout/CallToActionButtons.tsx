import { Button } from "../ui/button";
import Link from "next/link";
const CallToActionButtons = () => {
  return (
    <>
      <Button
        asChild
        className='text-base bg-white text-black hover:bg-gray-200'
      >
        <Link
          target='_blank'
          href='https://fantastical.app/andrewnichols/code-crafted-digital'
        >
          Book A Call
        </Link>
      </Button>
      <Button
        asChild
        className='text-base bg-ccd-blue text-white hover:bg-ccd-blue-dark'
      >
        <Link href='https://zfrmz.com/cOTE35LfMFaH41ihISEm'>Get A Quote</Link>
      </Button>
    </>
  );
};

export default CallToActionButtons;
