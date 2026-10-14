import React from 'react';
import { cn } from '@/lib/utils';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  smCols?: 1 | 2 | 3 | 4 | 6;
  mdCols?: 1 | 2 | 3 | 4 | 6;
  lgCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 2 | 3 | 4 | 6 | 8 | 10 | 12;
  children: React.ReactNode;
}

const colClasses: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
};

const smColClasses: Record<number, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  6: 'sm:grid-cols-6',
};

const mdColClasses: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  6: 'md:grid-cols-6',
};

const lgColClasses: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  12: 'lg:grid-cols-12',
};

const gapClasses: Record<number, string> = {
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
};

export const Grid: React.FC<GridProps> = ({
  cols = 1,
  smCols,
  mdCols,
  lgCols,
  gap = 6,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'grid',
        colClasses[cols] || 'grid-cols-1',
        smCols && smColClasses[smCols],
        mdCols && mdColClasses[mdCols],
        lgCols && lgColClasses[lgCols],
        gapClasses[gap] || 'gap-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  smSpan?: 1 | 2 | 3 | 4 | 6 | 12;
  mdSpan?: 1 | 2 | 3 | 4 | 6 | 12;
  lgSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: React.ReactNode;
}

const spanClasses: Record<number, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
};

const mdSpanClasses: Record<number, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  6: 'md:col-span-6',
  12: 'md:col-span-12',
};

const lgSpanClasses: Record<number, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  10: 'lg:col-span-10',
  11: 'lg:col-span-11',
  12: 'lg:col-span-12',
};

export const GridItem: React.FC<GridItemProps> = ({
  span,
  smSpan,
  mdSpan,
  lgSpan,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        span && spanClasses[span],
        mdSpan && mdSpanClasses[mdSpan],
        lgSpan && lgSpanClasses[lgSpan],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
