import React from "react";
import { styled } from "styled-components";
import Map from "./Map";

const Contact = () => {
  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    background: #3c3b3f;
    background: -webkit-linear-gradient(to bottom, #3c3b3f, #605c3c, #3c3b3f);
    background: linear-gradient(to bottom, #605c3c, #3c3b3f);
  `;

  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    margin: 50px;
    align-items: center;
    justify-content: flex-end;
  `;
  const Title = styled.h1`
    font-size: 20px;
    font-weight: 400;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 25rem;
  `;

  const Input = styled.input`
    padding: 10px;
    border: none;
    background-color: #e8e6e6;
  `;

  const TextArea = styled.textarea`
    border: none;
    background-color: #e8e6e6;
    padding: 10px;
  `;

  const Button = styled.button`
    align-items: center;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 10px;
    position: relative;
    text-decoration: none;
    width: auto;

    &:hover {
      background: #292e49;
      color: #fff;
    }
  `;

  const Right = styled.div`
    flex: 1;
  `;

  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Message" rows={10} />
            <Button>Submit</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
