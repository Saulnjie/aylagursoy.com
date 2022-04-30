export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>

      <style jsx>{`
        .burger1 {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .burger2 {
          transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      `}</style>
    </>
  )
}
