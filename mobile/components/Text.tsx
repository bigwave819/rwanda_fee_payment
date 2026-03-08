import { Text as RNText, TextProps } from 'react-native';

export function Text({ className = '', style, ...props }: TextProps) {
  return (
    <RNText 
      {...props} 
      className={`font-sans ${className}`}
      style={style}
    />
  );
}

export default Text;