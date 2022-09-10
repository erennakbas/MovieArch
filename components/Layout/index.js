export default function Layout({ children }) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          background-image: url("background-img.jpg");
        }
      `}</style>
      {children}
    </>
  );
}
