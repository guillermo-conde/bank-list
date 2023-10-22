import { CardBodyType } from "./CardBody.type";

/**
 * CardBody Component
 *
 * A component that displays the body content of the card.
 * It shows the bank's name, description, and age.
 *
 * @component
 * @param {CardBodyType} props - The properties object for the component.
 * @param {string} props.bankName - The name of the bank.
 * @param {string} props.bankDescription - The description of the bank.
 * @param {number} props.bankAge - The age of the bank.
 * @example
 *
 * <CardBody bankName="Bank of America" bankDescription="A multinational investment bank and financial services company." bankAge={100} />
 */
const CardBody = ({
  bankName,
  bankDescription,
  bankAge,
}: CardBodyType): JSX.Element => {
  return (
    <div className="px-6 py-4">
      {/* Bank's name */}
      <div className="font-bold text-xl mb-2">{bankName}</div>

      {/* Description */}
      <p className="text-gray-700 text-base line-clamp-3">{bankDescription}</p>

      {/* Age */}
      <p className="mt-2">
        <span className="font-bold">Edad: </span>
        {bankAge}
      </p>
    </div>
  );
};

export default CardBody;
