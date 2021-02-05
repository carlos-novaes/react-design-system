import cn from 'classnames';

export default function Button({ children, variant, hover, disableShadow, disabled }) {
  return (
    <button
      className={cn({
        [`button__variant-${variant}`]: variant,
        [`button__hover`]: hover,
        [`button__disableShadow`]: disableShadow,
        [`button__disabled`]: disabled,
      })}>
      {children}
    </button>
  );
}
