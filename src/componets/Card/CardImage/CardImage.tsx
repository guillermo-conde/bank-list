import { CardImagetype } from "./CardImage.type";

/**
 * CardImage Component
 *
 * A to display images on the card.
 * It sets the image dimensions and styling.
 *
 * @component
 * @param {string} altText - The alternative text for the image for accessibility.
 * @param {string} imageUrl - The URL for the image to display.
 * @example
 *
 * <CardImage altText="Bank Logo" imageUrl="https://example.com/bank-logo.png" />
 */
const CardImage = ({ altText, imageUrl }: CardImagetype): JSX.Element => {
  return (
    <img
      className="w-full h-48 object-contain bg-gray-200"
      src={imageUrl}
      alt={altText}
    />
  );
};

export default CardImage;
