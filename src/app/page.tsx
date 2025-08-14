import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Link from 'next/link';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { PostHeading } from '@/components/PostHeading';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          ></Image>
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 text-sm/tight block dark:text-slate-300'
            dateTime='2025-08-14'
          >
            14/08/2025 10:00
          </time>
          <PostHeading as='h1' url='#'>
            commodi possimus repellat dolore
          </PostHeading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos ipsa
          debitis commodi possimus repellat dolore ea in iste. Minima esse
          expedita maiores aut modi corporis omnis et at reiciendis?
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
