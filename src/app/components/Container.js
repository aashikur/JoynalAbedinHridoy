export default function Container({ children, className }) {
  return (
    <div className={`max-w-[600px] w-full mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}