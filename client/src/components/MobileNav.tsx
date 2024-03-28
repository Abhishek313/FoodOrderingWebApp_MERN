import { Separator } from '@radix-ui/react-separator'
import { Sheet, SheetTitle, SheetTrigger,SheetContent, SheetDescription } from './ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'

export default function MobileNav() {
  return (
    <Sheet>
         <SheetTrigger>
            <Menu className = 'text-orange-500'/>
         </SheetTrigger>
         <SheetContent>
            <SheetTitle>
                <span> Welcome to AbhiEats.com</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className='flex'>
                <Button className='flex-1 font-bold bg-orange-500'>
                    Log In
                </Button>

            </SheetDescription>
         </SheetContent>
    </Sheet>
  )
}