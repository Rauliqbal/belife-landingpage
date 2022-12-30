import clsx from 'clsx';

export default function Button(props) {
   const { children, text, className } = props;
   return (
      <button
         {...props}
         className={clsx(
            className,
            ' [&>svg:w-2] [&>svg:h-2] flex items-center gap-2 px-6 py-3 font-semibold text-white text-sm rounded-full'
         )}
      >
         {text || children}
      </button>
   );
}
