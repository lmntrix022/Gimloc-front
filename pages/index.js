import Reservation from "@/components/HeroBanner";    
import WhyChooseGimlocautomoto from "@/components/WhyChooseGimlocautomoto";    
import Hero from "@/components/Hero";    
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import Testimonial from '@/components/Testimonial';
import WhatsappButton from '@/components/WhatsappButton';
import MailButton from '@/components/MailButton';
import Faq from "@/components/Faq";

const testimonials = [
  {
    text: "Je recommande vivement cette entreprise. Le service est impeccable et les voitures sont en excellent état.",
    name: "Asma",
    title: "Directrice Marketing",
    image: "/profil/alice.png"
  },
  {
    text: "Une expérience d'achat parfaite du début à la fin. La voiture était moderne et confortable.",
    name: "Akim",
    title: "Ingénieur",
    image: "/profil/jean.png"
  },
  {
    text: "Excellent service, très flexible et accommodant. La voiture a rendu notre séjour à Marrakech encore plus agréable.",
    name: "Fadwa",
    title: "Chef de Projet",
    image: "/profil/marie.png"
  },
  {
    text: "Service de qualité supérieure. La réservation était facile et la voiture était prête à notre arrivée.",
    name: "Moustapha",
    title: "Développeur Web",
    image: "/profil/pierre.png"
  },
  {
    text: "Service exceptionnel chez Guide In Maroc, toujours ponctuels et des véhicules impeccables.",
    name: "Meryem",
    title: "Chef de Projet",
    image: "/profil/maria.png"
  },
  {
    text: "Une expérience de location agréable avec Guide In Maroc, personnel sympathique et tarifs compétitifs..",
    name: "Karima",
    title: "Développeur Web",
    image: "/profil/Pierrette.png"
  }
];

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Reservation products={newProducts} />
      <WhyChooseGimlocautomoto />
      <Hero />
      <NewProducts products={newProducts} />
      <Testimonial testimonials={testimonials} />
      <WhatsappButton /> 
      <MailButton mailto="info@guideinmaroc.com"/> 
      <Faq /> 
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '665c572ff25d7be08bfef82c';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
