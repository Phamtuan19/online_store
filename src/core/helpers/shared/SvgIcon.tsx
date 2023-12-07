import { useSvgIcon } from '@Core/hooks/useSvgIcon';
import { type ComponentProps } from 'react';

type SvgIconProps = ComponentProps<'svg'> & {
   name: string;
};

export const SvgIcon = ({ name, ...props }: SvgIconProps) => {
   const { error, isLoading, Icon } = useSvgIcon(name);

   if (error) {
      throw new Error(error.message);
   }

   if (isLoading) {
      return <></>;
   }

   if (!Icon) {
      return <></>;
   }

   return <Icon {...props} />;
};
