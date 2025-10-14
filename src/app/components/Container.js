export default function Container({ children }) {
  return (
    <div className="max-w-[600px] w-full mx-auto px-4">
      {children}
    </div>
  );
}