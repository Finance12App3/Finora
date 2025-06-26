import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

const header = () => {
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
        <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
            <Link href="/">
            <Image
                src={"/logo.png"}
                alt="finora logo"
                height={60}
                width={20}
                className="h-12 w-auto object-contain"
                />
                </Link>
                 <SignedOut>
                    <SignInButton forceRedirectUrl='/dashboard'>
                    <Button variant="Outline">Login</Button>
                   </SignInButton>
                 </SignedOut>
                 <SignedIn>
                    <UserButton/>
                </SignedIn>
         </nav>
      </div>
  )
}

export default header;