import { BankInfoType } from "../../redux/BankInfo.type";
import CardContainer from "./CardContainer/CardContainer";
import CardBody from "./CardBody/CardBody";
import CardImage from "./CardImage/CardImage";

/**
 * Card Component
 *
 * A component that wraps CardImage and CardBody inside CardContainer to display bank information.
 *
 * @component
 * @param {BankInfoType} bankInfo - The bank information object.
 * @example
 *
 * const bankInfo = {
 *   bankName: 'Bank of America',
 *   url: 'https://example.com/image.png',
 *   age: 25,
 *   description: 'A great bank for your needs.'
 * };
 *
 * <Card bankInfo={bankInfo} />
 */
const Card = ({ bankInfo }: { bankInfo: BankInfoType }): JSX.Element => {
  return (
    <CardContainer>
      <>
        <CardImage altText={bankInfo.bankName} imageUrl={bankInfo.url} />
        <CardBody
          bankAge={bankInfo.age}
          bankDescription={bankInfo.description}
          bankName={bankInfo.bankName}
        />
      </>
    </CardContainer>
  );
};

export default Card;
