import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { fr } from 'date-fns/locale'; // Importer le locale français
import { differenceInDays } from 'date-fns'; // Importer la fonction differenceInDays
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const ReservationFormContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 9px 9px 16px rgba(190, 190, 190, 0.7), -9px -9px 16px rgba(255, 255, 255, 0.7);
  max-width: 300px;
  width: 100%;
  text-align: left;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 2;

  &:hover {
    box-shadow: inset 9px 9px 16px rgba(190, 190, 190, 0.7), inset -9px -9px 16px rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CustomSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 3px 3px 6px rgba(190, 190, 190, 0.7), inset -3px -3px 6px rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  color: #333;
  backdrop-filter: blur(5px);
`;

const OptionDetails = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 9px 9px 16px rgba(190, 190, 190, 0.7), -9px -9px 16px rgba(255, 255, 255, 0.7);
  top: ${({ top }) => top}px;
  left: 100%;
  margin-left: 10px;
  z-index: 10;
  width: 200px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    left: auto;
    right: 0;
  }
`;

const SamePlaceReturn = styled.div`
  display: flex;
  align-items: center;
  color: #555;
`;

const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(190, 190, 190, 0.7), -3px -3px 6px rgba(255, 255, 255, 0.7);
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);

  &:checked::after {
    content: '\\2714';
    font-size: 12px;
    color: #333;
    position: absolute;
    top: 2px;
    left: 2px;
  }

  &:hover {
    box-shadow: inset 3px 3px 6px rgba(190, 190, 190, 0.7), inset -3px -3px 6px rgba(255, 255, 255, 0.7);
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #555;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 3px 3px 6px rgba(190, 190, 190, 0.7), inset -3px -3px 6px rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  color: #333;
  backdrop-filter: blur(5px);
`;

const FindVehicleButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ disabled }) => (disabled ? '#ff7a00' : '#000')};
  color: ${({ disabled }) => (disabled ? '#000' : '#ff7a00')};
  border: none;
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 3px 3px 6px rgba(190, 190, 190, 0.7), -3px -3px 6px rgba(255, 255, 255, 0.7);

  &:hover {
    color: #ff7b01;
    background-color: #000;
    box-shadow: ${({ disabled }) => (disabled ? 'none' : 'inset 3px 3px 6px rgba(190, 190, 190, 0.7), inset -3px -3px 6px rgba(255, 255, 255, 0.7)')};
  }
`;

const ResetLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #ff7a00;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ReturnContainer = styled.div`
  max-height: ${({ show }) => (show ? '200px' : '0')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
`;

const bureauDetails = {
  'Casablanca-aeroport': {
    address: "Adresse de Fès aéroport",
    phone: "Numéro de téléphone de Fès aéroport",
    fax: "Numéro de fax de Fès aéroport",
    hours: "Lundi - Vendredi : 09h00 - 21h00",
  },
  'Marrakech-aeroport': {
    address: "1230 E Vermont, Los Angeles, CA, USA",
    phone: "+212627025716",
    fax: "+212627025716",
    hours: "Lundi - Vendredi : 09h00 - 21h00, Samedi : 09h00 - 19h00, Dimanche : Fermé",
  },
  'fes-aeroport': {
    address: "Adresse de Fès aéroport",
    phone: "Numéro de téléphone de Fès aéroport",
    fax: "Numéro de fax de Fès aéroport",
    hours: "Lundi - Vendredi : 09h00 - 21h00",
  },
  'tanger-aeroport': {
    address: "1230 E Vermont, Los Angeles, CA, USA",
    phone: "+212627025716",
    fax: "+212627025716",
    hours: "Lundi - Vendredi : 09h00 - 21h00, Samedi : 09h00 - 19h00, Dimanche : Fermé",
  },
  'rabat-aeroport': {
    address: "Adresse de Rabat aéroport",
    phone: "Numéro de téléphone de Rabat aéroport",
    fax: "Numéro de fax de Rabat aéroport",
    hours: "Lundi - Vendredi : 09h00 - 21h00",
  },
  'ouarzazate-aeroport': {
    address: "Adresse de Ouarzazate aéroport",
    phone: "Numéro de téléphone de Ouarzazate aéroport",
    fax: "Numéro de fax de Ouarzazate aéroport",
    hours: "Lundi - Vendredi : 09h00 - 21h00",
  },
  'agadir-aeroport': {
    address: "Adresse de Agadir aéroport",
    phone: "Numéro de téléphone de Agadir aéroport",
    fax: "Numéro de fax de Agadir aéroport",
    hours: "Lundi - Vendredi : 09h00 - 21h00",
  }
};

const ReservationForm = ({ onFindVehicle }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startBureau, setStartBureau] = useState('');
  const [endBureau, setEndBureau] = useState('');
  const [hoveredOption, setHoveredOption] = useState(null);
  const [hoveredOptionTop, setHoveredOptionTop] = useState(0);
  const [samePlaceReturn, setSamePlaceReturn] = useState(false);

  const isFormValid = startDate && endDate && startBureau && (samePlaceReturn || endBureau);

  const handleFindVehicleClick = () => {
    if (isFormValid) {
      const daysBetween = differenceInDays(endDate, startDate);
      const formData = {
        startDate,
        endDate,
        startBureau,
        endBureau: samePlaceReturn ? startBureau : endBureau,
        samePlaceReturn,
        daysBetween, // Ajouter la durée de la location ici
      };
      localStorage.setItem('daysBetween', daysBetween); // Stocker dans localStorage
      onFindVehicle(formData); // Pass the form data to the onFindVehicle function
    }
  };

  return (
    <ReservationFormContainer>
      <Title>Départ</Title>
      <SelectContainer>
        <CustomSelect
          value={startBureau}
          onChange={(e) => setStartBureau(e.target.value)}
          onMouseLeave={() => setHoveredOption(null)}
        >
          <option value="">Choisissez le bureau</option>
          {Object.keys(bureauDetails).map((bureau) => (
            <option
              key={bureau}
              onMouseEnter={(e) => {
                const rect = e.target.getBoundingClientRect();
                setHoveredOption(bureau);
                setHoveredOptionTop(rect.top - rect.height);
              }}
              value={bureau}
            >
              {bureau.charAt(0).toUpperCase() + bureau.slice(1).replace('-', ' ')}
            </option>
          ))}
        </CustomSelect>
        {hoveredOption && (
          <OptionDetails show top={hoveredOptionTop}>
            <p>Adresse: {bureauDetails[hoveredOption].address}</p>
            <p>Téléphone: {bureauDetails[hoveredOption].phone}</p>
            <p>Fax: {bureauDetails[hoveredOption].fax}</p>
            <p>Horaires: {bureauDetails[hoveredOption].hours}</p>
          </OptionDetails>
        )}
      </SelectContainer>
      <SamePlaceReturn>
        <CustomCheckbox
          id="same-place-return"
          checked={samePlaceReturn}
          onChange={(e) => setSamePlaceReturn(e.target.checked)}
        />
        <Label htmlFor="same-place-return">Retour au même endroit</Label>
      </SamePlaceReturn>
      <StyledDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Date de Départ"
        dateFormat="dd/MM/yyyy" // Format jj/mm/an
        locale={fr} // Passer le locale français
      />
      <Title>Retour</Title>
      <ReturnContainer show={!samePlaceReturn}>
        <SelectContainer>
          <CustomSelect
            value={endBureau}
            onChange={(e) => setEndBureau(e.target.value)}
            onMouseLeave={() => setHoveredOption(null)}
          >
            <option value="">Choisissez le bureau</option>
            {Object.keys(bureauDetails).map((bureau) => (
              <option
                key={bureau}
                onMouseEnter={(e) => {
                  const rect = e.target.getBoundingClientRect();
                  setHoveredOption(bureau);
                  setHoveredOptionTop(rect.top - rect.height);
                }}
                value={bureau}
              >
                {bureau.charAt(0).toUpperCase() + bureau.slice(1).replace('-', ' ')}
              </option>
            ))}
          </CustomSelect>
          {hoveredOption && (
            <OptionDetails show top={hoveredOptionTop}>
              <p>Adresse: {bureauDetails[hoveredOption].address}</p>
              <p>Téléphone: {bureauDetails[hoveredOption].phone}</p>
              <p>Fax: {bureauDetails[hoveredOption].fax}</p>
              <p>Horaires: {bureauDetails[hoveredOption].hours}</p>
            </OptionDetails>
          )}
        </SelectContainer>
      </ReturnContainer>
      <StyledDatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="Date de retour"
        minDate={startDate}
        dateFormat="dd/MM/yyyy" // Format jj/mm/an
        locale={fr} // Passer le locale français
      />
      <FindVehicleButton disabled={!isFormValid} onClick={handleFindVehicleClick}>
        Trouver un véhicule
      </FindVehicleButton>
      <ResetLink href="#">Effacer Les Données</ResetLink>
    </ReservationFormContainer>
  );
};

export default ReservationForm;