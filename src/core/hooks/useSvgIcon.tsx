import { useEffect, useRef, useState, type ElementType } from 'react';

export const useSvgIcon = (name: string) => {
   const importedIconRef = useRef<ElementType>();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<Error>();

   useEffect(() => {
      setIsLoading(true);

      const importSvgIcon = async (): Promise<void> => {
         try {
            const { ReactComponent } = (await import(`../../assets/svg/${name}.svg`)) as {
               ReactComponent: ElementType;
            };

            importedIconRef.current = ReactComponent;
         } catch (err) {
            if (err instanceof Error) {
               setError(err);
            }
         } finally {
            setIsLoading(false);
         }
      };

      void importSvgIcon();
   }, [name]);

   return { error, isLoading, Icon: importedIconRef.current };
};
