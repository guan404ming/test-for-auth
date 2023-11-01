"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { signIn, useSession, signOut } from 'next-auth/react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';

export default function Home() {

    const { data: session, status } = useSession();
    console.log(session, status);

    return (
        <main className='text-center flex items-center justify-center h-screen'>
            <div id='content'>
                <h1 className='font-bold text-4xl mb-8'>Test for Auth</h1>
                {
                    (session && session.user) ? (
                        <>
                            <Avatar className='m-auto'>
                                <AvatarImage src={`${session.user.image}`} alt="@shadcn" />
                                <AvatarFallback>{session.user.name}</AvatarFallback>
                            </Avatar>
                            <div className='text-xl my-5'>{session.user.name}</div>
                        </>
                    ) : <></>
                }

                <Button className='round-xl mr-5' onClick={() => signIn()}>Sign In</Button>
                <Button className='round-xl' onClick={() => signOut()}>Sign Out</Button>
            </div>
        </main>
    )
}
