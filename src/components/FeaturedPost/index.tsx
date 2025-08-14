import React from 'react';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function FeaturedPost() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2'>
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: '1200',
          height: '720',
          src: '/images/bryen_9.png',
          alt: 'alt da imagem',
          priority: true,
        }}
      />

      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 text-sm/tight block dark:text-slate-300'
          dateTime='2025-08-14'
        >
          14/08/2025 10:00
        </time>
        <PostHeading as='h1' url={postLink}>
          commodi possimus repellat dolore
        </PostHeading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos ipsa
        debitis commodi possimus repellat dolore ea in iste. Minima esse
        expedita maiores aut modi corporis omnis et at reiciendis?
      </div>
    </section>
  );
}
