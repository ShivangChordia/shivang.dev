import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { FaLinkedin, FaInstagram, FaGithub, FaFacebookMessenger } from "react-icons/fa"

// Custom red marker
const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col lg:flex-row items-stretch w-full min-h-screen bg-black text-white">
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-emerald-400 font-medium text-sm tracking-wide uppercase">Available for work</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tight">
          Available for select{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            freelance opportunities
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
          Have an exciting project you need help with? Send me an email or connect via instant message!
        </p>

        <a
          href="mailto:shivang@example.com"
          className="inline-block text-xl md:text-2xl font-medium text-cyan-400 hover:text-cyan-300 transition-all duration-300 mb-12 group"
        >
          <span className="border-b-2 border-cyan-400/30 group-hover:border-cyan-300 transition-colors duration-300">
            shivangchordia02@gmail.com
          </span>
        </a>

        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/iamshivang/"
            className="text-3xl text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_.shivang.1725._/"
            className="text-3xl text-gray-400 hover:text-pink-400 hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ShivangChordia"
            className="text-3xl text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
         
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center py-20 pr-16">
        <div className="absolute inset-0"></div>
        <MapContainer
  center={[43.4643, -80.5204]} // Waterloo coordinates
  zoom={13}
  scrollWheelZoom={false}
  style={{ height: "100%", width: "100%" }}
   zoomControl={false} 
>
  <TileLayer
    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
  />
  <Marker position={[43.4643, -80.5204]} icon={redIcon}>
    <Popup>
      📍 Waterloo, Canada <br /> Based here!
    </Popup>
  </Marker>
</MapContainer>
      </div>
    </section>
  )
}
