export default function Tabs({ children, buttons, buttonContainer='menu ' }) {
  let ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
