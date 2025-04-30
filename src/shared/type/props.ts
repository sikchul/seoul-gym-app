import type { PropsWithChildren } from 'react';

interface PropsWithClassName {
    className?: string;
}

export interface DefaultComponentProps extends PropsWithChildren, PropsWithClassName { }
