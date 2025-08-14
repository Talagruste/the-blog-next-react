import React from 'react';
import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { formatDatetime, formatRelativeDate } from '@/utils/format-datetime';

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: '1200',
                height: '720',
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <div className='flex flex-col gap-4 sm:justify-center'>
              <time
                className='text-slate-600 text-sm/tight block dark:text-slate-300'
                dateTime={post.createdAt}
                title={formatRelativeDate(post.createdAt)}
              >
                {formatDatetime(post.createdAt)}
              </time>
              <PostHeading as='h2' url={postLink}>
                {post.title}
              </PostHeading>
              {post.excerpt}
            </div>
          </div>
        );
      })}
    </div>
  );
}
