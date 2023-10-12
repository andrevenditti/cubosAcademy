import Logo from "../../assets/logo.svg"
import "./style.css"

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <img src={Logo} alt="logo" />
        <p>
          Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag
          stems and seeds little orange hairs. California kush roll it up into a
          fat blunt for medicinal purposes to elevate your consciousness.
        </p>
      </div>
      <div className="footer-right">
        <p>
          Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag
          stems and seeds little orange hairs. California kush roll it up into a
          fat blunt for medicinal purposes to elevate your consciousness.
          Pass the duchie Bob Marley this shatter is hella potent.
          Dude you’re just being paranoid, don’t call the cops.
          Oh my gawd, they like totally know I'm high.
        </p>
      </div>
    </footer>
  )
}

export default Footer