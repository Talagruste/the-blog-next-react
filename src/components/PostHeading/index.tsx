import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: TagH = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-3xl mb-4 font-extrabold',
    h2: 'text-2xl/tight font-bold',
  };
  const commomClasses = '';
  return (
    <TagH className={clsx(headingClassesMap[TagH], commomClasses)}>
      <Link
        className='group-hover:text-slate-600 dark:group-hover:text-slate-300'
        href={url}
      >
        {children}
      </Link>
    </TagH>
  );
}
