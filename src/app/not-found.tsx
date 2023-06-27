import Link from 'next/link';
import { Button } from '~/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[85vh] gap-8">
      <div className="text-6xl semibold">Not Found</div>
      <div className="text-xl">Could not find requested resource</div>
      <div className="text-2xl p-8">
        Go to the&nbsp;<Link href="/" className="bold underline mx-4"><Button>MAIN</Button></Link>&nbsp;page
      </div>
    </div>
  )
}
