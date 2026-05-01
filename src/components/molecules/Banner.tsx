export default function Banner() {
  return (
    <div className="absolute w-full flex items-center justify-center top-0 p-4 z-10">
      <img
        src="/assets/logo/Logo.svg"
        alt="logo"
        style={{ width: "auto", height: "auto", maxWidth: "250px" }}
        loading="eager"
      />
    </div>
  );
}
