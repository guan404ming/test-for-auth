"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { signIn, useSession, signOut } from 'next-auth/react';

export default function Home() {

    const { data: session, status } = useSession();
    console.log(session, status);

    return (
        <main className='text-center justify-center'>
            <div className='min-h-screen pt-[44vh]'>
                <h1 className='font-bold text-4xl mb-10'>Test for Auth</h1>
                <Button className='mr-5 round-xl' onClick={() => signIn()}>Sign In</Button>
                <Button className='round-xl' onClick={() => signOut()}>Sign Out</Button>
            </div>
        </main>
    )
}
