import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const TestimonialWrapper = styled.div`
  margin: 100px 0 0;
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
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
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
  flex-wrap: nowrap;
  animation: ${slide} 40s linear infinite;
  white-space: nowrap;
`;

const TestimonialItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 50px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 10px 0;
  text-align: center;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const AuthorImage = styled(Image)`
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
`;

const AuthorTitle = styled.div`
  font-size: 0.9rem;
  color: #666;
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
                <AuthorTitle>{testimonial.title}</AuthorTitle>
              </AuthorInfo>
            </Author>
          </TestimonialItem>
        ))}
      </Carousel>
    </TestimonialWrapper>
  );
}
