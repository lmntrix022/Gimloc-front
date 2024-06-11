import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const TestimonialWrapper = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #333;
  letter-spacing: 1px;
`;

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Carousel = styled.div`
  display: flex;
  animation: ${slide} 40s linear infinite;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    animation-duration: 60s;
  }
`;

const TestimonialItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 0 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin: 10px 0;
  text-align: center;
  font-style: italic;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const AuthorImage = styled(Image)`
  border-radius: 50%;
  margin-right: 15px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

export default function TestimonialCarousel({ testimonials }) {
  return (
    <TestimonialWrapper>
      <Title>CE QUE DISENT NOS CLIENTS</Title>
      <Carousel>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialItem key={index}>
            <TestimonialText>&#34;{testimonial.text}&#34;</TestimonialText>
            <Author>
              <AuthorImage src={testimonial.image} width={50} height={50} alt={testimonial.name} />
              <AuthorInfo>
                <AuthorName>{testimonial.name}</AuthorName>
              </AuthorInfo>
            </Author>
          </TestimonialItem>
        ))}
      </Carousel>
    </TestimonialWrapper>
  );
}
