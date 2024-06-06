import { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const FaqContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin-bottom: 10px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AnswerWrapper = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  transition: max-height 0.5s ease;
`;

const Answer = styled.div`
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin-bottom: 10px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: opacity 0.5s ease;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;

const faqData = [
  {
    question: "Quels types de véhicules proposez-vous à la location ?",
    answer: "Nous proposons une large gamme de véhicules pour répondre à vos besoins, incluant des voitures économiques, des SUV, des 4x4, et des véhicules de luxe. Nos véhicules sont bien entretenus et régulièrement inspectés pour garantir votre sécurité et confort."
  },
  {
    question: "Comment réserver un véhicule ?",
    answer: "Vous pouvez réserver un véhicule directement sur notre site web en remplissant le formulaire de réservation, ou en nous appelant au [numéro de téléphone]. Vous recevrez une confirmation par email une fois votre réservation complétée."
  },
  {
    question: "Quels documents dois-je fournir pour louer un véhicule ?",
    answer: "Pour louer un véhicule, vous devez présenter une pièce d'identité valide (passeport ou carte d'identité), un permis de conduire en cours de validité et une carte de crédit pour le dépôt de garantie."
  },
  {
    question: "Quels sont vos tarifs de location ?",
    answer: "Nos tarifs de location varient en fonction du type de véhicule et de la durée de la location. Vous pouvez consulter nos tarifs détaillés sur notre page de réservation ou nous contacter pour un devis personnalisé."
  },
  {
    question: "Proposez-vous des services de guides touristiques ?",
    answer: "Oui, nous proposons des services de guides touristiques expérimentés qui peuvent vous faire découvrir Marrakech et ses alentours. Nos guides sont multilingues et passionnés par l'histoire et la culture locales."
  },
  {
    question: "Comment réserver un guide touristique ?",
    answer: "Vous pouvez réserver un guide touristique en même temps que votre véhicule ou séparément via notre site web ou par téléphone. Nous vous recommandons de réserver à l'avance pour garantir la disponibilité."
  },
  {
    question: "Quels sont vos horaires de fonctionnement ?",
    answer: "Notre agence est ouverte tous les jours de [heure d'ouverture] à [heure de fermeture]. Nous offrons également un service de support téléphonique 24/7 pour toute assistance urgente."
  },
  {
    question: "Avez-vous un service de livraison de véhicules ?",
    answer: "Oui, nous offrons un service de livraison et de récupération de véhicules à votre hôtel, à l'aéroport, ou à tout autre endroit de votre choix à Marrakech et dans les environs."
  },
  {
    question: "Quelles sont les options d'assurance disponibles ?",
    answer: "Nous offrons plusieurs options d'assurance pour vous protéger lors de la location. Cela inclut l'assurance responsabilité civile, l'assurance tous risques, et des options supplémentaires comme l'assistance routière. Veuillez consulter nos termes et conditions pour plus de détails."
  },
  {
    question: "Quelles sont vos politiques d'annulation ?",
    answer: "Nos politiques d'annulation varient en fonction de la durée de la réservation et de la période de l'année. Veuillez consulter notre page de politique d'annulation ou nous contacter directement pour plus d'informations."
  },
  {
    question: "Puis-je modifier ma réservation après l'avoir confirmée ?",
    answer: "Oui, vous pouvez modifier votre réservation en nous contactant directement. Nous ferons de notre mieux pour accommoder vos changements, sous réserve de disponibilité."
  },
  {
    question: "Proposez-vous des équipements supplémentaires avec les véhicules ?",
    answer: "Oui, nous proposons des équipements supplémentaires tels que des sièges pour enfants, des GPS, et des porte-bagages. Vous pouvez les ajouter à votre réservation moyennant des frais supplémentaires."
  },
  {
    question: "Puis-je louer un véhicule si je suis jeune conducteur ?",
    answer: "Les conducteurs doivent avoir au moins [âge minimum requis] ans et posséder un permis de conduire depuis au moins [durée minimum requise] années pour louer un véhicule chez nous. Des frais supplémentaires peuvent s'appliquer pour les jeunes conducteurs."
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les paiements par carte de crédit (Visa, MasterCard, etc.), ainsi que les paiements en espèces pour certaines réservations. Un dépôt de garantie est requis pour toutes les locations."
  }
];

const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <FaqContainer>
      <Title>FAQ</Title>
      {faqData.map((faq, index) => (
        <div key={index}>
          <Question onClick={() => toggleQuestion(index)}>
            {faq.question}
          </Question>
          <AnswerWrapper isOpen={openQuestionIndex === index}>
            <Answer isOpen={openQuestionIndex === index}>{faq.answer}</Answer>
          </AnswerWrapper>
        </div>
      ))}
    </FaqContainer>
  );
};

export default Faq;
