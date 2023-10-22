/**
 * CardContainer Component
 *
 * A container component for housing CardImage and CardBody.
 * It sets the dimensions and styling for the card.
 *
 * @component
 * @param {JSX.Element} children - The child components (usually CardImage and CardBody).
 * @example
 *
 * const children = (
 *  <>
 *    <CardImage altText="Bank of America" imageUrl="https://example.com/image.png" />
 *    <CardBody bankAge={25} bankDescription="A great bank for your needs." bankName="Bank of America" />
 *  </>
 * );
 *
 * <CardContainer>{children}</CardContainer>
 */
const CardContainer = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return (
    <div className="w-64 m-4 rounded overflow-hidden shadow-lg my-2 mx-auto">
      {children}
    </div>
  );
};

export default CardContainer;
