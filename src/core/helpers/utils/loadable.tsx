import LazyLoadingScreen from '@Component/Loading/LazyLoadingScreen';
import React, { lazy, Suspense } from 'react';

type LoadableProps = JSX.IntrinsicAttributes;

/**
 * Returns a lazy-loaded component.
 *
 * @param path - The path to the component to be loaded.
 *
 */

function loadable<P extends LoadableProps>(path: string) {
   const newPath = path.split('.').includes('tsx') ? path + '.tsx' : path;
   const ComponentLazy = lazy(() => import(`../../../page/${newPath}`));

   const LoadableComponent: React.FC<P> = (props) => (
      <Suspense fallback={<LazyLoadingScreen />}>
         <ComponentLazy {...props} />
      </Suspense>
   );

   return LoadableComponent;
}

export default loadable;
